"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function CTA() {
  return (
    <section id="enroll" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          {...fadeUp}
          className="relative bg-card border border-border rounded-xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(var(--accent) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <p className="font-mono text-xs tracking-widest text-muted mb-6">
              [ START TODAY ]
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              The face never lies about feeling.
              <br />
              Learn to read it.
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-4">
              Join 12,400+ professionals who&apos;ve trained their ability to
              read facial expressions with evidence-based, FACS-aligned
              methodology.
            </p>
            <p className="text-sm text-muted/60 max-w-md mx-auto mb-10">
              Start with Foundations for $99 and upgrade anytime. Every tier
              includes a 30-day money-back guarantee — no questions asked.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-accent text-white px-10 py-4 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-sm shadow-accent/20"
              >
                View Courses &amp; Pricing
              </motion.a>
              <motion.a
                href="mailto:team@emotionlens.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center border border-border px-10 py-4 rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-all"
              >
                Contact for Teams
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-[10px] text-muted/60 font-mono">
              <span>30-day money-back guarantee</span>
              <span className="hidden sm:inline">·</span>
              <span>One-time payment</span>
              <span className="hidden sm:inline">·</span>
              <span>No subscriptions</span>
              <span className="hidden sm:inline">·</span>
              <span>Instant access</span>
            </div>

            {/* Social proof micro-stats */}
            <motion.div
              {...fadeUp}
              className="mt-8 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { value: "12,400+", label: "Professionals trained" },
                { value: "89%", label: "Avg post-training accuracy" },
                { value: "4.8/5", label: "Satisfaction rating" },
                { value: "94%", label: "Recommend rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-lg font-semibold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
