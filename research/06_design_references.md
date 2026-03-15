# Design References

## Greptile.com — Primary Reference

### Layout
- Centered, bordered container system (max-width ~1500px)
- Single-column vertical flow with horizontal dividers
- Consistent left-right borders creating framed aesthetic
- Modular card-based architecture

### Typography
- Inter (primary sans-serif)
- Geist Mono (monospace accents)
- TASA Orbiter (display typeface)
- Large hero titles contrast sharply with smaller body text
- Section badges in caps with brackets: `[SECTION NAME]`

### Color
- Light/dark theme system (we will use LIGHT ONLY)
- Primary text: high contrast
- Secondary text: reduced emphasis
- Tertiary text: subtle
- Border colors for structure
- Understated palette prioritizing legibility

### Spacing
- Extensive whitespace dominates
- Multiple horizontal rules between sections
- Responsive padding: px-6 → sm:px-8 → md:px-12 → lg:px-16
- Layout breathes — never compressed

### Key Patterns to Adopt
- `[SECTION NAME]` bracket labels
- Horizontal dividers between major sections
- Feature cards with color-coded subtle themes
- 3-column testimonial grids
- FAQ sections with clean accordions
- Organized footer link columns
- Primary CTAs consistent throughout
- Arrow icons for external links

### Animations
- Lottie animations for feature demos (we'll use CSS/Framer Motion instead)
- No heavy CSS animations
- Purposeful motion in specific contexts only
- Subtle SVG icon interactions

## ASCII Art Integration Ideas

### Resources
- ASCII Art Archive (asciiart.eu) — 11,000+ artworks
- ASCIIFlow — infinite diagrams, export as text
- One Page Love — curated ASCII website examples
- Patorjk.com — text-to-ASCII art generator

### Our ASCII Approach
1. **Facial expression diagrams** — simplified face representations for each emotion
2. **Action Unit annotations** — labeled muscle group diagrams
3. **Data visualizations** — bar charts, accuracy stats in ASCII
4. **Terminal-style UI** — console/code-block aesthetic for course previews
5. **Section dividers** — tasteful ASCII art separators
6. **Decorative elements** — subtle, not overwhelming

### Design Principles
- ASCII should feel INTENTIONAL, not gimmicky
- Monospace font required for ASCII to render properly
- Use ASCII to reinforce the scientific/technical brand identity
- Keep proportions tight — ASCII art breaks easily on different screen sizes
- Test ASCII rendering on mobile (may need simplified versions)

## Our Design Direction
- **Theme**: Light only — warm off-white (#fafaf8), deep charcoal text (#1a1a1a)
- **Accent**: Sophisticated teal (#0d9488 or similar)
- **Fonts**: Inter/system sans-serif for body, JetBrains Mono/Geist Mono for code/ASCII
- **Layout**: Greptile-inspired framed container, generous whitespace
- **Cards**: Functional, not decorative — content-first
- **CTAs**: Bold, clear, consistent placement
- **Animations**: Framer Motion — scroll-triggered, subtle, purposeful
