// Shared animation variants for consistent, fast-triggering animations
// Uses large positive viewport margins so elements animate in well BEFORE
// they're centered in view — prevents "blank page" appearance on fast scroll

export const fadeUp = {
  initial: { opacity: 0, y: 12 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "200px 0px" as const },
  transition: { duration: 0.4 },
};

export const fadeIn = {
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true, margin: "200px 0px" as const },
  transition: { duration: 0.4 },
};

export const staggerChild = (i: number) => ({
  initial: { opacity: 0, y: 10 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "200px 0px" as const },
  transition: { duration: 0.3, delay: i * 0.04 },
});
