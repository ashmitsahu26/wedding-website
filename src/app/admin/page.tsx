"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface CurrentSong {
  activeSongUrl: string;
  filename: string;
  title: string;
  updatedAt: string;
  isSupabase?: boolean;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const [currentSong, setCurrentSong] = useState<CurrentSong | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const previewAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  // Tab state
  const [activeTab, setActiveTab] = useState<"music" | "photos" | "rsvps">("music");
  const [rsvps, setRsvps] = useState<any[]>([]);

  // Check session storage on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchCurrentSong();
      fetchRsvps();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin PIN / password: pratiksha2026 or admin
    if (password === "pratiksha2026" || password === "admin" || password === "wedding2026") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      setAuthError("");
      fetchCurrentSong();
      fetchRsvps();
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  const fetchCurrentSong = async () => {
    try {
      const res = await fetch("/api/music/current");
      const data = await res.json();
      setCurrentSong(data);
    } catch {
      console.error("Failed to fetch current song");
    }
  };

  const fetchRsvps = async () => {
    try {
      const res = await fetch("/api/rsvp");
      const data = await res.json();
      setRsvps(Array.isArray(data) ? data : []);
    } catch {
      // Non-blocking
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = [".mp3", ".wav", ".ogg"];
    const ext = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validTypes.includes(ext)) {
      setMessage({
        type: "error",
        text: "Unsupported format. Please select an MP3, WAV, or OGG file.",
      });
      return;
    }

    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setIsPreviewPlaying(false);
    setMessage(null);
  };

  const handleUploadSong = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", selectedFile.name.replace(/\.[^/.]+$/, ""));

      const res = await fetch("/api/music/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setMessage({
        type: "success",
        text: `Song "${data.filename}" successfully published as the website's active background music!`,
      });

      setSelectedFile(null);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      fetchCurrentSong();
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Upload failed" });
    } finally {
      setUploading(false);
    }
  };

  const handleResetToDefault = async () => {
    if (!confirm("Are you sure you want to reset to the default instrumental song?")) {
      return;
    }

    try {
      const res = await fetch("/api/music/current", { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setMessage({
          type: "success",
          text: "Reset back to the default romantic wedding music.",
        });
        fetchCurrentSong();
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    }
  };

  const togglePreviewPlay = () => {
    if (!previewAudioRef.current) return;
    if (previewAudioRef.current.paused) {
      previewAudioRef.current.play();
      setIsPreviewPlaying(true);
    } else {
      previewAudioRef.current.pause();
      setIsPreviewPlaying(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#140801] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#1e0e02] border border-[#C9A96E]/40 rounded-xl p-8 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-6">
            <span className="text-[#C9A96E] text-2xl font-serif">✦ &nbsp; P &amp; S &nbsp; ✦</span>
            <h1 className="text-xl font-bold font-serif text-[#F5E6C8] mt-2">
              Wedding Administration
            </h1>
            <p className="text-xs text-[#C9A96E]/70 mt-1">
              Protected access to wedding audio &amp; configuration
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C9A96E] mb-2 font-mono">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (e.g. pratiksha2026)"
                className="w-full bg-[#120600] border border-[#C9A96E]/40 rounded-lg p-3 text-sm text-[#F5E6C8] outline-none focus:border-[#C9A96E]"
              />
              {authError && <p className="text-xs text-red-400 mt-2">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#B8860B] hover:bg-[#C9A96E] text-[#1a0c02] font-semibold py-3 rounded-lg text-xs uppercase tracking-widest transition duration-200"
            >
              Sign In to Admin
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-xs text-[#C9A96E]/60 hover:text-[#C9A96E] underline"
            >
              ← Back to Wedding Invitation
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#140801] text-[#F5E6C8] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#C9A96E]/30 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#C9A96E] text-lg">✦</span>
              <h1 className="text-2xl font-serif font-bold text-[#F5E6C8]">
                Pratiksha &amp; Sankalp — Admin Center
              </h1>
            </div>
            <p className="text-xs text-[#C9A96E]/75 mt-1">
              Music management, photography review, and RSVP monitor
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="bg-[#C9A96E]/15 hover:bg-[#C9A96E]/25 border border-[#C9A96E]/40 text-[#C9A96E] px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition"
            >
              Preview Invitation ↗
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem("admin_authenticated");
                setIsAuthenticated(false);
              }}
              className="bg-red-950/40 hover:bg-red-900/60 border border-red-700/50 text-red-300 px-3 py-2 rounded-lg text-xs tracking-wider uppercase transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-[#C9A96E]/20 pb-2">
          <button
            onClick={() => setActiveTab("music")}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition ${
              activeTab === "music"
                ? "bg-[#C9A96E] text-[#140801]"
                : "text-[#C9A96E]/70 hover:text-[#C9A96E]"
            }`}
          >
            🎵 Background Music
          </button>
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition ${
              activeTab === "photos"
                ? "bg-[#C9A96E] text-[#140801]"
                : "text-[#C9A96E]/70 hover:text-[#C9A96E]"
            }`}
          >
            📸 8 Couple Photos
          </button>
          <button
            onClick={() => setActiveTab("rsvps")}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition ${
              activeTab === "rsvps"
                ? "bg-[#C9A96E] text-[#140801]"
                : "text-[#C9A96E]/70 hover:text-[#C9A96E]"
            }`}
          >
            💌 Guest RSVPs ({rsvps.length})
          </button>
        </div>

        {/* Status / Alert Messages */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm border ${
              message.type === "success"
                ? "bg-emerald-950/50 border-emerald-500/50 text-emerald-200"
                : "bg-red-950/50 border-red-500/50 text-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* TAB 1: MUSIC MANAGEMENT */}
        {activeTab === "music" && (
          <div className="space-y-6">
            {/* Current Song Status Card */}
            <div className="bg-[#1e0e02] border border-[#C9A96E]/30 rounded-xl p-6 shadow-lg">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] mb-4 flex items-center justify-between">
                <span>Active Background Music</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  LIVE ON SITE
                </span>
              </h2>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#120600] p-4 rounded-lg border border-[#C9A96E]/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#B8860B]/20 border border-[#B8860B] flex items-center justify-center text-xl">
                    🎼
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#F5E6C8]">
                      {currentSong?.title || currentSong?.filename || "Loading..."}
                    </div>
                    <div className="text-xs text-[#C9A96E]/70 mt-0.5">
                      File: {currentSong?.filename} &nbsp;·&nbsp; Last Updated:{" "}
                      {currentSong?.updatedAt
                        ? new Date(currentSong.updatedAt).toLocaleString()
                        : "Default"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <audio
                    src={currentSong?.activeSongUrl || "/music/wedding-song.mp3"}
                    controls
                    className="h-9 w-full md:w-64"
                  />
                  <button
                    onClick={handleResetToDefault}
                    className="text-xs bg-red-950/50 hover:bg-red-900 border border-red-700/60 text-red-200 px-3 py-2 rounded-lg transition"
                    title="Reset to default instrumental song"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Upload New Song Card */}
            <div className="bg-[#1e0e02] border border-[#C9A96E]/30 rounded-xl p-6 shadow-lg">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] mb-2">
                Upload New Wedding Song
              </h2>
              <p className="text-xs text-[#C9A96E]/70 mb-4">
                Supported formats: <strong>MP3, WAV, OGG</strong>. Audio preview available before publishing.
              </p>

              {/* Drag & Drop File Picker */}
              <div className="border-2 border-dashed border-[#C9A96E]/40 hover:border-[#C9A96E] rounded-xl p-8 text-center bg-[#120600]/60 transition">
                <input
                  type="file"
                  id="audio-file-input"
                  accept=".mp3,.wav,.ogg,audio/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <label
                  htmlFor="audio-file-input"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/40 flex items-center justify-center text-3xl mb-3">
                    📤
                  </div>
                  <span className="text-sm font-semibold text-[#F5E6C8]">
                    {selectedFile ? selectedFile.name : "Click to select or drop wedding audio file"}
                  </span>
                  <span className="text-xs text-[#C9A96E]/60 mt-1">
                    {selectedFile
                      ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to preview`
                      : "MP3, WAV, or OGG up to 50MB"}
                  </span>
                </label>
              </div>

              {/* Preview Player & Confirmation */}
              {previewUrl && (
                <div className="mt-6 p-4 bg-[#120600] rounded-xl border border-[#C9A96E]/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9A96E]">
                        Preview Unsaved Song
                      </span>
                      <div className="text-sm font-semibold text-[#F5E6C8]">
                        {selectedFile?.name}
                      </div>
                    </div>
                    <button
                      onClick={togglePreviewPlay}
                      className="bg-[#C9A96E] text-[#140801] font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#FFD700] transition"
                    >
                      {isPreviewPlaying ? "⏸ Pause Preview" : "▶ Play Preview"}
                    </button>
                  </div>

                  <audio
                    ref={previewAudioRef}
                    src={previewUrl}
                    onEnded={() => setIsPreviewPlaying(false)}
                    controls
                    className="w-full h-9"
                  />

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSelectedFile(null);
                        URL.revokeObjectURL(previewUrl);
                        setPreviewUrl(null);
                      }}
                      className="px-4 py-2 text-xs text-[#C9A96E]/70 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUploadSong}
                      disabled={uploading}
                      className="bg-[#B8860B] hover:bg-[#C9A96E] text-[#140801] font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-widest transition duration-200 shadow-lg disabled:opacity-50"
                    >
                      {uploading ? "Publishing to Website..." : "Set As Wedding Background Song ✓"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Supabase Storage Integration Guide */}
            <div className="bg-[#120600]/80 border border-[#C9A96E]/20 rounded-xl p-5 text-xs space-y-2 text-[#C9A96E]/80">
              <div className="flex items-center gap-2 font-semibold text-[#C9A96E]">
                <span>☁</span>
                <span>Storage &amp; Deployment Information</span>
              </div>
              <p>
                • Uploaded songs are immediately saved to <code>public/music/</code> and active for all visitors instantly.
              </p>
              <p>
                • For cloud persistence across serverless redeploys (e.g. Vercel), set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> with a storage bucket named <code>wedding-music</code>.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: COUPLE PHOTOGRAPHS */}
        {activeTab === "photos" && (
          <div className="space-y-6">
            <div className="bg-[#1e0e02] border border-[#C9A96E]/30 rounded-xl p-6 shadow-lg">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] mb-2">
                All 8 Couple Photographs
              </h2>
              <p className="text-xs text-[#C9A96E]/70 mb-6">
                All 8 photographs of Pratiksha &amp; Sankalp used across the Hero, Couple story, Gallery, Events, and Closing sections. Original facial identity &amp; colors are 100% preserved.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="bg-[#120600] border border-[#C9A96E]/30 rounded-lg overflow-hidden flex flex-col"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-black">
                      <img
                        src={`/images/photo-${num}.jpg`}
                        alt={`Photo ${num}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 bg-[#1e0e02]">
                      <div className="text-xs font-semibold text-[#F5E6C8]">
                        Photo {num}
                      </div>
                      <div className="text-[10px] text-[#C9A96E]/70 truncate">
                        photo-{num}.jpg
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GUEST RSVPS */}
        {activeTab === "rsvps" && (
          <div className="bg-[#1e0e02] border border-[#C9A96E]/30 rounded-xl p-6 shadow-lg">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] mb-4">
              Guest RSVP Responses ({rsvps.length})
            </h2>

            {rsvps.length === 0 ? (
              <div className="text-center py-12 text-[#C9A96E]/50 text-sm">
                No RSVP responses recorded yet. Responses submitted on the website will appear here in real time.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[#C9A96E]/30 text-[#C9A96E] font-mono uppercase">
                    <tr>
                      <th className="py-2 px-3">Guest Name</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Count</th>
                      <th className="py-2 px-3">Wishes</th>
                      <th className="py-2 px-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C9A96E]/10">
                    {rsvps.map((r, i) => (
                      <tr key={i} className="hover:bg-[#C9A96E]/5">
                        <td className="py-3 px-3 font-semibold text-[#F5E6C8]">
                          {r.name}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                              r.attending === "yes"
                                ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                                : "bg-red-950 text-red-300 border border-red-800"
                            }`}
                          >
                            {r.attending === "yes" ? "Attending" : "Declined"}
                          </span>
                        </td>
                        <td className="py-3 px-3">{r.guestCount}</td>
                        <td className="py-3 px-3 max-w-xs truncate text-[#C9A96E]/80">
                          {r.wishes || "—"}
                        </td>
                        <td className="py-3 px-3 text-[#C9A96E]/50">
                          {r.createdAt
                            ? new Date(r.createdAt).toLocaleDateString()
                            : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
