import { Container, Row, Col } from "react-bootstrap";
import { img, media001 } from "../../../core/assets/media001.js";
import { tg } from "../../../core/utils/tg.js";
import "./about.css";

const About = () => {
  return (
    <Container className="about">
      <Row className="align-items-start g-4">
        <Col lg={6} className="about__left">
          <div className="about__header">
            <h2 className="about__title">Обо мне</h2>
            <div className="about__line" />
          </div>
          <p className="about__text">
            Я — дизайнер интерьеров с фокусом на гармоничную архитектуру
            пространства, свет и сценарии жизни. Моя задача — создавать интерьеры,
            в которых хочется жить, отдыхать и вдохновляться каждый день.
          </p>
          <p className="about__text">
            Работаю с частными и коммерческими проектами, подбираю материалы,
            создаю эстетичную и практичную основу для реализации, чтобы ремонт
            проходил уверенно и предсказуемо.
          </p>
          <p className="about__text">
            Для меня важны детали, пропорции и атмосфера. Каждый проект — это
            индивидуальный образ жизни, а не просто набор решений.
          </p>

          <div className="about__footer">
            <div className="about__socials">
              {[
                "TG",
                "IG",
                "FB",
                "PI",
              ].map((label) => (
                <a
                  key={label}
                  className="about__social"
                  href={tg("Хочу узнать подробнее о студии")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
            <img
              className="about__signature"
              src={img(media001[2])}
              alt="Подпись"
            />
          </div>
        </Col>
        <Col lg={6} className="about__right">
          <div className="about__photoWrap">
            <img
              className="about__photo"
              src={img(media001[9])}
              alt="Екатерина Иларионова"
            />
            <div className="about__note">
              Екатерина Иларионова
              <br />ведущий дизайнер, основатель
              <br />студии FORMIGO group
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
