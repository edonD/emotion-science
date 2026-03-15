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

const signalData = [
  { label: "Expression", value: "Genuine Happiness" },
  { label: "Action Units", value: "AU6 + AU12" },
  { label: "Muscle", value: "Zygomaticus Major" },
  { label: "Duration", value: "420ms (macro)" },
  { label: "Confidence", value: "94.2%" },
];

const typingLines = [
  "$ emotionlens analyze --input face.capture",
  "",
  "  Scanning facial geometry...",
  "  Detecting action units...",
  "  Cross-referencing FACS database...",
  "",
  "  SIGNAL DETECTED",
];

export default function Hero() {
  const [currentEmotion, setCurrentEmotion] = useState(0);
  const [terminalLine, setTerminalLine] = useState(0);
  const [showSignal, setShowSignal] = useState(false);

  // Cycle through emotions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmotion((prev) => (prev + 1) % emotions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (terminalLine < typingLines.length) {
      const timeout = setTimeout(
        () => setTerminalLine((prev) => prev + 1),
        terminalLine === 0 ? 800 : 400
      );
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setShowSignal(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [terminalLine]);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32 w-full relative">
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
              [ BEHAVIORAL INTELLIGENCE PLATFORM ]
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
              Evidence-based training in micro-expression recognition and the
              Facial Action Coding System. Built on 50 years of peer-reviewed
              research. Designed for professionals who read people for a living.
            </p>
            <p className="text-sm text-muted/70 leading-relaxed mb-8 max-w-lg">
              Master the same techniques used by FBI behavioral analysts, clinical
              psychologists, and negotiation specialists — systematized through
              FACS, the gold standard in facial measurement.
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
                FACS-based
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
                "Used by Federal Agencies",
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
            <div className="bg-card border border-border rounded-lg px-4 py-3 inline-flex items-center gap-3">
              <FaceDiagram
                emotion={emotions[currentEmotion]}
                size={60}
                showLabels={false}
                showMuscles={false}
                animated={false}
              />
              <div>
                <p className="font-mono text-[10px] text-muted">DETECTING</p>
                <p className="font-mono text-xs text-accent">
                  {emotions[currentEmotion].charAt(0).toUpperCase() +
                    emotions[currentEmotion].slice(1)}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive SVG Face + Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            {/* SVG Face with emotion cycling */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-muted tracking-wider">
                  FACS ANALYSIS
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-600">
                    LIVE
                  </span>
                </span>
              </div>

              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentEmotion}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaceDiagram
                      emotion={emotions[currentEmotion]}
                      size={220}
                      showLabels={true}
                      showMuscles={true}
                      animated={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Emotion label */}
              <div className="text-center mt-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentEmotion}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="font-mono text-xs text-accent"
                  >
                    {emotions[currentEmotion].charAt(0).toUpperCase() +
                      emotions[currentEmotion].slice(1)}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Emotion dots */}
              <div className="flex justify-center gap-1.5 mt-3">
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

            {/* Terminal readout */}
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="font-mono text-[9px] text-[#666] ml-2">
                  emotionlens v2.4
                </span>
              </div>
              <div className="font-mono text-[11px] leading-relaxed">
                {typingLines.slice(0, terminalLine).map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.includes("SIGNAL")
                        ? "text-emerald-400 font-semibold"
                        : line.startsWith("$")
                          ? "text-green-400"
                          : "text-[#888]"
                    }
                  >
                    {line || "\u00A0"}
                  </div>
                ))}
                {/* Blinking cursor */}
                {!showSignal && (
                  <span className="inline-block w-2 h-3 bg-green-400 animate-pulse" />
                )}
              </div>

              {/* Signal data */}
              <AnimatePresence>
                {showSignal && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 pt-2 border-t border-[#333]"
                  >
                    {signalData.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex justify-between font-mono text-[10px] py-0.5"
                      >
                        <span className="text-[#666]">{item.label}:</span>
                        <span className="text-green-400">{item.value}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
