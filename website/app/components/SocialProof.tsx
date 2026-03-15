"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "After completing the Professional tier, I noticed a measurable difference in my therapy sessions. I catch suppressed emotions I used to miss entirely — especially contempt and masked sadness.",
    name: "Dr. Sarah Chen",
    role: "Clinical Psychologist, Stanford Medical",
    metric: "Recognition accuracy: 47% → 82%",
  },
  {
    quote:
      "The FACS training changed how I approach negotiations. Understanding Action Units gives you a systematic framework — it's not intuition anymore, it's observation skill.",
    name: "Marcus Rivera",
    role: "Senior Negotiator, Federal Mediation Service",
    metric: "6 years of practice",
  },
  {
    quote:
      "What sets EmotionLens apart is the honesty about what the science does and doesn't support. Other programs promise lie detection. This one teaches you to actually read faces — which is more useful.",
    name: "Dr. Aisha Patel",
    role: "Behavioral Scientist, Deloitte",
    metric: "Trained 200+ team members",
  },
  {
    quote:
      "The speed training exercises are addictive. Going from 500ms to recognizing expressions at 100ms exposure was a breakthrough moment. You start seeing things in real conversations.",
    name: "James Okoro",
    role: "Interviewer, UK Border Force",
    metric: "Recognition accuracy: 51% → 79%",
  },
  {
    quote:
      "I've tried Ekman's METT and two other platforms. EmotionLens has the best curriculum structure by far — the progression from theory to timed exercises to real-world application actually makes sense.",
    name: "Dr. Lisa Tran",
    role: "Forensic Psychologist",
    metric: "Expert Mastery graduate",
  },
  {
    quote:
      "As a hiring manager, I used to rely on gut feeling. Now I have a framework for what I'm actually observing. It's not about catching lies — it's about understanding emotional responses.",
    name: "Rachel Goldstein",
    role: "VP of Talent, Series C Startup",
    metric: "500+ interviews conducted",
  },
];

const stats = [
  { value: "12,400+", label: "Professionals trained" },
  { value: "89%", label: "Average post-training accuracy" },
  { value: "4.8/5", label: "Course satisfaction rating" },
  { value: "94%", label: "Would recommend to colleagues" },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ RESULTS ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            What practitioners are saying.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            Professionals across disciplines — from clinical psychology to
            federal negotiation — train with EmotionLens to sharpen the skill
            that matters most: understanding people.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border border-border rounded-lg p-6 bg-card"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-2xl font-semibold text-accent">
                {stat.value}
              </p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 flex flex-col"
            >
              <p className="text-sm leading-relaxed text-muted flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
                <p className="text-xs text-accent font-mono mt-1">
                  {t.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-14 text-xs text-muted font-mono"
        >
          <span className="border border-border px-4 py-2 rounded-full">
            Evidence-Based Methodology
          </span>
          <span className="border border-border px-4 py-2 rounded-full">
            FACS-Aligned Curriculum
          </span>
          <span className="border border-border px-4 py-2 rounded-full">
            Peer-Reviewed Research
          </span>
          <span className="border border-border px-4 py-2 rounded-full">
            30-Day Money-Back Guarantee
          </span>
        </motion.div>
      </div>
    </section>
  );
}
