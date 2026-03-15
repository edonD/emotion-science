"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

interface Tier {
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  period: string;
  popular: boolean;
  features: string[];
  bonuses: string[];
  cta: string;
  hours: string;
  students: string;
  guarantee: string;
}

const tiers: Tier[] = [
  {
    name: "Foundations",
    tagline: "See what others miss.",
    price: 99,
    originalPrice: 149,
    period: "12 months access",
    popular: false,
    features: [
      "7 universal emotions — deep-dive into each with video examples",
      "Micro-expression recognition fundamentals",
      "Interactive quizzes after every module",
      "Progress tracking dashboard with accuracy metrics",
      "Emotional intelligence foundations",
      "Downloadable reference cards for each emotion",
    ],
    bonuses: [
      "Quick-reference FACS cheat sheet (PDF)",
      "30-day practice challenge emails",
    ],
    cta: "Start Foundations",
    hours: "8–12 hours",
    students: "6,200+",
    guarantee: "30-day money-back",
  },
  {
    name: "Professional",
    tagline: "The complete system for reading people.",
    price: 249,
    originalPrice: 399,
    period: "Lifetime access",
    popular: true,
    features: [
      "Everything in Foundations",
      "FACS essentials — all major Action Units with anatomy",
      "Advanced detection: subtle, partial & masked expressions",
      "Professional scenarios: negotiation, therapy, HR, law enforcement",
      "500+ expression practice library with timed drills",
      "Speed training progression (500ms → 100ms exposure)",
      "Certificate of completion",
      "Private Slack community access",
    ],
    bonuses: [
      "Behavioral baseline worksheet templates",
      "Real-world scenario case study library",
      "Monthly live Q&A sessions (12 months)",
    ],
    cta: "Go Professional",
    hours: "25–35 hours",
    students: "4,800+",
    guarantee: "30-day money-back",
  },
  {
    name: "Expert Mastery",
    tagline: "Master the science. Lead the field.",
    price: 449,
    originalPrice: 699,
    period: "Lifetime access + updates",
    popular: false,
    features: [
      "Everything in Professional",
      "Complete FACS training — all 44+ Action Units & intensity coding",
      "Emotional profiling & behavioral baseline development",
      "Case study analysis with annotated real footage",
      "FACS certification preparation (exam-ready)",
      "Private expert community & peer review",
      "1-on-1 expert feedback session (60 min)",
      "Priority access to new modules & research updates",
    ],
    bonuses: [
      "Complete FACS manual digital companion",
      "Behavioral analysis report templates",
      "Exclusive research digest (quarterly)",
      "Alumni network access",
    ],
    cta: "Master the System",
    hours: "60–80 hours",
    students: "1,400+",
    guarantee: "30-day money-back",
  },
];

const comparisonFeatures = [
  { name: "Universal emotions training", f: true, p: true, e: true },
  { name: "Interactive quizzes & drills", f: true, p: true, e: true },
  { name: "Progress tracking", f: true, p: true, e: true },
  { name: "FACS Action Unit training", f: false, p: true, e: true },
  { name: "Speed recognition training", f: false, p: true, e: true },
  { name: "Professional scenarios", f: false, p: true, e: true },
  { name: "Certificate of completion", f: false, p: true, e: true },
  { name: "Complete FACS (44+ AUs)", f: false, p: false, e: true },
  { name: "1-on-1 expert session", f: false, p: false, e: true },
  { name: "Certification prep", f: false, p: false, e: true },
  { name: "Lifetime content updates", f: false, p: false, e: true },
];

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
          <p className="text-muted text-lg max-w-2xl mb-4">
            Choose the depth that matches your goals. Every tier is built on
            peer-reviewed science and designed for measurable skill
            improvement — not entertainment.
          </p>
          <p className="text-sm text-muted/70 max-w-2xl mb-16">
            Compare to similar programs: Ekman Group METT/SETT ($69–$299),
            Humintell MiX ($49–$189). Our curriculum goes deeper, includes
            lifetime access, and comes with a 30-day guarantee.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              {...staggerChild(i)}
              className={`relative bg-card border rounded-xl overflow-hidden flex flex-col transition-shadow hover:shadow-lg ${
                tier.popular
                  ? "border-accent shadow-lg shadow-accent/8"
                  : "border-border hover:border-accent/20"
              }`}
            >
              {tier.popular && (
                <div className="bg-accent text-white text-xs font-mono text-center py-1.5 tracking-wider">
                  MOST POPULAR — BEST VALUE
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <p className="font-mono text-[10px] text-muted tracking-wider mb-2 uppercase">
                  {tier.tagline}
                </p>
                <h3 className="text-xl font-semibold mb-3">{tier.name}</h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-sm text-muted line-through mr-2">
                    ${tier.originalPrice}
                  </span>
                  <span className="text-4xl font-semibold">${tier.price}</span>
                </div>
                <p className="text-xs text-muted font-mono mb-2">
                  {tier.period}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-muted font-mono mb-6">
                  <span>{tier.hours} of content</span>
                  <span className="w-px h-3 bg-border" />
                  <span>{tier.students} enrolled</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span className="text-accent mt-0.5 shrink-0">
                        &#10003;
                      </span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bonuses */}
                <div className="mb-6 pt-4 border-t border-border">
                  <p className="text-[10px] font-mono text-accent tracking-wider mb-2">
                    BONUS INCLUDED
                  </p>
                  {tier.bonuses.map((bonus) => (
                    <p
                      key={bonus}
                      className="text-xs text-muted flex items-start gap-2 py-0.5"
                    >
                      <span className="text-accent/60 shrink-0">+</span>
                      {bonus}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-3.5 rounded-md text-sm font-medium transition-all ${
                    tier.popular
                      ? "bg-accent text-white hover:opacity-90 shadow-sm shadow-accent/20"
                      : "border border-border hover:border-accent hover:text-accent"
                  }`}
                >
                  {tier.cta}
                </motion.button>

                {/* Guarantee */}
                <p className="text-center text-[10px] text-muted mt-3 font-mono">
                  {tier.guarantee}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature comparison */}
        <motion.div {...fadeUp} className="mt-16">
          <h3 className="font-semibold text-lg mb-6 text-center">
            Feature Comparison
          </h3>
          <div className="border border-border rounded-lg overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_80px_80px_80px] text-xs font-mono bg-card border-b border-border">
              <div className="px-4 py-3 font-semibold text-muted">Feature</div>
              <div className="px-2 py-3 font-semibold text-muted text-center">
                Found.
              </div>
              <div className="px-2 py-3 font-semibold text-accent text-center">
                Prof.
              </div>
              <div className="px-2 py-3 font-semibold text-muted text-center">
                Expert
              </div>
            </div>
            {comparisonFeatures.map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-[1fr_80px_80px_80px] text-sm ${
                  i < comparisonFeatures.length - 1
                    ? "border-b border-border"
                    : ""
                } hover:bg-accent-light/30 transition-colors`}
              >
                <div className="px-4 py-2.5 text-sm text-muted">
                  {feature.name}
                </div>
                <div className="px-2 py-2.5 text-center text-sm">
                  {feature.f ? (
                    <span className="text-accent">&#10003;</span>
                  ) : (
                    <span className="text-muted/30">—</span>
                  )}
                </div>
                <div className="px-2 py-2.5 text-center text-sm">
                  {feature.p ? (
                    <span className="text-accent">&#10003;</span>
                  ) : (
                    <span className="text-muted/30">—</span>
                  )}
                </div>
                <div className="px-2 py-2.5 text-center text-sm">
                  {feature.e ? (
                    <span className="text-accent">&#10003;</span>
                  ) : (
                    <span className="text-muted/30">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom notes */}
        <motion.div {...fadeUp} className="mt-10 text-center space-y-2">
          <p className="text-xs text-muted font-mono">
            All prices in USD. One-time payment — no subscriptions, no hidden
            fees.
          </p>
          <p className="text-xs text-muted/60 font-mono">
            Volume licensing available for teams of 5+. Contact
            team@emotionlens.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
