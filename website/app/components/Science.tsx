"use client";

import { motion } from "framer-motion";
import { emotionFaces } from "../lib/ascii";

const emotions = [
  {
    name: "Happiness",
    description: "Duchenne smile — AU6 + AU12. Cheek raise with lip corner pull. The only smile that reaches the eyes.",
    color: "text-emerald-600",
  },
  {
    name: "Sadness",
    description: "Inner brow raise, drooped lids, lip corner depression. Often the hardest emotion to fake convincingly.",
    color: "text-blue-600",
  },
  {
    name: "Anger",
    description: "Brow lowered, lids tightened, lips pressed or open. The eyebrows and jaw carry most of the signal.",
    color: "text-red-600",
  },
  {
    name: "Fear",
    description: "Brows raised and pulled together, eyes widened, mouth open. Often confused with surprise — the brow shape differs.",
    color: "text-purple-600",
  },
  {
    name: "Surprise",
    description: "Full brow raise, wide eyes, jaw drop. The shortest-duration emotion — often transitions to another within 1 second.",
    color: "text-amber-600",
  },
  {
    name: "Disgust",
    description: "Nose wrinkle, upper lip raise, narrowed eyes. Activates the levator labii superioris alaeque nasi.",
    color: "text-orange-600",
  },
  {
    name: "Contempt",
    description: "The only asymmetric expression — unilateral lip corner raise. A one-sided smirk signaling moral superiority.",
    color: "text-slate-600",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function Science() {
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
          <p className="text-muted text-lg max-w-2xl mb-16">
            Paul Ekman&apos;s cross-cultural research — replicated from Tokyo to
            Papua New Guinea — identified seven facial expressions recognized by
            every human society. Micro-expressions of these emotions last just
            40-67 milliseconds and cannot be voluntarily suppressed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {emotions.map((emotion, i) => (
            <motion.div
              key={emotion.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-5 hover:border-accent/30 transition-colors"
            >
              <pre className={`ascii-art ${emotion.color} mb-3 select-none`}>
                {emotionFaces[emotion.name.toLowerCase()]}
              </pre>
              <h3 className="font-semibold text-sm mb-1">{emotion.name}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {emotion.description}
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
              Minimum duration of a micro-expression — faster than a blink
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-accent mb-2">
              44
            </p>
            <p className="text-sm text-muted">
              Action Units in the FACS system, mapping every possible facial
              movement
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-accent mb-2">
              50+
            </p>
            <p className="text-sm text-muted">
              Years of peer-reviewed research behind emotion recognition science
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
