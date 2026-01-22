import { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Hero from "../../components/hero/Hero.jsx";
import About from "../../components/about/About.jsx";
import PortfolioPreview from "../../components/portfolioPreview/PortfolioPreview.jsx";
import Principles from "../../components/principles/Principles.jsx";
import Stages from "../../components/stages/Stages.jsx";
import Pricing from "../../components/pricing/Pricing.jsx";
import Photos from "../../components/photos/Photos.jsx";
import OtherServices from "../../components/otherServices/OtherServices.jsx";
import Footer from "../../components/footer/Footer.jsx";
import BackToTop from "../../components/backToTop/BackToTop.jsx";

const MainPage = () => {
  const [didNavigate, setDidNavigate] = useState(false);

  return (
    <>
      <Header onNavigate={() => setDidNavigate(true)} />

      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="section section--light">
        <About />
      </section>

      <section id="portfolio" className="section section--light">
        <PortfolioPreview />
      </section>

      <section id="principles" className="section section--light">
        <Principles />
      </section>

      <section id="stages" className="section section--muted">
        <Stages />
      </section>

      <section id="packages" className="section section--light">
        <Pricing />
      </section>

      <section id="photos" className="section section--gallery">
        <Photos />
      </section>

      <section id="other" className="section section--light">
        <OtherServices />
      </section>

      <section id="contacts" className="section section--footer">
        <Footer />
      </section>

      <BackToTop didNavigate={didNavigate} />
    </>
  );
};

export default MainPage;
