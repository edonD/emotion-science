"use client";

import { motion } from "framer-motion";
import { terminalPreview } from "../lib/ascii";

const tiers = [
  {
    name: "Foundations",
    hours: "8-12 hours",
    modules: [
      {
        title: "The Science of Emotion",
        lessons: ["Evolutionary Origins", "Cross-Cultural Evidence", "The 7 Universal Emotions", "Micro-Expressions: Duration & Detection"],
      },
      {
        title: "Recognition Training",
        lessons: ["Happiness & Genuine Smiles", "Sadness & Suppressed Grief", "Anger & Controlled Aggression", "Fear & Anxiety Indicators", "Surprise vs. Fear", "Disgust & Contempt", "Timed Recognition Drills"],
      },
      {
        title: "Emotional Intelligence Basics",
        lessons: ["Self-Awareness Framework", "Empathy in Practice", "Reading Emotional Context"],
      },
    ],
  },
  {
    name: "Professional",
    hours: "25-35 hours",
    modules: [
      {
        title: "FACS Essentials",
        lessons: ["Action Unit Anatomy", "Upper Face AUs (1-7)", "Lower Face AUs (9-28)", "Combination Coding"],
      },
      {
        title: "Advanced Detection",
        lessons: ["Subtle Expressions", "Partial & Masked Emotions", "Speed Training (500ms → 100ms)", "Multi-Channel Integration"],
      },
      {
        title: "Professional Application",
        lessons: ["Negotiation Scenarios", "Interview Analysis", "Therapeutic Observation", "Team Dynamics Reading"],
      },
    ],
  },
  {
    name: "Expert Mastery",
    hours: "60-80 hours",
    modules: [
      {
        title: "Complete FACS Certification Prep",
        lessons: ["All 44+ Action Units", "Intensity Coding (A-E)", "Laterality & Modifiers", "Complex Combinations"],
      },
      {
        title: "Behavioral Analysis",
        lessons: ["Emotional Profiling", "Baseline Development", "Pattern Recognition", "Cultural Considerations"],
      },
      {
        title: "The Research Frontier",
        lessons: ["AI vs. Human Recognition", "Current Papers & Findings", "Limitations & Ethics", "Future Directions"],
      },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function Curriculum() {
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
            practice, then application. No filler — every minute is designed
            to build measurable capability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal preview */}
          <motion.div
            {...fadeUp}
            className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <pre className="font-mono text-xs text-green-400 select-none overflow-x-auto leading-relaxed">
              {terminalPreview}
            </pre>
          </motion.div>

          {/* Module breakdown */}
          <div className="space-y-8 order-1 lg:order-2">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-semibold">{tier.name}</h3>
                  <span className="text-xs text-muted font-mono">
                    {tier.hours}
                  </span>
                </div>
                <div className="space-y-2">
                  {tier.modules.map((mod) => (
                    <details
                      key={mod.title}
                      className="group border border-border rounded-md"
                    >
                      <summary className="px-4 py-3 text-sm cursor-pointer hover:bg-accent-light/30 transition-colors flex items-center justify-between">
                        <span>{mod.title}</span>
                        <span className="text-muted text-xs font-mono group-open:rotate-90 transition-transform">
                          ▸
                        </span>
                      </summary>
                      <div className="px-4 pb-3">
                        <ul className="space-y-1">
                          {mod.lessons.map((lesson) => (
                            <li
                              key={lesson}
                              className="text-xs text-muted flex items-center gap-2 py-0.5"
                            >
                              <span className="text-accent/50">├──</span>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
