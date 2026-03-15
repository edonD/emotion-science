"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Science", href: "#science" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Courses", href: "#courses" },
    { label: "FACS", href: "#facs" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-wider font-semibold hover:text-accent transition-colors"
        >
          EMOTIONLENS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200" />
            </a>
          ))}
          <a
            href="#courses"
            className="text-sm bg-accent text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-px bg-foreground transition-transform ${
                mobileOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-foreground py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#courses"
                onClick={() => setMobileOpen(false)}
                className="text-sm bg-accent text-white px-5 py-2 rounded-md text-center mt-2"
              >
                Start Learning
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
