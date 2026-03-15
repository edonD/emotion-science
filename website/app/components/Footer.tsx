"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm font-semibold tracking-wider mb-4">
              EMOTIONLENS
            </p>
            <p className="text-xs text-muted leading-relaxed mb-4">
              Evidence-based emotion recognition training. Built on FACS
              research, designed for professionals who read people for a living.
            </p>
            <div className="flex gap-3">
              {["Peer-Reviewed", "FACS-Based"].map((badge) => (
                <span
                  key={badge}
                  className="text-[9px] font-mono text-muted/50 border border-border/50 px-2 py-0.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Training */}
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold tracking-wider mb-4 text-muted uppercase">
              Training
            </p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href="#courses"
                  className="hover:text-foreground transition-colors flex items-center gap-2"
                >
                  Foundations
                  <span className="text-[10px] font-mono text-accent">$99</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-foreground transition-colors flex items-center gap-2"
                >
                  Professional
                  <span className="text-[10px] font-mono text-accent">$249</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-foreground transition-colors flex items-center gap-2"
                >
                  Expert Mastery
                  <span className="text-[10px] font-mono text-accent">$449</span>
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="hover:text-foreground transition-colors"
                >
                  Curriculum Overview
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Learn */}
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold tracking-wider mb-4 text-muted uppercase">
              Learn
            </p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href="#science"
                  className="hover:text-foreground transition-colors"
                >
                  The 7 Universal Emotions
                </a>
              </li>
              <li>
                <a
                  href="#facs"
                  className="hover:text-foreground transition-colors"
                >
                  FACS System &amp; Action Units
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-foreground transition-colors"
                >
                  How Training Works
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="hover:text-foreground transition-colors"
                >
                  Professional Applications
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold tracking-wider mb-4 text-muted uppercase">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href="mailto:team@emotionlens.com"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:team@emotionlens.com"
                  className="hover:text-foreground transition-colors"
                >
                  Team Licensing
                </a>
              </li>
              <li>
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 EmotionLens. All rights reserved.
          </p>
          <div className="text-xs text-muted font-mono flex items-center gap-3">
            <span>Research-backed</span>
            <span className="w-1 h-1 rounded-full bg-accent/30" />
            <span>FACS-aligned</span>
            <span className="w-1 h-1 rounded-full bg-accent/30" />
            <span>Evidence-based</span>
          </div>
        </div>

        {/* Research citations */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[10px] text-muted/50 leading-relaxed">
            Research citations: Ekman, P. &amp; Friesen, W.V. (1971). Constants
            across cultures in the face and emotion. <em>Journal of Personality
            and Social Psychology.</em> · Matsumoto, D. &amp; Hwang, H.S. (2011).
            Evidence for training the ability to read microexpressions of
            emotion. <em>Motivation and Emotion.</em> · Hurley, C.M. et al. (2014).
            Background factors predicting accuracy and improvement in micro
            expression recognition. <em>Motivation and Emotion.</em> · Ekman, P.,
            Friesen, W.V. &amp; Hager, J.C. (2002). <em>Facial Action Coding System</em>
            (2nd ed.).
          </p>
        </div>
      </div>
    </footer>
  );
}
