"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

const applications = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 22 Q13 18, 16 18 Q19 18, 22 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Law Enforcement",
    description:
      "Interrogation analysis, threat assessment, and hostage negotiation. Read emotional shifts in real time to calibrate response tactics.",
    stat: "Used by 12+ federal agencies",
    useCase:
      "FBI Behavioral Analysis Unit uses FACS-based facial coding as part of their interview assessment protocols.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 6 L16 26 M6 16 L26 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12 Q12 8, 16 12 Q20 16, 24 12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    title: "Therapy & Counseling",
    description:
      "Detect suppressed emotions, track patient progress across sessions, and recognize what clients can't or won't articulate.",
    stat: "3,200+ clinicians trained",
    useCase:
      "Therapists using micro-expression awareness report 34% improvement in identifying suppressed emotional states during sessions.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M6 22 L12 10 L18 18 L24 8 L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 26 L28 26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    title: "Sales & Negotiation",
    description:
      "Read buying signals, detect hesitation, and adapt your approach in real time. Understand objections before they're spoken.",
    stat: "23% higher close rates",
    useCase:
      "Sales teams trained in expression reading report measurably higher close rates and improved client relationship scores.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22 Q12 18, 16 22 Q20 26, 24 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Human Resources",
    description:
      "Interview assessment, team dynamics, conflict resolution. Identify disengagement and frustration before they escalate.",
    stat: "Fortune 500 teams trained",
    useCase:
      "HR professionals report 41% improvement in identifying candidate discomfort and deception cues during structured interviews.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 12 L26 12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M10 18 L14 18 M18 18 L22 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 22 L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Healthcare",
    description:
      "Patient communication, pain detection, end-of-life care. Read emotions in pre-verbal children and non-communicative patients.",
    stat: "Critical for pediatric care",
    useCase:
      "FACS-based pain coding (CPPS) is used in neonatal ICUs to assess pain in infants who cannot self-report.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 6 L28 14 L28 26 L4 26 L4 14 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="12" y="18" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Leadership",
    description:
      "Emotional awareness for executives and managers. Build trust, detect team sentiment, and lead with genuine emotional intelligence.",
    stat: "Executive coaching staple",
    useCase:
      "Leaders trained in facial expression reading score 28% higher on 360-degree emotional intelligence assessments.",
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
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform origin-left">
                {app.icon}
              </div>
              <h3 className="font-semibold mb-2">{app.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {app.description}
              </p>
              <p className="text-[10px] font-mono text-accent mb-2">
                {app.stat}
              </p>
              <p className="text-xs text-muted/60 leading-relaxed">
                {app.useCase}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <p className="text-sm text-muted">
            Training teams of 5 or more?{" "}
            <a
              href="mailto:team@emotionlens.com"
              className="text-accent hover:underline"
            >
              Contact us for volume pricing
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
