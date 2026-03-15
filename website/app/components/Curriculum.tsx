"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

const tiers = [
  {
    name: "Foundations",
    hours: "8–12 hours",
    color: "text-emerald-600",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    modules: [
      {
        title: "The Science of Emotion",
        lessons: [
          "Evolutionary Origins — why emotions exist",
          "Cross-Cultural Evidence — Ekman's field research",
          "The 7 Universal Emotions — deep dive",
          "Micro-Expressions: Duration & Detection",
        ],
      },
      {
        title: "Recognition Training",
        lessons: [
          "Happiness & Genuine Smiles (Duchenne markers)",
          "Sadness & Suppressed Grief",
          "Anger & Controlled Aggression",
          "Fear & Anxiety Indicators",
          "Surprise vs. Fear Distinction",
          "Disgust & Contempt Signals",
          "Timed Recognition Drills (500ms → 250ms)",
        ],
      },
      {
        title: "Emotional Intelligence Basics",
        lessons: [
          "Self-Awareness Framework",
          "Empathy in Practice — reading others",
          "Reading Emotional Context in conversations",
        ],
      },
    ],
  },
  {
    name: "Professional",
    hours: "25–35 hours",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent-light",
    modules: [
      {
        title: "FACS Essentials",
        lessons: [
          "Action Unit Anatomy — muscle by muscle",
          "Upper Face AUs (1–7) — brows, lids, forehead",
          "Lower Face AUs (9–28) — nose, lips, jaw",
          "Combination Coding — reading AU clusters",
        ],
      },
      {
        title: "Advanced Detection",
        lessons: [
          "Subtle Expressions — low-intensity signals",
          "Partial & Masked Emotions — what leaks through",
          "Speed Training (500ms → 100ms exposure)",
          "Multi-Channel Integration — face + voice + body",
        ],
      },
      {
        title: "Professional Application",
        lessons: [
          "Negotiation Scenarios — reading the table",
          "Interview Analysis — structured assessment",
          "Therapeutic Observation — clinical practice",
          "Team Dynamics Reading — group emotional states",
        ],
      },
    ],
  },
  {
    name: "Expert Mastery",
    hours: "60–80 hours",
    color: "text-purple-600",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
    modules: [
      {
        title: "Complete FACS Certification Prep",
        lessons: [
          "All 44+ Action Units — comprehensive coding",
          "Intensity Coding (A–E) — quantifying expression",
          "Laterality & Modifiers — left/right differences",
          "Complex Combinations — real-world coding",
        ],
      },
      {
        title: "Behavioral Analysis",
        lessons: [
          "Emotional Profiling — individual patterns",
          "Baseline Development — reading deviations",
          "Pattern Recognition — temporal dynamics",
          "Cultural Considerations — display rules",
        ],
      },
      {
        title: "The Research Frontier",
        lessons: [
          "AI vs. Human Recognition — current accuracy",
          "Current Papers & Findings — 2024–2025 research",
          "Limitations & Ethics — responsible practice",
          "Future Directions — where the field is going",
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [activeTier, setActiveTier] = useState<number>(1);

  return (
    <section id="curriculum" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ CURRICULUM ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            What you&apos;ll learn, module by module.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            Every module is structured around a specific skill. Theory, then
            practice, then application. No filler — every minute is designed to
            build measurable capability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Learning path visualization */}
          <motion.div
            {...fadeUp}
            className="bg-card border border-border rounded-xl p-8 order-2 lg:order-1"
          >
            <p className="font-mono text-[10px] text-muted tracking-wider mb-6">
              YOUR LEARNING PATH
            </p>

            {/* Progress visualization */}
            <div className="space-y-6">
              {tiers.map((tier, i) => (
                <button
                  key={tier.name}
                  onClick={() => setActiveTier(i)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    activeTier === i
                      ? `${tier.bgColor} ${tier.borderColor} shadow-sm`
                      : "border-border hover:border-accent/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold text-sm ${activeTier === i ? tier.color : ""}`}>
                      {tier.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted">
                      {tier.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          activeTier === i ? "bg-accent" : "bg-muted/30"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(i + 1) * 33}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-muted">
                      {tier.modules.reduce((sum, m) => sum + m.lessons.length, 0)} lessons
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Key metrics */}
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-mono text-lg font-semibold text-accent">93–127</p>
                <p className="text-[10px] text-muted">Total hours</p>
              </div>
              <div>
                <p className="font-mono text-lg font-semibold text-accent">30+</p>
                <p className="text-[10px] text-muted">Modules</p>
              </div>
              <div>
                <p className="font-mono text-lg font-semibold text-accent">100+</p>
                <p className="text-[10px] text-muted">Lessons</p>
              </div>
            </div>
          </motion.div>

          {/* Module breakdown */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Tier tabs */}
            <div className="flex gap-2 mb-4">
              {tiers.map((tier, i) => (
                <button
                  key={tier.name}
                  onClick={() => setActiveTier(i)}
                  className={`text-xs font-mono px-4 py-2 rounded-md transition-all ${
                    activeTier === i
                      ? `${tier.bgColor} ${tier.color} border ${tier.borderColor}`
                      : "text-muted border border-transparent hover:border-border"
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className={`font-semibold ${tiers[activeTier].color}`}>
                    {tiers[activeTier].name}
                  </h3>
                  <span className="text-xs text-muted font-mono">
                    {tiers[activeTier].hours}
                  </span>
                </div>
                <div className="space-y-3">
                  {tiers[activeTier].modules.map((mod, i) => (
                    <motion.details
                      key={mod.title}
                      {...staggerChild(i)}
                      className={`group border rounded-md ${tiers[activeTier].borderColor}`}
                      open={i === 0}
                    >
                      <summary className="px-4 py-3 text-sm cursor-pointer hover:bg-accent-light/30 transition-colors flex items-center justify-between">
                        <span className="font-medium">{mod.title}</span>
                        <span className="flex items-center gap-2">
                          <span className="text-[10px] text-muted font-mono">
                            {mod.lessons.length} lessons
                          </span>
                          <span className="text-muted text-xs font-mono group-open:rotate-90 transition-transform">
                            ▸
                          </span>
                        </span>
                      </summary>
                      <div className="px-4 pb-3">
                        <ul className="space-y-1.5">
                          {mod.lessons.map((lesson) => (
                            <li
                              key={lesson}
                              className="text-xs text-muted flex items-center gap-2 py-0.5"
                            >
                              <span className={`${tiers[activeTier].color} opacity-50`}>
                                ├──
                              </span>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.details>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
