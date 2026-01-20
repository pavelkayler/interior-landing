import { Container, Button } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./hero.css";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = ({ onOpenConsult }) => {
  const headRef = useRevealOnScroll({ rootMargin: "0px 0px -20% 0px", threshold: 0.12 });
  const valuesRef = useRevealOnScroll({ rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  return (
    <div className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <Container className="hero__container">
        <div ref={headRef} className="hero__head">
          <div className="hero__kicker">СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРОВ</div>

          <h1 className="hero__title">ДИЗАЙН ИНТЕРЬЕРА</h1>

          <p className="hero__subtitle">
            Я не создаю дизайн-проект, я создаю ощущения
            <br />
            комфорта и спокойствия в доме.
          </p>

          <div className="hero__cta">
            <Button
              variant="outline-light"
              className="hero__btn"
              onClick={onOpenConsult}
            >
              Обсудить проект
            </Button>
          </div>

          <button
            type="button"
            className="hero__down"
            aria-label="Прокрутить к разделу О нас"
            onClick={() => scrollToId("about")}
          >
            ↓
          </button>
        </div>

        <div ref={valuesRef} className="heroValues">
          <div className="heroValues__item">
            <div className="heroValues__label">Планировка</div>
            <div className="heroValues__value">удобство</div>
          </div>
          <div className="heroValues__item">
            <div className="heroValues__label">Визуализация</div>
            <div className="heroValues__value">атмосфера</div>
          </div>
          <div className="heroValues__item">
            <div className="heroValues__label">Чертежи</div>
            <div className="heroValues__value">безопасность</div>
          </div>
          <div className="heroValues__item">
            <div className="heroValues__label">Бюджет</div>
            <div className="heroValues__value">спокойствие</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
