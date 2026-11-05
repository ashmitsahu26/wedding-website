import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { isSupabaseConfigured } from "@/lib/supabase";

const configPath = path.join(process.cwd(), "public", "music", "music-config.json");

function getMusicConfig() {
  try {
    if (fs.existsSync(configPath)) {
      const data = fs.readFileSync(configPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading music config:", err);
  }
  return {
    activeSongUrl: "/music/wedding-song.mp3",
    filename: "wedding-song.mp3",
    title: "Sacred Wedding Song",
    updatedAt: new Date().toISOString(),
  };
}

export async function GET() {
  const config = getMusicConfig();
  return NextResponse.json({
    ...config,
    isSupabase: isSupabaseConfigured,
  });
}

export async function DELETE() {
  try {
    const defaultConfig = {
      activeSongUrl: "/music/default-wedding-song.mp3",
      filename: "default-wedding-song.mp3",
      title: "Default Wedding Instrumental",
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    return NextResponse.json({ success: true, ...defaultConfig });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
