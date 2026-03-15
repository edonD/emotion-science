import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Science from "./components/Science";
import HowItWorks from "./components/HowItWorks";
import Courses from "./components/Courses";
import Applications from "./components/Applications";
import FACSSection from "./components/FACSSection";
import Curriculum from "./components/Curriculum";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Science />

        {/* Accent callout band */}
        <div className="bg-accent text-white py-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-wider opacity-60 mb-2">
                  THE BOTTOM LINE
                </p>
                <p className="text-xl md:text-2xl font-semibold">
                  Untrained humans detect micro-expressions at 47% accuracy.
                  <br className="hidden md:block" />
                  Our graduates average 89%.
                </p>
              </div>
              <a
                href="#how-it-works"
                className="shrink-0 bg-white text-accent px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>

        {/* Tinted section band for visual variety */}
        <div className="bg-[#f5f5f2]">
          <HowItWorks />
        </div>
        <hr className="section-divider" />
        <Courses />
        <div className="bg-[#f5f5f2]">
          <hr className="section-divider" />
          <Applications />
        </div>
        <hr className="section-divider" />
        <FACSSection />
        <div className="bg-[#f5f5f2]">
          <hr className="section-divider" />
          <Curriculum />
        </div>
        <hr className="section-divider" />
        <SocialProof />
        <div className="bg-[#f5f5f2]">
          <hr className="section-divider" />
          <FAQ />
        </div>
        {/* Second accent band */}
        <div className="bg-[#1a1a1a] text-white py-10">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
            <p className="font-mono text-xs tracking-wider opacity-40 mb-3">
              TRUSTED BY PROFESSIONALS
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm opacity-50">
              <span>Clinical Psychology</span>
              <span>Federal Law Enforcement</span>
              <span>Corporate HR</span>
              <span>Negotiation</span>
              <span>Healthcare</span>
              <span>Executive Coaching</span>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
