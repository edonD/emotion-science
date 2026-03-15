"use client";

import { motion } from "framer-motion";
import { facsAsciiDiagram } from "../lib/ascii";
import { fadeUp } from "../lib/animations";

const actionUnits = [
  { au: "AU1", name: "Inner Brow Raise", muscle: "Frontalis, pars medialis" },
  { au: "AU2", name: "Outer Brow Raise", muscle: "Frontalis, pars lateralis" },
  { au: "AU4", name: "Brow Lowerer", muscle: "Corrugator supercilii" },
  { au: "AU5", name: "Upper Lid Raise", muscle: "Levator palpebrae" },
  { au: "AU6", name: "Cheek Raise", muscle: "Orbicularis oculi" },
  { au: "AU7", name: "Lid Tightener", muscle: "Orbicularis oculi" },
  { au: "AU9", name: "Nose Wrinkle", muscle: "Levator labii sup. alaeque nasi" },
  { au: "AU10", name: "Upper Lip Raise", muscle: "Levator labii superioris" },
  { au: "AU12", name: "Lip Corner Pull", muscle: "Zygomaticus major" },
  { au: "AU15", name: "Lip Corner Depress", muscle: "Depressor anguli oris" },
  { au: "AU17", name: "Chin Raise", muscle: "Mentalis" },
  { au: "AU20", name: "Lip Stretch", muscle: "Risorius, Platysma" },
  { au: "AU23", name: "Lip Tighten", muscle: "Orbicularis oris" },
  { au: "AU24", name: "Lip Press", muscle: "Orbicularis oris" },
  { au: "AU26", name: "Jaw Drop", muscle: "Masseter, Pterygoid" },
];

export default function FACSSection() {
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
          <p className="text-muted text-lg max-w-2xl mb-16">
            The Facial Action Coding System breaks every possible facial
            movement into discrete, measurable Action Units. Each AU maps to a
            specific muscle or muscle group — making emotion reading systematic,
            not intuitive.
          </p>
        </motion.div>

        {/* ASCII Diagram */}
        <motion.div
          {...fadeUp}
          className="bg-card border border-border rounded-lg p-6 mb-16 overflow-x-auto"
        >
          <pre className="ascii-art-lg text-accent select-none">
            {facsAsciiDiagram}
          </pre>
        </motion.div>

        {/* AU Table */}
        <motion.div {...fadeUp}>
          <h3 className="font-semibold text-lg mb-6">
            Key Action Units You&apos;ll Master
          </h3>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[60px_1fr_1fr] text-xs font-mono bg-card border-b border-border">
              <div className="px-4 py-3 font-semibold text-muted">AU</div>
              <div className="px-4 py-3 font-semibold text-muted">Action</div>
              <div className="px-4 py-3 font-semibold text-muted hidden sm:block">
                Muscle
              </div>
            </div>
            {actionUnits.map((au, i) => (
              <div
                key={au.au}
                className={`grid grid-cols-[60px_1fr_1fr] text-sm ${
                  i < actionUnits.length - 1 ? "border-b border-border" : ""
                } hover:bg-accent-light/50 transition-colors`}
              >
                <div className="px-4 py-2.5 font-mono text-accent font-medium text-xs">
                  {au.au}
                </div>
                <div className="px-4 py-2.5 text-sm">{au.name}</div>
                <div className="px-4 py-2.5 text-xs text-muted hidden sm:block">
                  {au.muscle}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4 font-mono">
            Full system includes 44+ AUs with intensity coding (A-E) and
            laterality modifiers. Complete training available in Expert Mastery
            tier.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
