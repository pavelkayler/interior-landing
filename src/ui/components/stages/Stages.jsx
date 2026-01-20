import { Container, Row, Col, Card } from "react-bootstrap";
import { img, media001 } from "../../../core/assets/media001.js";
import "./stages.css";

const timeline = [
  "Бриф и техническое задание",
  "Планировочные решения",
  "Концепция и подбор материалов",
  "3D-визуализации",
  "Рабочая документация",
  "Авторский надзор",
];

const list = [
  "Знакомство и анализ задачи",
  "Сценарии жизни и планировка",
  "План электрики и инженерии",
  "Концептуальные коллажи",
  "Визуализация ключевых зон",
  "Подготовка проекта к реализации",
];

const Stages = () => {
  return (
    <Container className="stages">
      <h2 className="stages__title">Этапы работы</h2>
      <Row className="g-4">
        <Col lg={6}>
          <Card className="stages__card stages__card--light">
            <Card.Body>
              <h3 className="stages__cardTitle">
                КАК МЫ СОЗДАЕМ
                <br />ИДЕАЛЬНЫЕ ПРОЕКТЫ
              </h3>
              <ul className="stages__list">
                {list.map((item) => (
                  <li key={item} className="stages__item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="stages__illustration">
                <img src={img(media001[3])} alt="Декор" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="stages__card stages__card--dark">
            <Card.Body>
              <div className="stages__timeline">
                {timeline.map((item, index) => (
                  <div key={item} className="stages__step">
                    <div className="stages__dot" />
                    <div
                      className={`stages__stepText ${index % 2 === 0 ? "" : "stages__stepText--right"}`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Stages;
