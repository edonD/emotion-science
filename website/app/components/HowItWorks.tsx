"use client";

import { motion } from "framer-motion";
import { statsAscii } from "../lib/ascii";
import { fadeUp, staggerChild } from "../lib/animations";

const steps = [
  {
    number: "01",
    title: "Learn the Science",
    description:
      "Understand the evolutionary origins of facial expressions, the seven universal emotions, and why micro-expressions are involuntary. Build a foundation in the Facial Action Coding System.",
    detail:
      "Modules cover Darwin's original observations, Ekman & Friesen's cross-cultural studies, and modern neuroscience findings on amygdala-driven facial responses.",
    duration: "2–3 hours",
  },
  {
    number: "02",
    title: "Train Your Eye",
    description:
      "Practice recognizing each emotion through photo and video exercises. Start at 500ms exposure and work down to 100ms. Track your accuracy as it improves across sessions.",
    detail:
      "Our adaptive algorithm adjusts difficulty based on your performance. Most students see measurable improvement within the first 90 minutes of practice.",
    duration: "4–8 hours",
  },
  {
    number: "03",
    title: "Apply in Context",
    description:
      "Move from isolated expressions to real-world scenarios. Learn to read emotions during negotiations, interviews, therapy sessions, and everyday conversations.",
    detail:
      "Case studies drawn from law enforcement interviews, clinical sessions, and business negotiations — all annotated with FACS codes.",
    duration: "6–12 hours",
  },
  {
    number: "04",
    title: "Master the System",
    description:
      "Advance to full FACS coding — all 44 Action Units, intensity levels, and combination analysis. Build behavioral baselines and track emotional patterns over time.",
    detail:
      "Preparation for FACS certification. Includes coding practice on standardized datasets and inter-rater reliability training.",
    duration: "20–40 hours",
  },
];

const accuracyData = [
  { label: "Untrained", value: 47, color: "bg-muted/30" },
  { label: "Foundations", value: 62, color: "bg-accent/40" },
  { label: "Professional", value: 78, color: "bg-accent/60" },
  { label: "Expert", value: 89, color: "bg-accent" },
];

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
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                {...staggerChild(i)}
                className="group flex gap-5 p-4 -mx-4 rounded-lg hover:bg-card transition-colors"
              >
                <span className="font-mono text-2xl font-semibold text-accent/40 shrink-0 w-10 group-hover:text-accent transition-colors">
                  {step.number}
                </span>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <span className="text-[10px] font-mono text-muted">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-muted/60 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats & Visualization */}
          <div className="space-y-6">
            {/* Animated accuracy bars */}
            <motion.div
              {...fadeUp}
              className="bg-card border border-border rounded-lg p-6"
            >
              <p className="font-mono text-[10px] text-muted tracking-wider mb-4">
                RECOGNITION ACCURACY AFTER TRAINING
              </p>
              <div className="space-y-4">
                {accuracyData.map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted">{item.label}</span>
                      <span className="font-mono text-accent font-medium">
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-border overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.15,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted mt-4 font-mono">
                Based on published training studies (Hurley et al., 2014;
                Matsumoto &amp; Hwang, 2011)
              </p>
            </motion.div>

            {/* ASCII stats (kept for tech aesthetic) */}
            <motion.div
              {...fadeUp}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <pre className="font-mono text-xs text-green-400/80 select-none overflow-x-auto leading-relaxed">
                {statsAscii}
              </pre>
            </motion.div>

            {/* Key metric callout */}
            <motion.div
              {...fadeUp}
              className="bg-accent/5 border border-accent/20 rounded-lg p-5 text-center"
            >
              <p className="font-mono text-3xl font-semibold text-accent mb-1">
                +42%
              </p>
              <p className="text-sm text-muted">
                Average accuracy improvement from untrained baseline to Expert
                Mastery completion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
