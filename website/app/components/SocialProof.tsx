"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

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

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useAnimatedCounter(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-2xl font-semibold text-accent">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
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

        {/* Animated stats bar */}
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border border-border rounded-lg p-6 bg-card"
        >
          <AnimatedStat value={12400} suffix="+" label="Professionals trained" />
          <AnimatedStat value={89} suffix="%" label="Average post-training accuracy" />
          <AnimatedStat value={48} suffix="/5" label="Course satisfaction rating" />
          <AnimatedStat value={94} suffix="%" label="Would recommend to colleagues" />
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...staggerChild(i)}
              className="group bg-card border border-border rounded-lg p-6 flex flex-col hover:border-accent/30 hover:shadow-md transition-all"
            >
              {/* Quote marks */}
              <span className="text-accent/20 text-3xl font-serif leading-none mb-2">
                &ldquo;
              </span>
              <p className="text-sm leading-relaxed text-muted flex-1 mb-4 group-hover:text-foreground/80 transition-colors">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
                <p className="text-xs text-accent font-mono mt-1">{t.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp}
          className="flex flex-wrap justify-center gap-4 mt-14"
        >
          {[
            "Evidence-Based Methodology",
            "FACS-Aligned Curriculum",
            "Peer-Reviewed Research",
            "30-Day Money-Back Guarantee",
          ].map((badge) => (
            <span
              key={badge}
              className="text-xs text-muted font-mono border border-border px-4 py-2 rounded-full hover:border-accent/30 hover:text-accent transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
