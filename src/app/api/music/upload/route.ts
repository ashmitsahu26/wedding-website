import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const musicDir = path.join(process.cwd(), "public", "music");
const configPath = path.join(musicDir, "music-config.json");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = (formData.get("title") as string) || "Custom Wedding Song";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const validExtensions = [".mp3", ".wav", ".ogg"];
    const ext = path.extname(file.name).toLowerCase();
    if (!validExtensions.includes(ext)) {
      return NextResponse.json(
        { error: "Invalid format. Only MP3, WAV, and OGG files are allowed." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let songUrl = "";
    const cleanFilename = `wedding-song-${Date.now()}${ext}`;

    // 1. If Supabase is configured, upload to Supabase Storage 'wedding-music' bucket
    if (isSupabaseConfigured && supabase) {
      try {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("wedding-music")
          .upload(cleanFilename, buffer, {
            contentType: file.type || "audio/mpeg",
            upsert: true,
          });

        if (!uploadError && uploadData) {
          const { data: publicData } = supabase.storage
            .from("wedding-music")
            .getPublicUrl(cleanFilename);
          if (publicData?.publicUrl) {
            songUrl = publicData.publicUrl;
          }
        }
      } catch (sbErr) {
        console.warn("Supabase upload fallback to local storage:", sbErr);
      }
    }

    // 2. Also save to local public/music/ for guaranteed zero-dependency playback
    if (!fs.existsSync(musicDir)) {
      fs.mkdirSync(musicDir, { recursive: true });
    }

    const localFilePath = path.join(musicDir, cleanFilename);
    fs.writeFileSync(localFilePath, buffer);

    // Also overwrite public/music/wedding-song.mp3 if it's an mp3 for standard file replacement
    if (ext === ".mp3") {
      fs.writeFileSync(path.join(musicDir, "wedding-song.mp3"), buffer);
    }

    if (!songUrl) {
      songUrl = `/music/${cleanFilename}`;
    }

    // 3. Update music-config.json
    const newConfig = {
      activeSongUrl: songUrl,
      filename: file.name,
      storedAs: cleanFilename,
      title: title || file.name,
      sizeBytes: file.size,
      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2));

    return NextResponse.json({
      success: true,
      ...newConfig,
    });
  } catch (err: any) {
    console.error("Music upload error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to upload audio file" },
      { status: 500 }
    );
  }
}
