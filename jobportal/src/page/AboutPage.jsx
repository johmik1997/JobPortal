import AboutSection from "../components/AboutSection";
import BestSection from "../components/BestSection";
import FAQAccordion from "../components/FAQAccordion";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function AboutPage() {
  return (
    <>
    <Header/>
    <Hero
  title="About TalentHub"
  subtitle="Learn more about our mission to connect talent with opportunities."
  bgImage={require("../img/about-hero.jpeg")}
  showSearch={false}
/>

    <div className="bg-white">
      <AboutSection />
      <HowItWorks />
      <FAQSection/>
      <BestSection/>
    </div>
    <Footer/>
    </>
  );
}

