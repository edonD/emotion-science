"use client";

import { motion } from "framer-motion";

interface Tier {
  name: string;
  tagline: string;
  price: number;
  period: string;
  popular: boolean;
  features: string[];
  cta: string;
}

const tiers: Tier[] = [
  {
    name: "Foundations",
    tagline: "See what others miss.",
    price: 89,
    period: "12 months access",
    popular: false,
    features: [
      "7 universal emotions — deep dive into each",
      "Micro-expression recognition fundamentals",
      "Interactive quizzes after every module",
      "Progress tracking dashboard",
      "Emotional intelligence foundations",
      "8-12 hours, self-paced",
    ],
    cta: "Start Foundations",
  },
  {
    name: "Professional",
    tagline: "The complete system for reading people.",
    price: 229,
    period: "Lifetime access",
    popular: true,
    features: [
      "Everything in Foundations",
      "FACS essentials — Action Units & anatomy",
      "Advanced detection: subtle & partial expressions",
      "Professional scenarios: negotiation, therapy, HR",
      "500+ expression practice library",
      "Timed speed training (500ms → 100ms)",
      "Certificate of completion",
      "25-35 hours, self-paced",
    ],
    cta: "Go Professional",
  },
  {
    name: "Expert Mastery",
    tagline: "Master the science. Lead the field.",
    price: 399,
    period: "Lifetime access + updates",
    popular: false,
    features: [
      "Everything in Professional",
      "Complete FACS training — all 44+ Action Units",
      "Emotional profiling & behavioral baselines",
      "Case study analysis with real footage",
      "FACS certification preparation",
      "Private expert community",
      "1-on-1 expert feedback session",
      "Ongoing new content & research updates",
      "60-80 hours, self-paced",
    ],
    cta: "Master the System",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ COURSES ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Three tiers. One systematic path.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            Choose the depth that matches your goals. Every tier is built on
            peer-reviewed science and designed for measurable skill
            improvement — not entertainment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative bg-card border rounded-lg p-7 flex flex-col ${
                tier.popular
                  ? "border-accent shadow-lg shadow-accent/5"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-7 bg-accent text-white text-xs font-mono px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <p className="font-mono text-xs text-muted tracking-wider mb-2">
                {tier.tagline}
              </p>
              <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>

              <div className="flex items-baseline gap-1 mt-3 mb-1">
                <span className="text-4xl font-semibold">${tier.price}</span>
              </div>
              <p className="text-xs text-muted font-mono mb-6">
                {tier.period}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md text-sm font-medium transition-all ${
                  tier.popular
                    ? "bg-accent text-white hover:opacity-90"
                    : "border border-border hover:border-accent hover:text-accent"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison note */}
        <motion.p
          {...fadeUp}
          className="text-center text-xs text-muted mt-10 font-mono"
        >
          All prices in USD. One-time payment — no subscriptions, no hidden
          fees. 30-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}
