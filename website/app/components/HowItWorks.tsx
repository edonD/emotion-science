"use client";

import { motion } from "framer-motion";
import { statsAscii } from "../lib/ascii";

const steps = [
  {
    number: "01",
    title: "Learn the Science",
    description:
      "Understand the evolutionary origins of facial expressions, the seven universal emotions, and why micro-expressions are involuntary. Build a foundation in the Facial Action Coding System.",
  },
  {
    number: "02",
    title: "Train Your Eye",
    description:
      "Practice recognizing each emotion through photo and video exercises. Start at 500ms exposure and work down to 100ms. Track your accuracy as it improves across sessions.",
  },
  {
    number: "03",
    title: "Apply in Context",
    description:
      "Move from isolated expressions to real-world scenarios. Learn to read emotions during negotiations, interviews, therapy sessions, and everyday conversations.",
  },
  {
    number: "04",
    title: "Master the System",
    description:
      "Advance to full FACS coding — all 44 Action Units, intensity levels, and combination analysis. Build behavioral baselines and track emotional patterns over time.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ HOW IT WORKS ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            From novice to expert, systematically.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            Our training follows a proven progression: learn the theory, train
            the skill, apply in context, then master the system. Each stage
            builds measurably on the last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <span className="font-mono text-2xl font-semibold text-accent/40 shrink-0 w-10">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ASCII Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <pre className="ascii-art text-accent select-none overflow-x-auto">
              {statsAscii}
            </pre>
            <p className="text-xs text-muted mt-4 font-mono">
              Improvement data based on published training studies (Hurley et
              al., 2014; Matsumoto &amp; Hwang, 2011)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
