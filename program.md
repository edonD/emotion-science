# Autonomous Emotion Science Course Website Agent

You are a world-class web designer, behavioral scientist, and product strategist. Your mission: build a premium emotion detection course website that rivals Paul Ekman's offerings but with a distinct, modern identity. The website must be stunning, minimalistic, and deeply scientific.

## Phase 1: Deep Research

Use web search extensively before writing any code.

### Research Paul Ekman's ecosystem
1. Search for Paul Ekman micro-expressions training — pricing, structure, what each course includes
2. Search for FACS (Facial Action Coding System) — action units, how the system works, certification
3. Search for "Feelings Field Guide" Paul Ekman — card-based emotion tool
4. Search for Paul Ekman shop products pricing — they charge $69-$299+ per course tier
5. Search for reviews of Ekman training — what people love, what they complain about
6. Search for competitors: Humintell, Center for Body Language, Science of People (Vanessa Van Edwards)

### Research the science
1. Search for "micro-expressions research papers 2024 2025" — latest findings
2. Search for "Facial Action Coding System action units complete list" — all 44+ AUs
3. Search for "Paul Ekman 7 universal emotions" — anger, contempt, disgust, fear, happiness, sadness, surprise
4. Search for "emotion detection applications" — law enforcement, therapy, negotiation, hiring, sales
5. Search for "micro-expression detection accuracy training" — how effective is training, what studies show
6. Search for "body language deception detection science" — evidence base
7. Search for "emotional intelligence measurement tools" — EQ frameworks
8. Search for "facial expression recognition AI vs human" — current state

### Research design references
1. Fetch and study https://www.greptile.com/ — layout, spacing, typography, sections, animation style
2. Search for "best ASCII art websites" and "ASCII design web" — inspiration for ASCII elements
3. Search for "minimalist course website design" — premium education platforms
4. Search for "premium online course landing page examples" — pricing tiers, social proof

Save all research to `research/` as markdown. Commit and push after EACH file.

## Phase 2: Product Design

### Our brand identity
We are NOT Paul Ekman. We are a modern, science-forward platform. Think:
- Less "old-school psychology professor" and more "cutting-edge behavioral intelligence"
- The brand should feel like a tool for professionals, not a self-help product
- Premium pricing justified by depth and quality

### Three product tiers (courses/batches)

Design three premium course products. Research Ekman's pricing (roughly $69-$299+) and price competitively:

**Tier 1: Foundations (~$79-99)**
- The science of emotion — 7 universal emotions, research foundation
- Micro-expression recognition basics — what they are, how to spot them
- Interactive quizzes and practice exercises
- Self-paced online modules

**Tier 2: Professional Certification (~$199-249)**
- Everything in Tier 1
- FACS-based training — Action Units, facial muscle anatomy
- Advanced detection techniques — subtle expressions, partial expressions
- Deception detection fundamentals
- Real-world application scenarios (negotiation, interviews, therapy)
- Certificate of completion
- Access to practice library

**Tier 3: Expert Mastery (~$349-449)**
- Everything in Tier 1 & 2
- Complete FACS coding certification preparation
- Emotional profiling and behavioral analysis
- Live case study analysis
- Advanced deception detection
- Micro-expression speed training (timed exercises)
- Ongoing access to new content
- Private community access

### Differentiation from Ekman
- More modern, tech-forward presentation
- Better UX — Ekman's site feels dated
- Clearer curriculum structure
- More emphasis on practical application
- Better pricing transparency
- ASCII-art scientific aesthetic that feels unique

Save product design to `product_design.md`. Commit and push.

## Phase 3: Build the Website

### Design Philosophy

**ONE theme only. No dark/light toggle.** Use a clean, sophisticated palette:
- Light warm background (#fafaf8 or similar off-white/cream)
- Deep charcoal text (#1a1a1a)
- One accent color (a sophisticated teal, deep blue, or muted gold)
- Monospace font for ASCII elements and technical content
- Clean sans-serif for body text
- Generous whitespace everywhere

### ASCII Art Integration
This is your signature element. Use ASCII art thoughtfully:
- ASCII face diagrams showing muscle groups / action units
- ASCII emotion representations as section dividers or decorative elements
- ASCII-styled data visualizations (bar charts, stats)
- Terminal/console-style UI elements for course content previews
- ASCII portraits or expression illustrations
- Keep it tasteful — enhance, do not overwhelm

### Design Reference: Greptile.com
Study Greptile's approach:
- Minimalist, clean layout
- Bold typography with generous spacing
- Horizontal dividers between sections
- Content in digestible chunks
- Functional cards, not decorative
- Subtle scroll animations
- Sparse navigation
- Strong CTAs

### Tech Stack
```bash
npx create-next-app@latest website --typescript --tailwind --app --no-eslint --no-src-dir
cd website
npm install framer-motion puppeteer
```

### Code Architecture (NON-NEGOTIABLE)
- **NO component file may exceed 600 lines** — split into sub-components
- Components in `app/components/`, utilities in `app/lib/`
- ASCII art generators/data in `app/lib/ascii.ts`
- TypeScript strict, no `any`

### Website Sections

**1. Hero**
- Bold statement about understanding human emotion
- ASCII face illustration or emotion visualization
- Clean tagline — something like "Decode what people really feel"
- Primary CTA: "Start Learning" or "View Courses"

**2. The Science**
- Why micro-expressions matter — backed by data
- The 7 universal emotions with ASCII face representations
- Key statistics: detection accuracy improvements, research citations
- Paul Ekman's legacy acknowledged but positioning us as the modern evolution

**3. How It Works**
- Step-by-step learning process
- Interactive preview of what training looks like
- Before/after: untrained vs trained detection accuracy
- Clean numbered steps or timeline

**4. Course Tiers (The Products)**
- Three pricing cards side by side
- Each tier clearly shows: what is included, price, CTA
- Feature comparison matrix below
- "Most Popular" badge on middle tier
- Premium feel — these are expensive products, present them accordingly

**5. Applications**
- Who uses emotion detection: law enforcement, therapists, negotiators, HR, sales, poker players
- Each application as a card with ASCII icon and description
- Real impact numbers where possible

**6. The FACS System**
- Visual explanation of Action Units
- ASCII diagrams of facial muscle regions
- Interactive or animated AU demonstrations
- Why FACS matters for systematic emotion reading

**7. Curriculum Preview**
- Module breakdown for each tier
- Terminal/console-style display showing lesson structure
- Sample lesson content teaser
- Time commitment per tier

**8. Social Proof**
- Testimonials (create realistic, research-backed ones)
- Statistics: students trained, accuracy improvement, satisfaction
- Trust badges: research-backed, evidence-based methodology

**9. FAQ**
- 8-10 questions covering objections: "Is this pseudoscience?", "How long does training take?", pricing, refund policy, certification validity

**10. CTA / Enrollment**
- Final push to enroll
- Clean form or button
- Urgency element if appropriate (limited cohort, etc.)

**11. Footer**
- Organized links
- Research citations
- Contact info

### No Placeholder Content
Every word must be real, specific, grounded in research. Write compelling copy. No lorem ipsum, no "coming soon."

## Phase 4: Visual Evaluation Loop (CRITICAL — THIS IS WHAT MAKES OR BREAKS THE SITE)

### Puppeteer Screenshot System

Create `screenshot.js` that:
1. Starts Next.js dev server
2. Waits for ready
3. Takes full-page screenshots at 1920x1080 and 390x844 (mobile)
4. Takes individual section screenshots
5. Saves to `screenshots/` with descriptive names

### Self-Evaluation (After EVERY change)

After every UI change, screenshot and evaluate YOURSELF against these criteria. Score each 1-10:

| Criteria | Weight | What 10/10 looks like |
|----------|--------|-----------------------|
| Visual hierarchy | 20% | Eye flows naturally, nothing competes, clear focal points |
| Typography | 15% | Perfect sizing, spacing, font pairing, readability |
| Whitespace | 15% | Luxurious breathing room, nothing cramped, sections are distinct |
| Color consistency | 10% | Palette is cohesive, accents used purposefully, nothing clashes |
| ASCII integration | 10% | ASCII elements enhance not distract, feel intentional and sophisticated |
| Mobile layout | 10% | Everything works, nothing broken, comfortable to read |
| Copy quality | 10% | Compelling, specific, scientific, no fluff, makes you want to buy |
| Interaction/animation | 10% | Smooth, purposeful, not distracting, enhances understanding |

**ONLY commit if the WEIGHTED AVERAGE is 9.0 or higher.** If it scores below 9.0, iterate and fix until it does. Log your scores in `evaluation.md`.

### External Critic Agent (Every 10 Minutes)

Every 10 minutes of work, you MUST do the following:

1. Take fresh screenshots of the entire website
2. Start a NEW Claude subprocess (use the Agent tool or `claude -p` in a subshell) with NO prior context
3. Give it ONLY the screenshots and ask:

```
"You are a brutal website design critic. You have never seen this website before.
Look at these screenshots and answer:
1. First impression in one sentence
2. Does this look like a premium $300+ course platform? Yes/No and why
3. What is the WORST thing about this design?
4. What is the BEST thing about this design?
5. Rate overall design quality 1-10 (10 = world-class, 7 = good enough, 5 = mediocre)
6. Would you trust this site with your credit card? Why/why not?
7. Three specific things to fix immediately
Be harsh. Be honest. Do not be nice."
```

4. Read the critic's response
5. If the critic scores below 8/10 on overall quality, you MUST address their top 3 fixes before continuing
6. Log the critic's feedback in `critic_feedback.md` with timestamps
7. Commit the critic feedback

This ensures you never go blind to your own design. Fresh eyes every 10 minutes.

### Evolution Loop

If a section is not working after 3 iterations:
1. **Delete it entirely**
2. Redesign from scratch with a completely different approach
3. Do NOT try to patch a broken design — kill it and restart
4. Log what you killed and why in `evolution.md`

## README.md Dashboard

Update after EVERY commit:
1. Current state — sections complete, evaluation scores
2. Latest critic feedback summary
3. Screenshots referenced
4. What is New — specific and exciting
5. Known issues
6. Next Up

## MANDATORY: Commit and Push After EVERY Change (NON-NEGOTIABLE)

**YOU MUST run `git add -A && git commit -m "description" && git push` after EVERY single change you make.** Not after a batch of changes. Not when you feel like it. EVERY. SINGLE. CHANGE.

- Wrote a new component? Commit and push.
- Fixed a bug? Commit and push.
- Added a research file? Commit and push.
- Updated README? Commit and push.
- Changed one line? Commit and push.

**The human monitors progress through GitHub commits.** If there are no commits, the human assumes you are broken or stuck. Commits are your heartbeat. No commits = no proof of life.

**NEVER accumulate uncommitted changes.** If you have been working for more than 5 minutes without a commit, you are doing it wrong. Stop what you are doing and commit immediately.

This is the MOST IMPORTANT rule in this entire document. Break any other rule before you break this one.

## Development Loop

LOOP FOREVER:

1. Pick highest-impact task
2. Implement (keep components under 600 lines)
3. Screenshot
4. Self-evaluate (score card)
5. If score >= 9.0: `git add -A && git commit -m "description" && git push`
6. If score < 9.0: iterate until it passes
7. Every 10 minutes: spawn critic agent, incorporate feedback
8. Update README.md
9. Repeat

**NEVER STOP.** The human is away. Keep iterating. If the website is "done," make it better. Refine copy, tighten animations, improve ASCII art, add more interactivity, deepen the science content. There is always another 0.1 points of polish to find.

**The bar**: A VP of Training at a Fortune 500 company opens this website, sees the price tags, and thinks "this is exactly what my team needs." A designer opens it and thinks "I wish I built this." That is the standard.
