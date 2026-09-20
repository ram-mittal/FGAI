# Hyperframes Composition Brief: AIM3002P Generative AI Course Portal

## Objective
Create a short launch-style brag video for the AIM3002P Generative AI Course Portal.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 18 seconds

## Source Material
- Project root: `c:\Users\hp\OneDrive\Desktop\githubb`
- Primary files read: `src/app/page.tsx`, `src/app/globals.css`, `src/data/courseData.ts`
- Product name: AIM3002P - Fundamentals of Generative Artificial Intelligence
- Tagline / strongest claim: "Find what you need in 2-3 clicks"
- Key UI or visual moment to recreate: The Quick Access cards grid and Instructor Profile badge
- Copy that must appear verbatim:
  - "Fundamentals of Generative Artificial Intelligence"
  - "Course Instructor: Prof. Shraddha Jadhav"
  - "Built with heart for students"

## Creative Direction
- Tone preset: polished
- Creative direction: Sleek academic showcase
- Interpretation: Restrained pacing, letting the clean typography and UI layout breathe. Minimal chaos, maximum clarity.
- Angle: A modern "unboxing" of the course portal that makes finding course material simple and beautiful.
- Hook: The course code badge dropping in.
- Outro / punchline: "Built with heart for students. Made by Ram Mittal."
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign

## Visual Identity
- Background: `oklch(0.99 0.002 260)`
- Text: `oklch(0.17 0.02 260)`
- Accent: `oklch(0.42 0.15 260)`
- Display font: sans
- Body font: sans
- Visual references from the project: The colorful Quick Access grid (blue, emerald, purple, orange, rose, cyan), and the violet-to-indigo gradient avatar badge.

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Scene 1 — The Hook — 4s — Course Badge and Title Reveal
2. Scene 2 — The Instructor — 3s — Prof. Shraddha Jadhav Avatar and Name
3. Scene 3 — Quick Access — 6s — Cascade of the 6 colorful UI cards
4. Scene 4 — The Payoff — 5s — Footer text fade-in

## Audio
- Audio role: sparse professional accents
- Audio arc: Confident opening, playful/satisfying clicks for the middle, soft fade out.
- Music: upbeat-but-restrained lofi or chill electronic
- Music treatment: fade in over 1s, duck volume under the UI clicks, fade out at end.
- Music cue guidance: Detect at composition via `analyze_music_cues.py` / hyperframes beats. Use 1 strong cue for Scene 3 card cascade.
- Audio-reactive treatment: Subtle glow on the course badge matching the RMS energy of the beat.
- Audio-coupled moments:
  - Scene 3 — card sequence aligned to beat hits
- SFX selection guidance: Professional card flips, clean soft clicks, smooth whooshes for the text entry.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not `none`, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run `hyperframes render` when done.
