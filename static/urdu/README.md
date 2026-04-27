# Urdu Script Quest

A Duolingo-style mini web app to learn the Urdu script while building reading fluency.

## What it does

- Introduces Urdu characters lesson by lesson
- Shows each new character with sound and example word
- Uses multiple-choice drills and mixed review from previous lessons
- Adds hearts (lives) inside sessions for game-like challenge
- Tracks daily XP goal (60 XP) and learning streak
- Includes a targeted review mode that prioritizes weak characters
- Unlocks lessons progressively (70% required)
- Saves your progress, XP, streak, and per-character stats in `localStorage`

## Run locally

Because this is a static app, you can open `index.html` directly in a browser.

For a local dev server (recommended), run:

```bash
cd /Users/mdeshmukh/projects/urdu
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Curriculum

The course includes 17 lessons covering core Urdu letters, including aspirated marker (`ھ`), hamza (`ء`), and final ye (`ے`).

By the final lessons, drills combine older and newer characters to improve real reading speed and recognition.
