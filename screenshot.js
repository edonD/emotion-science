const puppeteer = require("puppeteer");
const { execSync, spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const SCREENSHOTS_DIR = path.join(__dirname, "screenshots");
const WEBSITE_DIR = path.join(__dirname, "website");
const PORT = 3077;

async function waitForServer(url, timeout = 60000) {
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

async function forceAllVisible(page) {
  // Inject CSS that overrides framer-motion's opacity:0 initial states
  await page.addStyleTag({
    content: `
      [style*="opacity: 0"], [style*="opacity:0"] {
        opacity: 1 !important;
        transform: none !important;
      }
    `,
  });
  // Also force via JS - find all elements with opacity 0 and make them visible
  await page.evaluate(() => {
    document.querySelectorAll("*").forEach((el) => {
      const style = window.getComputedStyle(el);
      if (parseFloat(style.opacity) < 0.1) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
  });
  await new Promise((r) => setTimeout(r, 500));
}

async function autoScroll(page) {
  // Wait for React hydration
  await new Promise((r) => setTimeout(r, 3000));

  // Slow scroll to trigger IntersectionObserver
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200); // Slower scroll for IntersectionObserver
    });
  });

  // Wait for animations to finish
  await new Promise((r) => setTimeout(r, 2000));

  // Force any remaining hidden elements visible
  await forceAllVisible(page);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));
}

async function takeScreenshots() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  // Build first
  console.log("Building...");
  try {
    execSync("npx next build", { cwd: WEBSITE_DIR, stdio: "pipe" });
  } catch {
    console.log("Build issue, continuing...");
  }

  // Start server
  console.log("Starting Next.js server...");
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: WEBSITE_DIR,
    stdio: "pipe",
    env: { ...process.env },
  });

  try {
    await waitForServer(`http://localhost:${PORT}`);
    console.log("Server ready!");

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    // Desktop
    const desktopPage = await browser.newPage();
    await desktopPage.setViewport({ width: 1920, height: 1080 });
    await desktopPage.goto(`http://localhost:${PORT}`, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    // Scroll through entire page to trigger all animations
    await autoScroll(desktopPage);

    // Hero (above fold)
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-hero.png"),
      fullPage: false,
    });
    console.log("✓ Desktop hero screenshot");

    // Full page
    await desktopPage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "desktop-full.png"),
      fullPage: true,
    });
    console.log("✓ Desktop full page screenshot");

    // Section screenshots
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
        } else {
          console.log(`✗ Section ${section}: element not found`);
        }
      } catch (err) {
        console.log(`✗ Section ${section}: ${err.message}`);
      }
    }

    // Mobile
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844 });
    await mobilePage.goto(`http://localhost:${PORT}`, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await autoScroll(mobilePage);

    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-hero.png"),
      fullPage: false,
    });
    console.log("✓ Mobile hero screenshot");

    await mobilePage.screenshot({
      path: path.join(SCREENSHOTS_DIR, "mobile-full.png"),
      fullPage: true,
    });
    console.log("✓ Mobile full page screenshot");

    await browser.close();
    console.log("\nAll screenshots saved to screenshots/");
  } finally {
    server.kill();
  }
}

takeScreenshots().catch(console.error);
