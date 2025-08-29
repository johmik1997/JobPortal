import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function ContactPage() {
  return (
    <>
    <Header/>
    <Hero
  title="Get in Touch"
  subtitle="We’re here to help — reach out to us anytime!"
  bgImage={require("../img/contact-hero.jpeg")}
  showSearch={false}
/>


    <div className="bg-white">
      <ContactSection />
    </div>
      <Footer/>
    </>
  
  );
}
