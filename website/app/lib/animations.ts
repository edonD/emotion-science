// Shared animation variants for consistent, fast-triggering animations

export const fadeUp = {
  initial: { opacity: 0, y: 12 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.4 },
};

export const fadeIn = {
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.4 },
};

export const staggerChild = (i: number) => ({
  initial: { opacity: 0, y: 10 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-30px" as const },
  transition: { duration: 0.3, delay: i * 0.04 },
});
