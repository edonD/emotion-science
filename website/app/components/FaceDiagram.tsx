"use client";

import { motion } from "framer-motion";

// FACS Action Unit configurations for each emotion
// Redesigned with warmer, more human-feeling proportions
interface FaceConfig {
  label: string;
  actionUnits: string[];
  browLeft: string;
  browRight: string;
  eyeLeftUpper: string;
  eyeLeftLower: string;
  eyeRightUpper: string;
  eyeRightLower: string;
  pupilLeftX: number;
  pupilLeftY: number;
  pupilRightX: number;
  pupilRightY: number;
  pupilRadius: number;
  nose: string;
  mouth: string;
  // Optional second mouth path for open mouths
  mouthInner?: string;
  muscleHighlights: { path: string; label: string }[];
}

const emotionConfigs: Record<string, FaceConfig> = {
  happiness: {
    label: "Happiness",
    actionUnits: ["AU6", "AU12"],
    // Relaxed, slightly lifted brows
    browLeft: "M 27 30 Q 32 27.5, 40 29",
    browRight: "M 60 29 Q 68 27.5, 73 30",
    // Eyes slightly squinted (Duchenne crinkle) — warm, genuine
    eyeLeftUpper: "M 28 36 Q 34 32.5, 41 35.5",
    eyeLeftLower: "M 28 36 Q 34 38, 41 35.5",
    eyeRightUpper: "M 59 35.5 Q 66 32.5, 72 36",
    eyeRightLower: "M 59 35.5 Q 66 38, 72 36",
    pupilLeftX: 34.5,
    pupilLeftY: 35.5,
    pupilRightX: 65.5,
    pupilRightY: 35.5,
    pupilRadius: 2.2,
    nose: "M 47 44 Q 50 47, 53 44",
    // Wide, natural smile with upturned corners
    mouth: "M 36 56 Q 43 54, 50 54.5 Q 57 54, 64 56 Q 58 63, 50 65 Q 42 63, 36 56",
    muscleHighlights: [
      { path: "M 24 34 Q 30 29, 36 34 Q 30 40, 24 34", label: "Orbicularis oculi" },
      { path: "M 64 34 Q 70 29, 76 34 Q 70 40, 64 34", label: "Orbicularis oculi" },
      { path: "M 37 53 Q 43 49, 50 50 Q 57 49, 63 53 Q 57 58, 50 56 Q 43 58, 37 53", label: "Zygomaticus major" },
    ],
  },
  sadness: {
    label: "Sadness",
    actionUnits: ["AU1", "AU4", "AU15"],
    // Inner brows raised, creating oblique shape
    browLeft: "M 27 29 Q 31 32, 40 31",
    browRight: "M 60 31 Q 69 32, 73 29",
    // Slightly drooped, softer eyes
    eyeLeftUpper: "M 28 36.5 Q 34 33.5, 41 36",
    eyeLeftLower: "M 28 36.5 Q 34 38.5, 41 36",
    eyeRightUpper: "M 59 36 Q 66 33.5, 72 36.5",
    eyeRightLower: "M 59 36 Q 66 38.5, 72 36.5",
    pupilLeftX: 34.5,
    pupilLeftY: 36.5,
    pupilRightX: 65.5,
    pupilRightY: 36.5,
    pupilRadius: 2.2,
    nose: "M 47 44.5 Q 50 47, 53 44.5",
    // Downturned mouth corners
    mouth: "M 38 58 Q 43 60.5, 50 60 Q 57 60.5, 62 58",
    muscleHighlights: [
      { path: "M 29 27 Q 34 24, 39 27 Q 34 31, 29 27", label: "Frontalis (inner)" },
      { path: "M 61 27 Q 66 24, 71 27 Q 66 31, 61 27", label: "Frontalis (inner)" },
      { path: "M 36 56 Q 43 60, 50 58 Q 57 60, 64 56 Q 57 54, 50 55 Q 43 54, 36 56", label: "Depressor anguli oris" },
    ],
  },
  anger: {
    label: "Anger",
    actionUnits: ["AU4", "AU5", "AU23", "AU24"],
    // Brows lowered and drawn together — V shape
    browLeft: "M 27 33 Q 32 29, 41 29.5",
    browRight: "M 59 29.5 Q 68 29, 73 33",
    // Wider, more intense eyes (upper lid raised)
    eyeLeftUpper: "M 28 36 Q 34 33, 41 35.5",
    eyeLeftLower: "M 28 36 Q 34 38, 41 35.5",
    eyeRightUpper: "M 59 35.5 Q 66 33, 72 36",
    eyeRightLower: "M 59 35.5 Q 66 38, 72 36",
    pupilLeftX: 34.5,
    pupilLeftY: 35.8,
    pupilRightX: 65.5,
    pupilRightY: 35.8,
    pupilRadius: 2.4,
    nose: "M 46 43 Q 50 46.5, 54 43",
    // Tight, pressed lips
    mouth: "M 38 58 Q 44 57, 50 57 Q 56 57, 62 58 Q 56 60, 50 60.5 Q 44 60, 38 58",
    muscleHighlights: [
      { path: "M 32 27 Q 38 23, 44 27 Q 38 30, 32 27", label: "Corrugator supercilii" },
      { path: "M 56 27 Q 62 23, 68 27 Q 62 30, 56 27", label: "Corrugator supercilii" },
      { path: "M 39 55 Q 44 54, 50 54 Q 56 54, 61 55 Q 56 61, 50 62 Q 44 61, 39 55", label: "Orbicularis oris" },
    ],
  },
  fear: {
    label: "Fear",
    actionUnits: ["AU1", "AU2", "AU4", "AU5"],
    // Brows raised and pulled together
    browLeft: "M 27 27 Q 32 30, 40 28.5",
    browRight: "M 60 28.5 Q 68 30, 73 27",
    // Wide, open eyes showing more white
    eyeLeftUpper: "M 27 37 Q 34 31.5, 42 36",
    eyeLeftLower: "M 27 37 Q 34 40, 42 36",
    eyeRightUpper: "M 58 36 Q 66 31.5, 73 37",
    eyeRightLower: "M 58 36 Q 66 40, 73 37",
    pupilLeftX: 34.5,
    pupilLeftY: 35.8,
    pupilRightX: 65.5,
    pupilRightY: 35.8,
    pupilRadius: 1.8,
    nose: "M 47 44 Q 50 47, 53 44",
    // Stretched open mouth
    mouth: "M 37 57 Q 43 55, 50 55 Q 57 55, 63 57 Q 58 63, 50 64 Q 42 63, 37 57",
    muscleHighlights: [
      { path: "M 28 25 Q 35 21, 42 25 Q 35 29, 28 25", label: "Frontalis" },
      { path: "M 58 25 Q 65 21, 72 25 Q 65 29, 58 25", label: "Frontalis" },
      { path: "M 29 33 Q 34 29, 40 33 Q 34 37, 29 33", label: "Levator palpebrae" },
    ],
  },
  surprise: {
    label: "Surprise",
    actionUnits: ["AU1", "AU2", "AU5", "AU26"],
    // High raised brows, evenly
    browLeft: "M 27 26 Q 34 23, 41 26",
    browRight: "M 59 26 Q 66 23, 73 26",
    // Very wide, round eyes
    eyeLeftUpper: "M 27 37 Q 34 31, 42 36",
    eyeLeftLower: "M 27 37 Q 34 41, 42 36",
    eyeRightUpper: "M 58 36 Q 66 31, 73 37",
    eyeRightLower: "M 58 36 Q 66 41, 73 37",
    pupilLeftX: 34.5,
    pupilLeftY: 36,
    pupilRightX: 65.5,
    pupilRightY: 36,
    pupilRadius: 2,
    nose: "M 47 45 Q 50 48, 53 45",
    // Round open mouth (jaw drop)
    mouth: "M 40 57 Q 45 55.5, 50 55.5 Q 55 55.5, 60 57 Q 57 65, 50 67 Q 43 65, 40 57",
    muscleHighlights: [
      { path: "M 28 23 Q 35 19, 42 23 Q 35 27, 28 23", label: "Frontalis (full)" },
      { path: "M 58 23 Q 65 19, 72 23 Q 65 27, 58 23", label: "Frontalis (full)" },
      { path: "M 42 58 Q 46 56, 50 56 Q 54 56, 58 58 Q 54 64, 50 66 Q 46 64, 42 58", label: "Masseter (relaxed)" },
    ],
  },
  disgust: {
    label: "Disgust",
    actionUnits: ["AU9", "AU10", "AU17"],
    // Slightly lowered, bunched brows
    browLeft: "M 27 31 Q 33 29, 40 30",
    browRight: "M 60 30 Q 67 29, 73 31",
    // Narrowed, squinted eyes
    eyeLeftUpper: "M 29 36 Q 34 34, 40 35.5",
    eyeLeftLower: "M 29 36 Q 34 37.5, 40 35.5",
    eyeRightUpper: "M 60 35.5 Q 66 34, 71 36",
    eyeRightLower: "M 60 35.5 Q 66 37.5, 71 36",
    pupilLeftX: 34.5,
    pupilLeftY: 35.8,
    pupilRightX: 65.5,
    pupilRightY: 35.8,
    pupilRadius: 2,
    // Wrinkled nose (wider)
    nose: "M 44 42 Q 50 46, 56 42",
    // Raised upper lip, asymmetric
    mouth: "M 38 57 Q 44 54.5, 50 55.5 Q 56 54.5, 62 57 Q 56 59, 50 60 Q 44 59, 38 57",
    muscleHighlights: [
      { path: "M 42 41 Q 47 37, 50 41 Q 47 45, 42 41", label: "Lev. labii sup. alaeque nasi" },
      { path: "M 50 41 Q 53 37, 58 41 Q 53 45, 50 41", label: "Lev. labii sup. alaeque nasi" },
      { path: "M 40 53 Q 45 50, 50 51 Q 55 50, 60 53 Q 55 55, 50 54 Q 45 55, 40 53", label: "Levator labii superioris" },
    ],
  },
  contempt: {
    label: "Contempt",
    actionUnits: ["AU12R", "AU14R"],
    // Neutral, relaxed brows
    browLeft: "M 27 30 Q 34 28, 40 30",
    browRight: "M 60 30 Q 66 28.5, 73 30",
    // Relaxed eyes, slightly asymmetric (one slightly narrower)
    eyeLeftUpper: "M 28 36 Q 34 33.5, 41 36",
    eyeLeftLower: "M 28 36 Q 34 38, 41 36",
    eyeRightUpper: "M 59 35.5 Q 66 33, 72 35.5",
    eyeRightLower: "M 59 35.5 Q 66 37.5, 72 35.5",
    pupilLeftX: 34.5,
    pupilLeftY: 36,
    pupilRightX: 65.5,
    pupilRightY: 35.5,
    pupilRadius: 2.2,
    nose: "M 47 44.5 Q 50 47, 53 44.5",
    // Asymmetric smirk — one corner raised
    mouth: "M 38 58 Q 44 58, 50 58 Q 57 57, 63 55 Q 57 60, 50 61 Q 44 60.5, 38 59",
    muscleHighlights: [
      { path: "M 56 52 Q 62 48, 68 52 Q 62 56, 56 52", label: "Zygomaticus major (R)" },
      { path: "M 58 54 Q 64 51, 68 54 Q 64 57, 58 54", label: "Buccinator (R)" },
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
      {/* Face outline — softer, rounder shape */}
      <path
        d="M 50 12 Q 28 12, 22 36 Q 19 50, 28 64 Q 36 76, 50 78 Q 64 76, 72 64 Q 81 50, 78 36 Q 72 12, 50 12"
        stroke={color}
        strokeWidth="1"
        opacity="0.35"
        fill="none"
      />

      {/* Subtle ear hints */}
      <path
        d="M 21 38 Q 18 36, 18 42 Q 18 46, 21 45"
        stroke={color}
        strokeWidth="0.4"
        opacity="0.15"
        fill="none"
      />
      <path
        d="M 79 38 Q 82 36, 82 42 Q 82 46, 79 45"
        stroke={color}
        strokeWidth="0.4"
        opacity="0.15"
        fill="none"
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
            strokeWidth="0.4"
            strokeDasharray="2 1"
          />
        ))}

      {/* Eyebrows — thicker, more natural */}
      <path
        d={config.browLeft}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={config.browRight}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eyes — upper and lower lids for more natural shape */}
      {/* Left eye */}
      <path
        d={config.eyeLeftUpper}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={config.eyeLeftLower}
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right eye */}
      <path
        d={config.eyeRightUpper}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={config.eyeRightLower}
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Irises — larger, warmer circles with a subtle gradient feel */}
      <circle
        cx={config.pupilLeftX}
        cy={config.pupilLeftY}
        r={config.pupilRadius + 1}
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.5"
      />
      <circle
        cx={config.pupilRightX}
        cy={config.pupilRightY}
        r={config.pupilRadius + 1}
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.5"
      />

      {/* Pupils — offset slightly for life-like gaze */}
      <circle
        cx={config.pupilLeftX}
        cy={config.pupilLeftY}
        r={config.pupilRadius}
        fill="currentColor"
        opacity="0.85"
      />
      <circle
        cx={config.pupilRightX}
        cy={config.pupilRightY}
        r={config.pupilRadius}
        fill="currentColor"
        opacity="0.85"
      />

      {/* Pupil highlights — tiny white dots for liveliness */}
      <circle
        cx={config.pupilLeftX - 0.6}
        cy={config.pupilLeftY - 0.6}
        r={0.6}
        fill="white"
        opacity="0.6"
      />
      <circle
        cx={config.pupilRightX - 0.6}
        cy={config.pupilRightY - 0.6}
        r={0.6}
        fill="white"
        opacity="0.6"
      />

      {/* Nose — soft, minimal */}
      <path
        d={config.nose}
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        opacity="0.4"
      />

      {/* Mouth */}
      <path
        d={config.mouth}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.06"
      />
      {config.mouthInner && (
        <path
          d={config.mouthInner}
          stroke="currentColor"
          strokeWidth="0.4"
          fill="none"
          opacity="0.3"
        />
      )}

      {/* AU labels */}
      {showLabels && (
        <>
          {config.actionUnits.map((au, i) => {
            const baseY = 30;
            const spacing = 7;
            return (
              <g key={au}>
                <text
                  x={92}
                  y={baseY + i * spacing}
                  fontSize="3.2"
                  fontFamily="var(--font-geist-mono), monospace"
                  fill={color}
                  textAnchor="end"
                  opacity="0.7"
                >
                  {au}
                </text>
                <line
                  x1={91}
                  y1={baseY + i * spacing - 1}
                  x2="76"
                  y2={baseY + i * spacing - 1}
                  stroke={color}
                  strokeWidth="0.15"
                  strokeDasharray="1 1"
                  opacity="0.3"
                />
              </g>
            );
          })}
        </>
      )}

      {/* Center symmetry line */}
      <line
        x1="50"
        y1="14"
        x2="50"
        y2="78"
        stroke={color}
        strokeWidth="0.1"
        strokeDasharray="2 2"
        opacity="0.15"
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
        {/* Face outline — softer, rounder */}
        <path
          d="M 50 12 Q 28 12, 22 36 Q 19 50, 28 64 Q 36 76, 50 78 Q 64 76, 72 64 Q 81 50, 78 36 Q 72 12, 50 12"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.35"
        />

        {/* Symmetry axis */}
        <line
          x1="50" y1="10" x2="50" y2="82"
          stroke={color}
          strokeWidth="0.1"
          strokeDasharray="1.5 1.5"
          opacity="0.15"
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
        <path d="M 27 30 Q 34 27, 40 29.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M 60 29.5 Q 66 27, 73 30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        {/* Eyes — upper and lower lids */}
        <path d="M 28 36 Q 34 33, 41 35.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M 28 36 Q 34 38.5, 41 35.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
        <path d="M 59 35.5 Q 66 33, 72 36" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M 59 35.5 Q 66 38.5, 72 36" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
        {/* Irises */}
        <circle cx="34.5" cy="36" r="3.2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        <circle cx="65.5" cy="36" r="3.2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        {/* Pupils */}
        <circle cx="34.5" cy="36" r="2.2" fill="currentColor" opacity="0.8" />
        <circle cx="65.5" cy="36" r="2.2" fill="currentColor" opacity="0.8" />
        {/* Highlights */}
        <circle cx="33.9" cy="35.4" r="0.6" fill="white" opacity="0.5" />
        <circle cx="64.9" cy="35.4" r="0.6" fill="white" opacity="0.5" />
        {/* Nose */}
        <path d="M 47 44.5 Q 50 47, 53 44.5" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
        {/* Mouth */}
        <path d="M 38 58 Q 44 56, 50 57 Q 56 56, 62 58" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" />
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
