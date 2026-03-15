// ASCII Art Library for EmotionLens

export const emotionFaces: Record<string, string> = {
  happiness: `
    .-"""-.
   /        \\
  |  O    O  |
  |    __    |
  |   '  '   |
   \\  \\__/  /
    '-.  .-'
       ""`,
  sadness: `
    .-"""-.
   /        \\
  |  .    .  |
  |    __    |
  |   /  \\   |
   \\  '--'  /
    '-.  .-'
       ""`,
  anger: `
    .-"""-.
   /        \\
  | \\>  </  |
  |    __    |
  |  [====]  |
   \\  ----  /
    '-.  .-'
       ""`,
  fear: `
    .-"""-.
   /        \\
  |  O    O  |
  |    ()    |
  |   .--.   |
   \\  |  |  /
    '-.  .-'
       ""`,
  surprise: `
    .-"""-.
   /        \\
  |  O    O  |
  |    ..    |
  |   (  )   |
   \\   ()   /
    '-.  .-'
       ""`,
  disgust: `
    .-"""-.
   /        \\
  |  o    o  |
  |   ~\\/~   |
  |   /--\\   |
   \\  ----  /
    '-.  .-'
       ""`,
  contempt: `
    .-"""-.
   /        \\
  |  -    o  |
  |    __    |
  |   ---/   |
   \\  ----  /
    '-.  .-'
       ""`,
};

export const heroFace = `
             ┌─────────────────────────────┐
             │          ╱╲    ╱╲           │
             │         ╱  ╲  ╱  ╲          │
             │        ╱ AU1 ╲╱ AU2╲         │
             │       ╱  ╱╲   ╱╲  ╲        │
             │                             │
             │     ┌─────┐   ┌─────┐       │
             │     │ ██  │   │  ██ │ AU5   │
             │     │ ██  │   │  ██ │       │
             │     └─────┘   └─────┘       │
             │        AU6 ═══════ AU6      │
             │                             │
             │            ╭──╮             │
             │            │  │  AU9        │
             │            ╰──╯             │
             │                             │
             │       ╰────────────╯        │
             │        AU12 + AU6           │
             │      Duchenne Smile         │
             │                             │
             └─────────────────────────────┘
      ┌───────────────────────────────────────┐
      │  SIGNAL DETECTED                      │
      │  ─────────────────────────────────    │
      │  Expression:  Genuine Happiness       │
      │  Action Units: AU6 + AU12             │
      │  Muscle:      Zygomaticus Major       │
      │  Duration:    420ms (macro)           │
      │  Confidence:  94.2%                   │
      └───────────────────────────────────────┘`;

export const facsAsciiDiagram = `
  ┌──────── FACS: FACIAL ACTION CODING SYSTEM ─────────┐
  │                                                      │
  │     AU1+AU2         AU4           AU1+AU4            │
  │    ╭───╮╭───╮    ╭─────╮      ╭──╮  ╭──╮            │
  │    │ / ││ \\ │    │ \\_/ │      │/ │  │ \\│            │
  │    Brow Raise    Brow Lower   Inner Brow             │
  │                                                      │
  │     AU6+AU12         AU9            AU15             │
  │    ╭───────╮     ╭───────╮     ╭───────╮            │
  │    │ ^   ^ │     │  o o  │     │  -  -  │            │
  │    │ \\___/ │     │ ~\\/~  │     │  \\__/  │            │
  │    Happiness      Disgust       Sadness              │
  │                                                      │
  │  44 Action Units  ·  5 Intensity Levels  ·  7 Emotions│
  └──────────────────────────────────────────────────────┘`;

export const terminalPreview = `
  ┌─ emotionlens v2.4 ──────────────────────────────────┐
  │                                                      │
  │  $ emotionlens --module foundations                   │
  │                                                      │
  │  ▸ Module 1: The Science of Emotion                  │
  │    ├── 1.1 Evolutionary Origins                      │
  │    ├── 1.2 Cross-Cultural Research                   │
  │    ├── 1.3 The 7 Universal Emotions                  │
  │    └── 1.4 Micro-Expressions: Duration & Detection   │
  │                                                      │
  │  ▸ Module 2: Recognition Training                    │
  │    ├── 2.1 Happiness & Genuine Smiles                │
  │    ├── 2.2 Sadness & Suppressed Grief                │
  │    ├── 2.3 Anger & Controlled Aggression             │
  │    ├── 2.4 Fear & Anxiety Indicators                 │
  │    ├── 2.5 Surprise vs. Fear Distinction             │
  │    ├── 2.6 Disgust & Contempt Signals                │
  │    └── 2.7 Timed Recognition Exercises               │
  │                                                      │
  │  Progress: ██████████░░░░░░░░░░ 48%                  │
  │  Accuracy: 73% → Target: 85%                         │
  │                                                      │
  └──────────────────────────────────────────────────────┘`;

export const statsAscii = `
  Recognition Accuracy After Training
  ─────────────────────────────────────
  Untrained     ▓▓▓▓▓▓▓▓░░░░░░░░░░ 47%
  Foundations   ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 62%
  Professional  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 78%
  Expert        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 89%
  ─────────────────────────────────────
  Based on peer-reviewed training studies`;

export const sectionLabel = (text: string) => `[ ${text.toUpperCase()} ]`;
