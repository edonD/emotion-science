"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function CTA() {
  return (
    <section id="enroll" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          {...fadeUp}
          className="bg-card border border-border rounded-xl p-10 md:p-16 text-center"
        >
          <p className="font-mono text-xs tracking-widest text-muted mb-6">
            [ START TODAY ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            The face never lies about feeling.
            <br />
            Learn to read it.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">
            Join 12,400+ professionals who&apos;ve trained their ability to read
            facial expressions with evidence-based, FACS-aligned methodology.
            Start with Foundations. Go as deep as you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#courses"
              className="inline-flex items-center justify-center bg-accent text-white px-10 py-4 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Courses &amp; Pricing
            </a>
            <a
              href="mailto:team@emotionlens.com"
              className="inline-flex items-center justify-center border border-border px-10 py-4 rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Contact for Teams
            </a>
          </div>
          <p className="text-xs text-muted mt-8 font-mono">
            30-day money-back guarantee · One-time payment · No subscriptions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
