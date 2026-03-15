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
        <hr className="section-divider" />
        <HowItWorks />
        <hr className="section-divider" />
        <Courses />
        <hr className="section-divider" />
        <Applications />
        <hr className="section-divider" />
        <FACSSection />
        <hr className="section-divider" />
        <Curriculum />
        <hr className="section-divider" />
        <SocialProof />
        <hr className="section-divider" />
        <FAQ />
        <hr className="section-divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
