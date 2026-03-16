const fs = require("fs");
const path = require("path");

const API_KEY = "AIzaSyBPeRLv0gFT7TzTksfJxPGTKbIuMcesiGw";
const MODEL = "gemini-3.1-flash-image-preview";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const OUTPUT_DIR = path.join(__dirname, "website", "public", "faces");

const STYLE_BASE = `Warm, soft portrait illustration. Gentle amber-golden lighting like a cozy room on a snowy evening. Soft, intimate atmosphere. Warm skin tones with golden undertones. Subject facing forward, centered, shoulders barely visible. Simple warm-toned background with very subtle gradient. Slightly stylized but realistic — like a premium editorial illustration. No text, no accessories, no busy details. Square crop, clean composition. The feeling of warmth and safety indoors while snow falls outside.`;

const emotions = [
  {
    name: "happiness",
    detail: "Genuine, warm happiness. A natural Duchenne smile — cheeks raised high, crow's feet wrinkles around bright squinted eyes, mouth open showing teeth. Radiating warmth and joy.",
  },
  {
    name: "sadness",
    detail: "Quiet sadness. Inner eyebrows raised and drawn together in an oblique shape. Drooped upper eyelids, gaze slightly lowered. Lip corners gently pulled down. A vulnerable, tender expression.",
  },
  {
    name: "anger",
    detail: "Controlled anger. Eyebrows lowered and drawn together with vertical furrows between the brows. Intense gaze with raised upper lids. Lips pressed firmly together. Jaw set. Contained intensity.",
  },
  {
    name: "fear",
    detail: "Fear. Eyebrows raised and pulled together. Eyes wide open showing white above the iris. Mouth slightly open and stretched. A tense, alert, vulnerable expression.",
  },
  {
    name: "surprise",
    detail: "Surprise. Eyebrows raised high and evenly. Eyes wide and round. Jaw dropped with mouth open in a round shape. An open, genuine, momentary expression.",
  },
  {
    name: "disgust",
    detail: "Disgust. Nose wrinkled, upper lip raised. Eyes slightly narrowed and squinted. Brows bunched slightly. A subtle recoiling expression.",
  },
  {
    name: "contempt",
    detail: "Contempt. One corner of the mouth raised in a subtle asymmetric smirk. Eyes relaxed, knowing. A dismissive, one-sided half-smile. The only asymmetric facial expression.",
  },
];

async function generateImage(prompt, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: {
              aspectRatio: "1:1",
              imageSize: "1K",
            },
          },
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`API ${res.status}: ${err.slice(0, 300)}`);
      }

      const data = await res.json();
      const parts = data.candidates?.[0]?.content?.parts || [];
      const imgPart = parts.find((p) => p.inlineData);

      if (!imgPart) {
        const textPart = parts.find((p) => p.text);
        throw new Error(`No image in response. Text: ${textPart?.text?.slice(0, 200) || "none"}`);
      }

      return Buffer.from(imgPart.inlineData.data, "base64");
    } catch (err) {
      console.error(`  Attempt ${attempt + 1} failed: ${err.message}`);
      if (attempt === retries) throw err;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

async function main() {
  // Ensure output dir exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("Generating emotion face images with Nano Banana Pro 2...\n");
  console.log(`Output: ${OUTPUT_DIR}\n`);

  const results = [];

  for (const emotion of emotions) {
    console.log(`--- ${emotion.name.toUpperCase()} ---`);

    // Generate 2 variants, pick the one that comes back (both should be good with this model)
    const prompt = `${STYLE_BASE}\n\nExpression: ${emotion.detail}`;

    // Variant A
    console.log("  Generating variant A...");
    try {
      const imgA = await generateImage(prompt);
      const pathA = path.join(OUTPUT_DIR, `${emotion.name}-a.png`);
      fs.writeFileSync(pathA, imgA);
      console.log(`  Saved: ${pathA} (${(imgA.length / 1024).toFixed(0)}KB)`);
      results.push({ emotion: emotion.name, variant: "a", path: pathA, size: imgA.length });
    } catch (err) {
      console.error(`  FAILED variant A: ${err.message}`);
    }

    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 1500));

    // Variant B — slight prompt variation for diversity
    console.log("  Generating variant B...");
    try {
      const promptB = `${STYLE_BASE}\n\nExpression: ${emotion.detail}\n\nSlightly different angle, same warm cozy style.`;
      const imgB = await generateImage(promptB);
      const pathB = path.join(OUTPUT_DIR, `${emotion.name}-b.png`);
      fs.writeFileSync(pathB, imgB);
      console.log(`  Saved: ${pathB} (${(imgB.length / 1024).toFixed(0)}KB)`);
      results.push({ emotion: emotion.name, variant: "b", path: pathB, size: imgB.length });
    } catch (err) {
      console.error(`  FAILED variant B: ${err.message}`);
    }

    await new Promise((r) => setTimeout(r, 1500));
    console.log("");
  }

  console.log("\n=== GENERATION COMPLETE ===");
  console.log(`Total images: ${results.length} / ${emotions.length * 2}`);
  console.log("\nReview the variants and pick the best one for each emotion.");
  console.log("Files are in:", OUTPUT_DIR);
}

main().catch(console.error);
