"use client";

import { motion } from "framer-motion";
import { heroFace } from "../lib/ascii";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-widest text-muted mb-6">
              [ BEHAVIORAL INTELLIGENCE ]
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              Decode what
              <br />
              people{" "}
              <span className="text-accent italic">really</span> feel.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              Evidence-based training in micro-expression recognition and the
              Facial Action Coding System. Built on 50 years of research.
              Designed for professionals who read people for a living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-3.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Courses
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center border border-border px-8 py-3.5 rounded-md text-sm font-medium hover:bg-card transition-colors"
              >
                Explore the Science
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-xs text-muted font-mono">
              <span>12,400+ trained</span>
              <span className="w-px h-3 bg-border" />
              <span>89% avg accuracy</span>
              <span className="w-px h-3 bg-border" />
              <span>FACS-based</span>
            </div>
          </motion.div>

          {/* Right: ASCII Face */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <pre className="ascii-art-lg text-accent select-none">
                {heroFace}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
