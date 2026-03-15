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
        {/* Tinted section band for visual variety */}
        <div className="bg-[#f5f5f2]">
          <hr className="section-divider" />
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
        <hr className="section-divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
