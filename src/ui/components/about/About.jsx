import { Container, Row, Col, Button } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import { media001, url } from "../../../core/assets/media001.js";
import "./about.css";

const facts = [
  { k: "Сроки", v: "от 7 дней" },
  { k: "Формат", v: "онлайн / офлайн" },
  { k: "Документы", v: "полный комплект" },
];

const About = ({ onOpenConsult }) => {
  const ref = useRevealOnScroll();

  const aboutImage = media001[1] ?? media001[0];

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">подход</div>
        <h2 className="sectionTitle">О нас</h2>

        <Row className="g-3 align-items-stretch">
          <Col lg={5}>
            <div className="aboutMedia" style={{ backgroundImage: `url(${url(aboutImage)})` }} />
          </Col>

          <Col lg={7}>
            <div className="aboutCard">
              <p className="aboutCard__lead">
                Делаю проект так, чтобы в процессе ремонта у вас было ощущение контроля, а в итоге —
                ощущение дома.
              </p>

              <p className="sectionText">
                Планировка, визуализация и рабочая документация — это не «пакет файлов», а гарантия,
                что идея получится именно такой, как вы её представляете.
              </p>

              <div className="aboutFacts">
                {facts.map((x) => (
                  <div key={x.k} className="aboutFacts__item">
                    <div className="aboutFacts__k">{x.k}</div>
                    <div className="aboutFacts__v">{x.v}</div>
                  </div>
                ))}
              </div>

              <div className="aboutCard__actions">
                <Button variant="outline-light" className="aboutCard__btn" onClick={onOpenConsult}>
                  Обсудить задачу
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
