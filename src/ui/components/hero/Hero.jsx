import { Button, Container } from "react-bootstrap";
import { img, media001 } from "../../../core/assets/media001.js";
import { tg } from "../../../core/utils/tg.js";
import "./hero.css";

const Hero = () => {
  const heroImage = media001[11];

  return (
    <div className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${img(heroImage)})` }} />
      <div className="hero__overlay" />

      <Container className="hero__content">
        <div className="hero__text">
          <div className="hero__line" />
          <h1 className="hero__title">ДИЗАЙН ИНТЕРЬЕРА</h1>
          <p className="hero__subtitle">
            Я не создаю дизайн-проект.
            <br />Я создаю для вас новый образ жизни
          </p>
          <Button
            variant="outline-light"
            className="hero__cta"
            as="a"
            href={tg("Хочу обсудить дизайн-проект")}
            target="_blank"
            rel="noreferrer"
          >
            ОБСУДИТЬ ПРОЕКТ
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
