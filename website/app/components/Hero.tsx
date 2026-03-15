"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaceDiagram from "./FaceDiagram";

const emotions = [
  "happiness",
  "sadness",
  "anger",
  "fear",
  "surprise",
  "disgust",
  "contempt",
];

const emotionLabels: Record<string, string> = {
  happiness: "Genuine Happiness",
  sadness: "Sadness",
  anger: "Anger",
  fear: "Fear",
  surprise: "Surprise",
  disgust: "Disgust",
  contempt: "Contempt",
};

const emotionAUs: Record<string, string> = {
  happiness: "AU6 + AU12",
  sadness: "AU1 + AU4 + AU15",
  anger: "AU4 + AU5 + AU23",
  fear: "AU1 + AU2 + AU4 + AU5",
  surprise: "AU1 + AU2 + AU5 + AU26",
  disgust: "AU9 + AU10 + AU17",
  contempt: "AU12R + AU14R",
};

const emotionMuscles: Record<string, string> = {
  happiness: "Zygomaticus Major",
  sadness: "Frontalis (inner)",
  anger: "Corrugator Supercilii",
  fear: "Levator Palpebrae",
  surprise: "Frontalis (full)",
  disgust: "Lev. Labii Superioris",
  contempt: "Zygomaticus (unilateral)",
};

export default function Hero() {
  const [currentEmotion, setCurrentEmotion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmotion((prev) => (prev + 1) % emotions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const emotion = emotions[currentEmotion];

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-mono text-xs tracking-widest text-muted mb-6"
            >
              [ EVIDENCE-BASED TRAINING ]
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              Decode what
              <br />
              people{" "}
              <span className="text-accent italic relative">
                really
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>{" "}
              feel.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-4 max-w-lg">
              Professional training in micro-expression recognition and the
              Facial Action Coding System. Built on 50 years of peer-reviewed
              research. Designed for practitioners who read people for a living.
            </p>
            <p className="text-sm text-muted/70 leading-relaxed mb-8 max-w-lg">
              Used by clinical psychologists, federal negotiators, HR
              professionals, and law enforcement specialists. The same science
              behind FACS — the gold standard in facial measurement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-3.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-sm shadow-accent/20"
              >
                View Courses &amp; Pricing
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#science"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center border border-border px-8 py-3.5 rounded-md text-sm font-medium hover:bg-card hover:border-accent/30 transition-all"
              >
                Explore the Science
              </motion.a>
            </div>

            {/* Stats bar */}
            <div className="mt-12 flex items-center gap-8 text-xs text-muted font-mono">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                12,400+ trained
              </motion.span>
              <span className="w-px h-3 bg-border" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                89% avg accuracy
              </motion.span>
              <span className="w-px h-3 bg-border" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                FACS-certified
              </motion.span>
            </div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {[
                "Peer-Reviewed Research",
                "FACS-Aligned",
                "30-Day Guarantee",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-mono text-muted/60 border border-border/60 px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile: simplified face */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden flex justify-center -mt-4 mb-4"
          >
            <div className="bg-card border border-border rounded-lg px-5 py-4 inline-flex items-center gap-4">
              <FaceDiagram
                emotion={emotion}
                size={70}
                showLabels={false}
                showMuscles={false}
                animated={false}
              />
              <div>
                <p className="font-mono text-[9px] text-muted tracking-wider">
                  DETECTED
                </p>
                <p className="font-semibold text-sm">
                  {emotionLabels[emotion]}
                </p>
                <p className="font-mono text-[10px] text-accent">
                  {emotionAUs[emotion]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: FACS Analysis Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-muted tracking-wider">
                  FACS FACIAL ANALYSIS
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-600">
                    LIVE
                  </span>
                </span>
              </div>

              {/* SVG Face — large and prominent */}
              <div className="flex justify-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentEmotion}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaceDiagram
                      emotion={emotion}
                      size={260}
                      showLabels={true}
                      showMuscles={true}
                      animated={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Analysis readout — clean card style, not terminal */}
              <div className="border-t border-border pt-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentEmotion}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="font-semibold text-lg">
                        {emotionLabels[emotion]}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        94.2% confidence
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-[10px] text-muted font-mono mb-0.5">
                          Action Units
                        </p>
                        <p className="text-sm font-medium">
                          {emotionAUs[emotion]}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted font-mono mb-0.5">
                          Primary Muscle
                        </p>
                        <p className="text-sm font-medium">
                          {emotionMuscles[emotion]}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted font-mono mb-0.5">
                          Duration
                        </p>
                        <p className="text-sm font-medium">420ms</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Emotion dots */}
              <div className="flex justify-center gap-1.5 mt-5">
                {emotions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentEmotion(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentEmotion
                        ? "bg-accent w-4"
                        : "bg-border hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
