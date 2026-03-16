"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerChild } from "../lib/animations";

const emotions = [
  {
    name: "Happiness",
    key: "happiness",
    description:
      "Duchenne smile — AU6 + AU12. Cheek raise with lip corner pull. The only smile that reaches the eyes. The orbicularis oculi contracts involuntarily, creating crow's-feet wrinkles that are nearly impossible to fake.",
    actionUnits: "AU6 + AU12",
    muscle: "Zygomaticus major + Orbicularis oculi",
    duration: "500ms – 4s",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    accentColor: "#059669",
  },
  {
    name: "Sadness",
    key: "sadness",
    description:
      "Inner brow raise, drooped lids, lip corner depression. Often the hardest emotion to fake convincingly — the frontalis pars medialis is difficult to activate voluntarily. Look for the oblique eyebrow shape.",
    actionUnits: "AU1 + AU4 + AU15",
    muscle: "Frontalis (inner) + Depressor anguli oris",
    duration: "500ms – 4s",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    accentColor: "#2563eb",
  },
  {
    name: "Anger",
    key: "anger",
    description:
      "Brows lowered and drawn together, upper lids raised, lips tightened or pressed. The corrugator supercilii creates vertical furrows between the brows — the most reliable anger signal.",
    actionUnits: "AU4 + AU5 + AU23 + AU24",
    muscle: "Corrugator supercilii + Orbicularis oris",
    duration: "200ms – 2s",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    accentColor: "#dc2626",
  },
  {
    name: "Fear",
    key: "fear",
    description:
      "Brows raised and pulled together, eyes widened with visible sclera, mouth open. Often confused with surprise — the key difference is the brow shape: fear pulls brows together while surprise raises them evenly.",
    actionUnits: "AU1 + AU2 + AU4 + AU5 + AU20",
    muscle: "Frontalis + Levator palpebrae + Risorius",
    duration: "100ms – 1s",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    accentColor: "#9333ea",
  },
  {
    name: "Surprise",
    key: "surprise",
    description:
      "Full brow raise, wide eyes, jaw drop. The shortest-duration universal emotion — often transitions to another within 1 second. If 'surprise' persists longer, it's likely performed, not felt.",
    actionUnits: "AU1 + AU2 + AU5 + AU26",
    muscle: "Frontalis (full) + Masseter (relaxed)",
    duration: "40ms – 500ms",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    accentColor: "#d97706",
  },
  {
    name: "Disgust",
    key: "disgust",
    description:
      "Nose wrinkle, upper lip raise, narrowed eyes. Activates the levator labii superioris alaeque nasi — the longest-named muscle in the body. Originally evolved to protect airways from toxic substances.",
    actionUnits: "AU9 + AU10 + AU17",
    muscle: "Lev. labii sup. alaeque nasi + Mentalis",
    duration: "300ms – 2s",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    accentColor: "#ea580c",
  },
  {
    name: "Contempt",
    key: "contempt",
    description:
      "The only asymmetric universal expression — unilateral lip corner raise. A one-sided smirk signaling moral superiority or disdain. Research by Gottman shows it's the single strongest predictor of relationship failure.",
    actionUnits: "AU12R + AU14R",
    muscle: "Zygomaticus major (unilateral)",
    duration: "200ms – 2s",
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    accentColor: "#475569",
  },
];

export default function Science() {
  const [activeEmotion, setActiveEmotion] = useState<string | null>(null);

  return (
    <section id="science" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ THE SCIENCE ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Seven emotions. Universal across cultures.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Paul Ekman&apos;s cross-cultural research — replicated from Tokyo to
            Papua New Guinea — identified seven facial expressions recognized by
            every human society. Micro-expressions of these emotions last just
            40–67 milliseconds and cannot be voluntarily suppressed.
          </p>
          <p className="text-sm text-muted max-w-2xl mb-16">
            Each expression maps to specific muscle activations codified in the
            Facial Action Coding System (FACS). Click any emotion below to see the
            diagnostic Action Units and involved musculature.
          </p>
        </motion.div>

        {/* Emotion grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {emotions.map((emotion, i) => (
            <motion.div
              key={emotion.name}
              {...staggerChild(i)}
              onClick={() =>
                setActiveEmotion(
                  activeEmotion === emotion.key ? null : emotion.key
                )
              }
              className={`relative bg-card border rounded-lg p-5 cursor-pointer transition-all duration-200 hover:shadow-md group ${
                activeEmotion === emotion.key
                  ? `${emotion.borderColor} shadow-md`
                  : "border-border hover:border-accent/30"
              }`}
            >
              {/* Face image */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent/20 transition-all">
                  <Image
                    src={`/faces/${emotion.key}.png`}
                    alt={`${emotion.name} expression`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className={`font-semibold text-sm mb-1 ${emotion.color}`}>
                {emotion.name}
              </h3>
              <p className="text-[11px] text-muted font-mono mb-2">
                {emotion.actionUnits}
              </p>

              {/* Expandable detail */}
              <AnimatePresence>
                {activeEmotion === emotion.key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-3 pt-3 border-t ${emotion.borderColor}`}>
                      <p className="text-xs text-muted leading-relaxed mb-3">
                        {emotion.description}
                      </p>
                      <div className="space-y-1">
                        <p className="text-[10px] font-mono text-muted">
                          <span className="opacity-50">Muscle:</span>{" "}
                          {emotion.muscle}
                        </p>
                        <p className="text-[10px] font-mono text-muted">
                          <span className="opacity-50">Duration:</span>{" "}
                          {emotion.duration}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Click hint */}
              <p className="text-[9px] text-muted/50 font-mono mt-2 group-hover:text-muted/80 transition-colors">
                {activeEmotion === emotion.key ? "Click to collapse" : "Click for detail"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key stats */}
        <motion.div
          {...fadeUp}
          className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-border pt-16"
        >
          <div>
            <p className="font-mono text-3xl font-semibold text-accent mb-2">
              40ms
            </p>
            <p className="text-sm text-muted">
              Minimum duration of a micro-expression — faster than a blink, yet
              detectable with training
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-accent mb-2">
              44
            </p>
            <p className="text-sm text-muted">
              Action Units in the FACS system, mapping every possible facial
              movement to specific muscle contractions
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-accent mb-2">
              50+
            </p>
            <p className="text-sm text-muted">
              Years of peer-reviewed research behind emotion recognition science,
              replicated across 30+ countries
            </p>
          </div>
        </motion.div>

        {/* Research note */}
        <motion.div {...fadeUp} className="mt-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-mono text-xs text-accent mb-2">[ RESEARCH NOTE ]</p>
            <p className="text-sm text-muted leading-relaxed">
              The universality of these expressions was first demonstrated by Ekman
              &amp; Friesen (1971) and has since been replicated in over 30 countries
              including isolated populations with no media exposure. While cultural
              <em> display rules</em> govern when and how emotions are expressed
              socially, the underlying muscle patterns are biologically determined
              and cross-culturally consistent. Recent neuroimaging studies confirm
              that micro-expressions activate distinct amygdala response patterns
              even when subjects report no conscious awareness of the stimulus.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
