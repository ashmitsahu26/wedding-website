import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const rsvpFile = path.join(process.cwd(), "public", "rsvp-data.json");

export async function GET() {
  try {
    if (fs.existsSync(rsvpFile)) {
      const data = fs.readFileSync(rsvpFile, "utf-8");
      return NextResponse.json(JSON.parse(data));
    }
  } catch (err) {
    console.error("Error reading RSVPs:", err);
  }
  return NextResponse.json([]);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const entry = {
      id: Date.now().toString(),
      name: body.name || "Anonymous Guest",
      attending: body.attending || "yes",
      guestCount: body.guestCount || "1",
      wishes: body.wishes || "",
      createdAt: new Date().toISOString(),
    };

    // Save locally
    let list: any[] = [];
    if (fs.existsSync(rsvpFile)) {
      try {
        list = JSON.parse(fs.readFileSync(rsvpFile, "utf-8"));
      } catch {
        list = [];
      }
    }
    list.unshift(entry);
    fs.writeFileSync(rsvpFile, JSON.stringify(list, null, 2));

    // Optional Supabase backup
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from("rsvps").insert([entry]);
      } catch {
        // Non-blocking
      }
    }

    return NextResponse.json({ success: true, entry });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
