const puppeteer = require("puppeteer");
const { execSync, spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const SCREENSHOTS_DIR = path.join(__dirname, "screenshots");
const WEBSITE_DIR = path.join(__dirname, "website");
const PORT = 3099;

async function waitForServer(url, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server did not start in time");
}

async function takeScreenshots() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  // Start dev server
  console.log("Starting Next.js dev server...");
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: WEBSITE_DIR,
    stdio: "pipe",
    env: { ...process.env },
  });

  // Build first if needed
  try {
    execSync("npx next build", { cwd: WEBSITE_DIR, stdio: "pipe" });
  } catch {
    console.log("Build already done or minor issue, continuing...");
  }

  try {
    await waitForServer(`http://localhost:${PORT}`);
    console.log("Server ready!");

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    // Desktop full page
    const desktopPage = await browser.newPage();
    await desktopPage.setViewport({ width: 1920, height: 1080 });
    await desktopPage.goto(`http://localhost:${PORT}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    await desktopPage.waitForTimeout(2000);
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-full.png"),
      fullPage: true,
    });
    console.log("✓ Desktop full page screenshot");

    // Desktop above-fold
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-hero.png"),
      fullPage: false,
    });
    console.log("✓ Desktop hero screenshot");

    // Mobile full page
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844 });
    await mobilePage.goto(`http://localhost:${PORT}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-full.png"),
      fullPage: true,
    });
    console.log("✓ Mobile full page screenshot");

    // Mobile above-fold
    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-hero.png"),
      fullPage: false,
    });
    console.log("✓ Mobile hero screenshot");

    // Section screenshots (desktop)
    const sections = [
      "science",
      "how-it-works",
      "courses",
      "applications",
      "facs",
      "curriculum",
      "testimonials",
      "faq",
      "enroll",
    ];

    for (const section of sections) {
      try {
        const el = await desktopPage.$(`#${section}`);
        if (el) {
          await el.screenshot({
            path: path.join(SCREENSHOTS_DIR, `section-${section}.png`),
          });
          console.log(`✓ Section: ${section}`);
        }
      } catch (err) {
        console.log(`✗ Section ${section}: ${err.message}`);
      }
    }

    await browser.close();
    console.log("\nAll screenshots saved to screenshots/");
  } finally {
    server.kill();
  }
}

takeScreenshots().catch(console.error);
