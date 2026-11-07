# Pratiksha & Sankalp — Engagement Invitation Website

A luxury, cinematic, interactive digital wedding invitation website crafted with Next.js 14, React 18, TypeScript, and Tailwind CSS. Faithfully engineered to recreate the atmosphere, animations, typography, and interactive experience of the reference wedding invitation.

---

## 💍 Couple & Celebration Details

- **Bride:** Pratiksha Sahoo
  - *Father:* Shri Tankadhar Sahoo
  - *Mother:* Smt. Gitanjali Behera
- **Groom:** Sankalp Rath
  - *Father:* Dr. Krushna Chandra Rath
  - *Mother:* Dr. Geetashree Mishra
- **Wedding Date:** 27 November
- **Time:** 12 PM onwards
- **Venue:** Ruby by Occasions
  - *Address:* Cuttack–Puri Bypass Road, near Sai Mandira Bypass, Bhubaneswar, Odisha

---

## ✨ Key Features & Sections

1. **Cover Monogram Screen (`OpeningCover`)**:
   - Full-screen opening cover with the majestic intertwined **P & S** monogram.
   - Cinematic glowing gold animation (`loaderGlow`), sacred title, couple names, and date.
   - Interactive `TAP TO OPEN INVITATION` button with pulsing gold border.
   - Ripple transition and "Preparing your invitation..." animation that seamlessly starts the wedding audio and reveals the main invitation.

2. **Main Hero Invitation (`HeroSection`)**:
   - True-to-scale ornate arch frame with high-fidelity responsive scaling.
   - Circular couple portrait inside a glowing double-ring golden frame.
   - Personalized guest greeting dynamically powered by the URL query parameter (`?guest=Ashmit`).
   - Detailed event schedule badge (Date, Venue, Time).

3. **Couple Story & Gallery (`CoupleSection`)**:
   - Features all original uploaded couple photographs without altering faces or clothing.
   - Profile cards for Bride & Groom with family lineages.
   - Interactive photo gallery with hover zoom and lightbox expansion modal.

4. **Celebration Schedule (`EventsSection`)**:
   - Auspicious invocation: `ॐ शुभ विवाह · Shubh Vivah`.
   - Comprehensive event itinerary: Mehendi, Sangeet, Haldi, Shubh Vivah, and Reception & Dinner.
   - Time badges, location pins, and custom gold shimmer bars.

5. **Family Blessings (`FamilySection`)**:
   - Heartfelt personal note from the couple and families.
   - Lineage cards for Bride's parents (*Smt. Gitanjali Behera & Shri Tankadhar Sahoo*) and Groom's parents (*Dr. Geetashree Mishra & Dr. Krushna Chandra Rath*).

6. **Venue & Live Navigation (`VenueSection`)**:
   - Displays Ruby by Occasions, Cuttack–Puri Bypass Road, Bhubaneswar.
   - Live Google Maps embed with custom royal golden corner accents.
   - One-click "Open in Google Maps / Get Directions" button.

7. **RSVP & Closing (`ClosingSection`)**:
   - Interactive RSVP form with guest name, attendance confirmation, guest count, and wishes.
   - Celebratory golden confetti burst on submission.
   - Formal family compliments and wedding hashtag `#PratikshaWedsSankalp`.

8. **Floating Equalizer & Audio Experience (`FloatingMusic`)**:
   - Floating glassmorphism music pill at the bottom-right.
   - 4 animated SVG equalizer wave bars indicating playing state.
   - Double-click anywhere on the page to toggle music playback.
   - Browser autoplay compliant (starts when user taps the opening invitation).

9. **Dedicated Admin Center (`/admin`)**:
   - Protected with password authentication (`pratiksha2026`).
   - Music management: upload MP3, WAV, or OGG files.
   - Audio preview player with Play, Pause, Seek, and Volume before publishing.
   - One-click "Set as Active Wedding Background Music", "Replace Song", or "Reset to Default".
   - Review tab for all 8 couple photos.
   - Real-time RSVP guest monitor.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the wedding invitation.

### Testing Guest Personalization:
- Test with guest name: [http://localhost:3000/?guest=Ashmit](http://localhost:3000/?guest=Ashmit)
- General invitation (no parameter): [http://localhost:3000](http://localhost:3000)

### Accessing Admin Center:
- URL: [http://localhost:3000/admin](http://localhost:3000/admin)
- Default Password: `pratiksha2026`

---

## 🎵 Custom Music Storage (Supabase or Local)

The website is engineered with a dual-layer audio management architecture:

1. **Instant Out-of-the-Box Local Storage:**
   - Any audio uploaded via `/admin` is saved to `public/music/` and immediately set as the active wedding music without requiring external accounts or configuration.

2. **Supabase Storage (Optional for Cloud Redeployment):**
   - If hosting on serverless platforms (like Vercel) and you wish uploads to persist across fresh code builds, create a Supabase project with a public bucket named `wedding-music`.
   - Copy `.env.example` to `.env.local`:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ADMIN_PASSWORD=pratiksha2026
     ```
