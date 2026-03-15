"use client";

import { motion } from "framer-motion";

// FACS Action Unit configurations for each emotion
// Each emotion activates specific muscle groups shown as highlighted regions
interface FaceConfig {
  label: string;
  actionUnits: string[];
  // SVG path modifications for each emotion
  browLeft: string;
  browRight: string;
  eyeLeft: string;
  eyeRight: string;
  nose: string;
  mouth: string;
  // Highlighted muscle regions (SVG paths with opacity)
  muscleHighlights: { path: string; label: string }[];
}

const emotionConfigs: Record<string, FaceConfig> = {
  happiness: {
    label: "Happiness",
    actionUnits: ["AU6", "AU12"],
    browLeft: "M 28 32 Q 35 29, 42 31",
    browRight: "M 58 31 Q 65 29, 72 32",
    eyeLeft: "M 30 38 Q 35 35, 40 38 Q 35 40, 30 38",
    eyeRight: "M 60 38 Q 65 35, 70 38 Q 65 40, 60 38",
    nose: "M 48 45 Q 50 48, 52 45",
    mouth: "M 37 58 Q 42 55, 50 56 Q 58 55, 63 58 Q 58 65, 50 67 Q 42 65, 37 58",
    muscleHighlights: [
      { path: "M 25 36 Q 30 32, 35 36 Q 30 42, 25 36", label: "Orbicularis oculi" },
      { path: "M 65 36 Q 70 32, 75 36 Q 70 42, 65 36", label: "Orbicularis oculi" },
      { path: "M 38 55 Q 44 50, 50 52 Q 56 50, 62 55 Q 56 60, 50 58 Q 44 60, 38 55", label: "Zygomaticus major" },
    ],
  },
  sadness: {
    label: "Sadness",
    actionUnits: ["AU1", "AU4", "AU15"],
    browLeft: "M 28 30 Q 33 33, 42 32",
    browRight: "M 58 32 Q 67 33, 72 30",
    eyeLeft: "M 31 38 Q 35 36, 40 38 Q 35 40, 31 38",
    eyeRight: "M 60 38 Q 65 36, 69 38 Q 65 40, 60 38",
    nose: "M 48 46 Q 50 48, 52 46",
    mouth: "M 38 62 Q 44 64, 50 63 Q 56 64, 62 62 Q 56 58, 50 57 Q 44 58, 38 62",
    muscleHighlights: [
      { path: "M 30 28 Q 35 25, 40 28 Q 35 32, 30 28", label: "Frontalis (inner)" },
      { path: "M 60 28 Q 65 25, 70 28 Q 65 32, 60 28", label: "Frontalis (inner)" },
      { path: "M 36 58 Q 43 62, 50 60 Q 57 62, 64 58 Q 57 56, 50 55 Q 43 56, 36 58", label: "Depressor anguli oris" },
    ],
  },
  anger: {
    label: "Anger",
    actionUnits: ["AU4", "AU5", "AU23", "AU24"],
    browLeft: "M 28 34 Q 33 30, 42 30",
    browRight: "M 58 30 Q 67 30, 72 34",
    eyeLeft: "M 30 37 Q 35 34, 41 37 Q 35 39, 30 37",
    eyeRight: "M 59 37 Q 65 34, 70 37 Q 65 39, 59 37",
    nose: "M 47 44 Q 50 47, 53 44",
    mouth: "M 38 60 Q 44 59, 50 59 Q 56 59, 62 60 Q 56 62, 50 62 Q 44 62, 38 60",
    muscleHighlights: [
      { path: "M 32 28 Q 37 24, 45 28 Q 37 31, 32 28", label: "Corrugator supercilii" },
      { path: "M 55 28 Q 63 24, 68 28 Q 63 31, 55 28", label: "Corrugator supercilii" },
      { path: "M 39 57 Q 44 56, 50 56 Q 56 56, 61 57 Q 56 63, 50 64 Q 44 63, 39 57", label: "Orbicularis oris" },
    ],
  },
  fear: {
    label: "Fear",
    actionUnits: ["AU1", "AU2", "AU4", "AU5", "AU20"],
    browLeft: "M 28 28 Q 33 31, 42 29",
    browRight: "M 58 29 Q 67 31, 72 28",
    eyeLeft: "M 29 38 Q 35 33, 41 38 Q 35 42, 29 38",
    eyeRight: "M 59 38 Q 65 33, 71 38 Q 65 42, 59 38",
    nose: "M 47 45 Q 50 48, 53 45",
    mouth: "M 36 60 Q 43 57, 50 57 Q 57 57, 64 60 Q 57 64, 50 65 Q 43 64, 36 60",
    muscleHighlights: [
      { path: "M 28 26 Q 35 22, 42 26 Q 35 30, 28 26", label: "Frontalis" },
      { path: "M 58 26 Q 65 22, 72 26 Q 65 30, 58 26", label: "Frontalis" },
      { path: "M 30 34 Q 35 30, 40 34 Q 35 38, 30 34", label: "Levator palpebrae" },
    ],
  },
  surprise: {
    label: "Surprise",
    actionUnits: ["AU1", "AU2", "AU5", "AU26"],
    browLeft: "M 28 27 Q 35 24, 42 27",
    browRight: "M 58 27 Q 65 24, 72 27",
    eyeLeft: "M 29 38 Q 35 33, 41 38 Q 35 43, 29 38",
    eyeRight: "M 59 38 Q 65 33, 71 38 Q 65 43, 59 38",
    nose: "M 47 46 Q 50 49, 53 46",
    mouth: "M 40 60 Q 45 58, 50 58 Q 55 58, 60 60 Q 55 67, 50 69 Q 45 67, 40 60",
    muscleHighlights: [
      { path: "M 28 24 Q 35 20, 42 24 Q 35 28, 28 24", label: "Frontalis (full)" },
      { path: "M 58 24 Q 65 20, 72 24 Q 65 28, 58 24", label: "Frontalis (full)" },
      { path: "M 42 60 Q 46 58, 50 58 Q 54 58, 58 60 Q 54 66, 50 68 Q 46 66, 42 60", label: "Masseter (relaxed)" },
    ],
  },
  disgust: {
    label: "Disgust",
    actionUnits: ["AU9", "AU10", "AU17"],
    browLeft: "M 28 32 Q 34 30, 42 31",
    browRight: "M 58 31 Q 66 30, 72 32",
    eyeLeft: "M 31 38 Q 35 36, 40 38 Q 35 39, 31 38",
    eyeRight: "M 60 38 Q 65 36, 69 38 Q 65 39, 60 38",
    nose: "M 45 43 Q 50 46, 55 43",
    mouth: "M 38 60 Q 44 57, 50 58 Q 56 57, 62 60 Q 56 61, 50 62 Q 44 61, 38 60",
    muscleHighlights: [
      { path: "M 42 42 Q 47 38, 50 42 Q 47 46, 42 42", label: "Lev. labii sup. alaeque nasi" },
      { path: "M 50 42 Q 53 38, 58 42 Q 53 46, 50 42", label: "Lev. labii sup. alaeque nasi" },
      { path: "M 40 55 Q 45 52, 50 53 Q 55 52, 60 55 Q 55 57, 50 56 Q 45 57, 40 55", label: "Levator labii superioris" },
    ],
  },
  contempt: {
    label: "Contempt",
    actionUnits: ["AU12R", "AU14R"],
    browLeft: "M 28 31 Q 35 29, 42 31",
    browRight: "M 58 31 Q 65 30, 72 31",
    eyeLeft: "M 31 38 Q 35 36, 40 38 Q 35 40, 31 38",
    eyeRight: "M 60 38 Q 65 35, 69 38 Q 65 40, 60 38",
    nose: "M 48 45 Q 50 48, 52 45",
    mouth: "M 38 60 Q 44 60, 50 60 Q 56 59, 63 57 Q 56 62, 50 63 Q 44 62, 38 61",
    muscleHighlights: [
      { path: "M 56 54 Q 62 50, 68 54 Q 62 58, 56 54", label: "Zygomaticus major (R)" },
      { path: "M 58 56 Q 64 53, 68 56 Q 64 59, 58 56", label: "Buccinator (R)" },
    ],
  },
};

interface FaceDiagramProps {
  emotion: string;
  size?: number;
  showLabels?: boolean;
  showMuscles?: boolean;
  animated?: boolean;
  className?: string;
  accentColor?: string;
}

export default function FaceDiagram({
  emotion,
  size = 200,
  showLabels = true,
  showMuscles = true,
  animated = true,
  className = "",
  accentColor,
}: FaceDiagramProps) {
  const config = emotionConfigs[emotion.toLowerCase()];
  if (!config) return null;

  const color = accentColor || "var(--accent)";
  const viewBox = "0 0 100 85";

  const svgContent = (
    <svg
      viewBox={viewBox}
      width={size}
      height={size * 0.85}
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Face outline */}
      <ellipse
        cx="50"
        cy="48"
        rx="30"
        ry="35"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* Muscle highlight regions */}
      {showMuscles &&
        config.muscleHighlights.map((muscle, i) => (
          <path
            key={i}
            d={muscle.path}
            fill={color}
            opacity="0.12"
            stroke={color}
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
        ))}

      {/* Brows */}
      <path
        d={config.browLeft}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={config.browRight}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eyes */}
      <path
        d={config.eyeLeft}
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d={config.eyeRight}
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.15"
      />

      {/* Pupils */}
      <circle cx="35" cy="38" r="1.5" fill="currentColor" />
      <circle cx="65" cy="38" r="1.5" fill="currentColor" />

      {/* Nose */}
      <path
        d={config.nose}
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
      />

      {/* Mouth */}
      <path
        d={config.mouth}
        stroke="currentColor"
        strokeWidth="0.8"
        fill={color}
        fillOpacity="0.08"
      />

      {/* AU labels */}
      {showLabels && (
        <>
          {config.actionUnits.map((au, i) => {
            const positions = [
              { x: 85, y: 32 + i * 7 },
            ];
            const pos = positions[0];
            return (
              <g key={au}>
                <text
                  x={pos.x}
                  y={pos.y + i * 7}
                  fontSize="3.5"
                  fontFamily="var(--font-geist-mono), monospace"
                  fill={color}
                  textAnchor="end"
                  opacity="0.8"
                >
                  {au}
                </text>
                <line
                  x1={pos.x - 1}
                  y1={pos.y + i * 7 - 1}
                  x2="75"
                  y2={pos.y + i * 7 - 1}
                  stroke={color}
                  strokeWidth="0.2"
                  strokeDasharray="1 1"
                  opacity="0.4"
                />
              </g>
            );
          })}
        </>
      )}

      {/* Center line (facial symmetry axis) */}
      <line
        x1="50"
        y1="15"
        x2="50"
        y2="80"
        stroke={color}
        strokeWidth="0.15"
        strokeDasharray="2 2"
        opacity="0.2"
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
        className="inline-flex"
      >
        {svgContent}
      </motion.div>
    );
  }

  return <div className="inline-flex">{svgContent}</div>;
}

// Compact face for cards - smaller, no labels
export function FaceDiagramSmall({
  emotion,
  className = "",
}: {
  emotion: string;
  className?: string;
}) {
  return (
    <FaceDiagram
      emotion={emotion}
      size={100}
      showLabels={false}
      showMuscles={true}
      animated={false}
      className={className}
    />
  );
}

// Interactive FACS face diagram with hoverable muscle regions
export function FACSInteractiveFace({
  size = 400,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const color = "var(--accent)";

  const regions = [
    {
      id: "frontalis",
      label: "Frontalis",
      aus: "AU1, AU2",
      desc: "Raises the eyebrows — inner and outer portions",
      path: "M 25 18 Q 35 12, 50 14 Q 65 12, 75 18 Q 65 22, 50 24 Q 35 22, 25 18",
      anchor: { x: 50, y: 16 },
    },
    {
      id: "corrugator",
      label: "Corrugator Supercilii",
      aus: "AU4",
      desc: "Draws brows together and down — the frown muscle",
      path: "M 35 26 Q 42 23, 50 25 Q 58 23, 65 26 Q 58 29, 50 28 Q 42 29, 35 26",
      anchor: { x: 50, y: 26 },
    },
    {
      id: "orbicularis-oculi",
      label: "Orbicularis Oculi",
      aus: "AU5, AU6, AU7",
      desc: "Sphincter muscle around the eye — squints, winks, Duchenne crinkle",
      path: "M 25 32 Q 35 28, 43 34 Q 35 42, 25 38 Z M 57 34 Q 65 28, 75 32 Q 75 38, 65 42 Z",
      anchor: { x: 35, y: 36 },
    },
    {
      id: "levator-labii",
      label: "Lev. Labii Superioris",
      aus: "AU9, AU10",
      desc: "Wrinkles the nose and raises the upper lip — disgust",
      path: "M 40 44 Q 45 40, 50 43 Q 55 40, 60 44 Q 55 48, 50 47 Q 45 48, 40 44",
      anchor: { x: 50, y: 44 },
    },
    {
      id: "zygomaticus",
      label: "Zygomaticus Major",
      aus: "AU12",
      desc: "Pulls lip corners up and back — the smile muscle",
      path: "M 25 48 Q 32 44, 38 50 Q 32 54, 25 52 Z M 62 50 Q 68 44, 75 48 Q 75 52, 68 54 Z",
      anchor: { x: 32, y: 50 },
    },
    {
      id: "orbicularis-oris",
      label: "Orbicularis Oris",
      aus: "AU23, AU24, AU28",
      desc: "Sphincter muscle around the mouth — purses, tightens, presses lips",
      path: "M 36 56 Q 43 52, 50 53 Q 57 52, 64 56 Q 57 64, 50 66 Q 43 64, 36 56",
      anchor: { x: 50, y: 58 },
    },
    {
      id: "depressor",
      label: "Depressor Anguli Oris",
      aus: "AU15",
      desc: "Pulls mouth corners down — the frown/sadness muscle",
      path: "M 30 60 Q 36 56, 40 60 Q 36 66, 30 64 Z M 60 60 Q 64 56, 70 60 Q 70 64, 64 66 Z",
      anchor: { x: 35, y: 62 },
    },
    {
      id: "mentalis",
      label: "Mentalis",
      aus: "AU17",
      desc: "Pushes chin skin up, wrinkling the chin — doubt, displeasure",
      path: "M 42 68 Q 50 66, 58 68 Q 55 75, 50 76 Q 45 75, 42 68",
      anchor: { x: 50, y: 72 },
    },
  ];

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 85"
        width={size}
        height={size * 0.85}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Face outline */}
        <ellipse
          cx="50"
          cy="48"
          rx="30"
          ry="35"
          stroke={color}
          strokeWidth="0.6"
          opacity="0.4"
        />

        {/* Symmetry axis */}
        <line
          x1="50" y1="10" x2="50" y2="82"
          stroke={color}
          strokeWidth="0.15"
          strokeDasharray="1.5 1.5"
          opacity="0.2"
        />

        {/* Muscle regions - interactive */}
        {regions.map((region) => (
          <g key={region.id} className="group/region cursor-pointer">
            <path
              d={region.path}
              fill={color}
              opacity="0.08"
              stroke={color}
              strokeWidth="0.4"
              strokeDasharray="1.5 0.8"
              className="transition-all duration-200 group-hover/region:opacity-25 group-hover/region:stroke-[0.8px]"
            />
            {/* Label on hover */}
            <text
              x={region.anchor.x}
              y={region.anchor.y}
              fontSize="2.8"
              fontFamily="var(--font-geist-mono), monospace"
              fill={color}
              textAnchor="middle"
              className="opacity-0 group-hover/region:opacity-100 transition-opacity duration-200 pointer-events-none"
            >
              {region.aus}
            </text>
          </g>
        ))}

        {/* Static features */}
        {/* Brows */}
        <path d="M 28 30 Q 35 27, 42 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M 58 30 Q 65 27, 72 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        {/* Eyes */}
        <path d="M 30 38 Q 35 35, 40 38 Q 35 41, 30 38" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
        <path d="M 60 38 Q 65 35, 70 38 Q 65 41, 60 38" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
        <circle cx="35" cy="38" r="1.5" fill="currentColor" />
        <circle cx="65" cy="38" r="1.5" fill="currentColor" />
        {/* Nose */}
        <path d="M 48 45 Q 50 48, 52 45" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        {/* Mouth */}
        <path d="M 38 58 Q 44 56, 50 57 Q 56 56, 62 58 Q 56 62, 50 63 Q 44 62, 38 58" stroke="currentColor" strokeWidth="0.7" fill="none" />
      </svg>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
        {regions.map((region) => (
          <div key={region.id} className="flex items-start gap-2 group cursor-default">
            <span
              className="inline-block w-2 h-2 rounded-full mt-1.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: color }}
            />
            <div>
              <p className="text-xs font-medium leading-tight">{region.label}</p>
              <p className="text-[10px] text-muted font-mono">{region.aus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
