"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FACSInteractiveFace } from "./FaceDiagram";
import { fadeUp, staggerChild } from "../lib/animations";

const actionUnits = [
  {
    au: "AU1",
    name: "Inner Brow Raise",
    muscle: "Frontalis, pars medialis",
    emotions: ["Fear", "Sadness", "Surprise"],
    description:
      "Raises the inner portion of the eyebrows, creating horizontal wrinkles on the medial forehead. Key differentiator between fear and surprise.",
  },
  {
    au: "AU2",
    name: "Outer Brow Raise",
    muscle: "Frontalis, pars lateralis",
    emotions: ["Surprise"],
    description:
      "Raises the outer portion of the eyebrows. Combined with AU1, produces the full brow raise seen in surprise.",
  },
  {
    au: "AU4",
    name: "Brow Lowerer",
    muscle: "Corrugator supercilii, Depressor supercilii",
    emotions: ["Anger", "Sadness", "Fear"],
    description:
      "Pulls brows down and together, creating vertical furrows between them. The primary anger signal in the upper face.",
  },
  {
    au: "AU5",
    name: "Upper Lid Raise",
    muscle: "Levator palpebrae superioris",
    emotions: ["Fear", "Surprise", "Anger"],
    description:
      "Raises the upper eyelid, exposing more of the white sclera above the iris. Creates the wide-eyed appearance in fear and surprise.",
  },
  {
    au: "AU6",
    name: "Cheek Raise",
    muscle: "Orbicularis oculi, pars orbitalis",
    emotions: ["Happiness"],
    description:
      "Raises the cheeks, creating crow's-feet wrinkles at the eye corners. The Duchenne marker — distinguishes genuine from social smiles.",
  },
  {
    au: "AU7",
    name: "Lid Tightener",
    muscle: "Orbicularis oculi, pars palpebralis",
    emotions: ["Anger"],
    description:
      "Tightens and narrows the eyelid aperture. Often co-occurs with AU4 in anger and with AU6 in intense happiness.",
  },
  {
    au: "AU9",
    name: "Nose Wrinkle",
    muscle: "Levator labii superioris alaeque nasi",
    emotions: ["Disgust"],
    description:
      "Wrinkles the skin on the nose, pulling the upper lip upward. The signature disgust signal — activates the longest-named muscle in the body.",
  },
  {
    au: "AU10",
    name: "Upper Lip Raise",
    muscle: "Levator labii superioris",
    emotions: ["Disgust"],
    description:
      "Raises the upper lip, deepening the nasolabial furrow. Distinct from AU9 — raises lip without nose wrinkle.",
  },
  {
    au: "AU12",
    name: "Lip Corner Pull",
    muscle: "Zygomaticus major",
    emotions: ["Happiness", "Contempt"],
    description:
      "Pulls the corners of the lips up and back. The primary smile muscle. When unilateral, signals contempt.",
  },
  {
    au: "AU15",
    name: "Lip Corner Depress",
    muscle: "Depressor anguli oris",
    emotions: ["Sadness"],
    description:
      "Pulls the corners of the lips downward. The sadness mouth — often subtle and hard to detect without training.",
  },
  {
    au: "AU17",
    name: "Chin Raise",
    muscle: "Mentalis",
    emotions: ["Disgust", "Sadness"],
    description:
      "Pushes the chin boss and lower lip upward, creating dimpling on the chin. Signals doubt, displeasure, or suppressed sadness.",
  },
  {
    au: "AU20",
    name: "Lip Stretch",
    muscle: "Risorius, Platysma",
    emotions: ["Fear"],
    description:
      "Stretches the lips horizontally, thinning them. The fear mouth — often combined with AU25/AU26 for the open fear expression.",
  },
  {
    au: "AU23",
    name: "Lip Tighten",
    muscle: "Orbicularis oris",
    emotions: ["Anger"],
    description:
      "Tightens the red margin of the lips, making them appear narrower and more tense. Controlled anger signal.",
  },
  {
    au: "AU24",
    name: "Lip Press",
    muscle: "Orbicularis oris",
    emotions: ["Anger"],
    description:
      "Presses lips together firmly, flattening them. Stronger than AU23 — indicates more intense anger or determination.",
  },
  {
    au: "AU26",
    name: "Jaw Drop",
    muscle: "Masseter, Internal pterygoid, Digastric",
    emotions: ["Surprise", "Fear"],
    description:
      "Opens the mouth by lowering the mandible. The surprise jaw drop is relaxed, while the fear jaw drop has stretched lip corners (AU20).",
  },
];

const intensityLevels = [
  { code: "A", name: "Trace", description: "Barely visible movement" },
  { code: "B", name: "Slight", description: "Small but noticeable" },
  { code: "C", name: "Marked", description: "Clearly visible" },
  { code: "D", name: "Severe", description: "Strong, pronounced" },
  { code: "E", name: "Maximum", description: "Extreme, full activation" },
];

export default function FACSSection() {
  const [selectedAU, setSelectedAU] = useState<string | null>(null);

  const selected = actionUnits.find((au) => au.au === selectedAU);

  return (
    <section id="facs" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div {...fadeUp}>
          <p className="font-mono text-xs tracking-widest text-muted mb-4">
            [ THE FACS SYSTEM ]
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            The language of the face, decoded.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-4">
            The Facial Action Coding System breaks every possible facial
            movement into discrete, measurable Action Units. Each AU maps to a
            specific muscle or muscle group — making emotion reading systematic,
            not intuitive.
          </p>
          <p className="text-sm text-muted/70 max-w-2xl mb-16">
            Developed by Paul Ekman and Wallace Friesen in 1978, FACS is the
            gold standard for facial measurement in psychology, animation (Pixar
            uses it), AI training, and clinical assessment. Our training teaches
            you to code faces the same way researchers do.
          </p>
        </motion.div>

        {/* Interactive Face + AU detail side by side */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Interactive SVG face */}
          <motion.div
            {...fadeUp}
            className="bg-card border border-border rounded-lg p-8"
          >
            <p className="font-mono text-[10px] text-muted tracking-wider mb-4">
              FACIAL MUSCLE REGIONS — HOVER TO EXPLORE
            </p>
            <FACSInteractiveFace size={340} className="mx-auto" />
          </motion.div>

          {/* Intensity levels + Selected AU detail */}
          <div className="space-y-6">
            <motion.div
              {...fadeUp}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-semibold text-sm mb-4">
                FACS Intensity Coding (A–E)
              </h3>
              <p className="text-xs text-muted mb-4">
                Every Action Unit is scored on a 5-point intensity scale:
              </p>
              <div className="space-y-2">
                {intensityLevels.map((level, i) => (
                  <div key={level.code} className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-accent w-5">
                      {level.code}
                    </span>
                    <div className="flex-1">
                      <div
                        className="h-1.5 rounded-full bg-accent/20 overflow-hidden"
                      >
                        <motion.div
                          className="h-full bg-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(i + 1) * 20}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-muted w-24">
                      {level.name}
                    </span>
                    <span className="text-[10px] text-muted/60 hidden sm:block w-36">
                      {level.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Selected AU detail */}
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.au}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-accent/5 border border-accent/20 rounded-lg p-6"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-semibold text-sm">
                      <span className="text-accent font-mono mr-2">
                        {selected.au}
                      </span>
                      {selected.name}
                    </h3>
                    <button
                      onClick={() => setSelectedAU(null)}
                      className="text-xs text-muted hover:text-foreground"
                    >
                      Close
                    </button>
                  </div>
                  <p className="text-xs text-muted mb-3 font-mono">
                    {selected.muscle}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {selected.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.emotions.map((emotion) => (
                      <span
                        key={emotion}
                        className="text-[10px] font-mono bg-accent/10 text-accent px-2 py-0.5 rounded-full"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card border border-dashed border-border rounded-lg p-6 text-center"
                >
                  <p className="text-sm text-muted">
                    Select an Action Unit below to see details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* AU Table */}
        <motion.div {...fadeUp}>
          <h3 className="font-semibold text-lg mb-6">
            Key Action Units You&apos;ll Master
          </h3>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[60px_1fr_1fr_120px] text-xs font-mono bg-card border-b border-border">
              <div className="px-4 py-3 font-semibold text-muted">AU</div>
              <div className="px-4 py-3 font-semibold text-muted">Action</div>
              <div className="px-4 py-3 font-semibold text-muted hidden sm:block">
                Muscle
              </div>
              <div className="px-4 py-3 font-semibold text-muted hidden md:block">
                Emotions
              </div>
            </div>
            {actionUnits.map((au, i) => (
              <motion.div
                key={au.au}
                {...staggerChild(i)}
                onClick={() =>
                  setSelectedAU(selectedAU === au.au ? null : au.au)
                }
                className={`grid grid-cols-[60px_1fr_1fr_120px] text-sm cursor-pointer transition-colors ${
                  i < actionUnits.length - 1 ? "border-b border-border" : ""
                } ${
                  selectedAU === au.au
                    ? "bg-accent-light/50"
                    : "hover:bg-accent-light/30"
                }`}
              >
                <div className="px-4 py-2.5 font-mono text-accent font-medium text-xs">
                  {au.au}
                </div>
                <div className="px-4 py-2.5 text-sm">{au.name}</div>
                <div className="px-4 py-2.5 text-xs text-muted hidden sm:block">
                  {au.muscle}
                </div>
                <div className="px-4 py-2.5 text-[10px] text-muted font-mono hidden md:flex flex-wrap gap-1">
                  {au.emotions.slice(0, 2).map((e) => (
                    <span key={e} className="bg-border/50 px-1.5 rounded">
                      {e}
                    </span>
                  ))}
                  {au.emotions.length > 2 && (
                    <span className="text-muted/50">
                      +{au.emotions.length - 2}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4 font-mono">
            Full system includes 44+ AUs with intensity coding (A–E) and
            laterality modifiers. Click any row for detail. Complete training
            available in Expert Mastery tier.
          </p>
        </motion.div>

        {/* FACS stats */}
        <motion.div
          {...fadeUp}
          className="mt-12 grid sm:grid-cols-4 gap-6 border-t border-border pt-12"
        >
          {[
            { value: "44+", label: "Action Units catalogued" },
            { value: "5", label: "Intensity levels (A–E)" },
            {
              value: "10,000+",
              label: "Possible AU combinations",
            },
            { value: "1978", label: "System first published" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-2xl font-semibold text-accent">
                {stat.value}
              </p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
