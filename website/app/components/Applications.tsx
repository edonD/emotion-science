"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

const applications = [
  {
    icon: `┌───┐
│ § │
└───┘`,
    title: "Law Enforcement",
    description:
      "Interrogation analysis, threat assessment, and hostage negotiation. Read emotional shifts in real time to calibrate response tactics.",
  },
  {
    icon: `┌───┐
│ ♥ │
└───┘`,
    title: "Therapy & Counseling",
    description:
      "Detect suppressed emotions, track patient progress across sessions, and recognize what clients can't or won't articulate.",
  },
  {
    icon: `┌───┐
│ $ │
└───┘`,
    title: "Sales & Negotiation",
    description:
      "Read buying signals, detect hesitation, and adapt your approach in real time. Understand objections before they're spoken.",
  },
  {
    icon: `┌───┐
│ ⚙ │
└───┘`,
    title: "Human Resources",
    description:
      "Interview assessment, team dynamics, conflict resolution. Identify disengagement and frustration before they escalate.",
  },
  {
    icon: `┌───┐
│ + │
└───┘`,
    title: "Healthcare",
    description:
      "Patient communication, pain detection, end-of-life care. Read emotions in pre-verbal children and non-communicative patients.",
  },
  {
    icon: `┌───┐
│ ◈ │
└───┘`,
    title: "Leadership",
    description:
      "Emotional awareness for executives and managers. Build trust, detect team sentiment, and lead with genuine emotional intelligence.",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ APPLICATIONS ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Who uses emotion recognition.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            From interrogation rooms to boardrooms. Professionals across
            disciplines use systematic emotion reading to make better decisions
            when the stakes are high.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              {...staggerChild(i)}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
            >
              <pre className="ascii-art text-accent mb-4 select-none">
                {app.icon}
              </pre>
              <h3 className="font-semibold mb-2">{app.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {app.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
