"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

const faqs = [
  {
    q: "Is micro-expression training pseudoscience?",
    a: "No — but some claims about it are. The existence of micro-expressions and the seven universal emotions is supported by decades of peer-reviewed research (Ekman & Friesen, 1971; Matsumoto & Hwang, 2011). Training demonstrably improves emotion recognition accuracy. What the science does NOT support is the idea that micro-expressions can reliably detect deception — we're transparent about that distinction.",
  },
  {
    q: "How is this different from Paul Ekman's training?",
    a: "We build on the same scientific foundation but differ in three key ways: (1) Modern, structured curriculum designed for professional application, not just academic understanding. (2) Transparent about what the science supports and what it doesn't. (3) Better UX, clearer progression, and one-time pricing instead of recurring subscriptions.",
  },
  {
    q: "How long does training take?",
    a: "Foundations: 8-12 hours. Professional: 25-35 hours. Expert Mastery: 60-80 hours. All tiers are completely self-paced — most professionals complete them over 4-8 weeks alongside their regular work. Recognition improvements are measurable after just the first few hours.",
  },
  {
    q: "Can I really learn to detect lies?",
    a: "Honestly? Probably not from facial expressions alone — and we won't pretend otherwise. Meta-analyses show human deception detection accuracy is about 54%, barely above chance. What you WILL learn is to accurately read emotional responses, which is far more useful. Understanding what someone feels — and when their expression contradicts their words — is a powerful professional skill.",
  },
  {
    q: "Is the certificate recognized professionally?",
    a: "Our certificate verifies completion of a structured training program in FACS-based emotion recognition. It is recognized by organizations that value evidence-based behavioral training. Note: this is not equivalent to full FACS certification (which requires separate standardized testing), though our Expert Mastery tier specifically prepares you for that certification process.",
  },
  {
    q: "What's your refund policy?",
    a: "30-day money-back guarantee, no questions asked. If the training isn't what you expected, email us and we'll refund your full purchase. We stand behind the quality of our curriculum.",
  },
  {
    q: "Do I need any prior knowledge?",
    a: "No. The Foundations tier starts from zero and builds systematically. If you have existing training (Ekman's tools, Humintell, or academic FACS coursework), you may want to start at the Professional tier — contact us and we'll recommend the right starting point.",
  },
  {
    q: "Can I train my team?",
    a: "Yes. We offer volume licensing for teams of 5 or more at a significant discount. Many organizations train their HR teams, sales teams, or entire leadership cohorts. Contact us at team@emotionlens.com for custom pricing and onboarding.",
  },
  {
    q: "How accurate will I become?",
    a: "Published research shows training typically improves recognition accuracy from ~47% (untrained baseline) to 62-78% depending on training intensity and duration. Our Expert Mastery graduates average 89% accuracy on standardized recognition tests. Individual results vary based on practice frequency.",
  },
  {
    q: "Is this applicable across cultures?",
    a: "The seven universal emotions have been validated across cultures from the US to Japan to Papua New Guinea. However, cultural display rules affect how people express and suppress emotions in social contexts. Our Professional and Expert tiers cover cultural considerations explicitly.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ FAQ ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Common questions.
          </h2>
          <p className="text-muted text-lg mb-12">
            Straight answers — including the ones other platforms avoid.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              {...staggerChild(i)}
              className="group border border-border rounded-lg"
            >
              <summary className="px-5 py-4 cursor-pointer text-sm font-medium hover:bg-accent-light/30 transition-colors flex items-center justify-between">
                <span>{faq.q}</span>
                <span className="text-muted ml-4 shrink-0 group-open:rotate-90 transition-transform font-mono">
                  ▸
                </span>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
