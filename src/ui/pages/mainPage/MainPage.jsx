import { useMemo, useState } from "react";
import Header from "../../components/header/Header.jsx";
import Hero from "../../components/hero/Hero.jsx";
import About from "../../components/about/About.jsx";
import PortfolioPreview from "../../components/portfolioPreview/PortfolioPreview.jsx";
import Photos from "../../components/photos/Photos.jsx";
import Principles from "../../components/principles/Principles.jsx";
import Stages from "../../components/stages/Stages.jsx";
import Pricing from "../../components/pricing/Pricing.jsx";
import BeforeAfter from "../../components/beforeAfter/BeforeAfter.jsx";
import Feedback from "../../components/feedback/Feedback.jsx";
import OtherServices from "../../components/otherServices/OtherServices.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ContactModal from "../../components/contactModal/ContactModal.jsx";

const MainPage = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const onOpenConsult = useMemo(() => () => setIsConsultOpen(true), []);
  const onCloseConsult = useMemo(() => () => setIsConsultOpen(false), []);

  return (
    <>
      <Header onOpenConsult={onOpenConsult} />

      <section id="hero">
        <Hero onOpenConsult={onOpenConsult} />
      </section>

      <section id="about" className="section">
        <About onOpenConsult={onOpenConsult} />
      </section>

      <section id="portfolio" className="section">
        <PortfolioPreview />
      </section>

      <section id="photos" className="section">
        <Photos />
      </section>

      <section id="principles" className="section">
        <Principles />
      </section>

      <section id="stages" className="section">
        <Stages />
      </section>

      <section id="pricing" className="section">
        <Pricing onOpenConsult={onOpenConsult} />
      </section>

      <section id="beforeAfter" className="section">
        <BeforeAfter />
      </section>

      <section id="feedback" className="section">
        <Feedback />
      </section>

      <section id="otherServices" className="section">
        <OtherServices onOpenConsult={onOpenConsult} />
      </section>

      <section id="contacts" className="section section--footer">
        <Footer />
      </section>

      <ContactModal show={isConsultOpen} onHide={onCloseConsult} />
    </>
  );
};

export default MainPage;
