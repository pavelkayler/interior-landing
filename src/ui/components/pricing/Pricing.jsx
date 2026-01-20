import { Container, Row, Col, Button } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./pricing.css";

const plans = [
  {
    name: "Консультация",
    price: "0 ₽",
    desc: "15 минут: задача, стиль, бюджет, сроки. План действий после созвона.",
    points: ["Бриф", "Оценка бюджета", "Рекомендации"],
    primary: true,
  },
  {
    name: "Проект",
    price: "от 2 500 ₽/м²",
    desc: "Планировка, визуализация и пакет чертежей для ремонта без сюрпризов.",
    points: ["Планировка", "Визуализация", "Чертежи"],
  },
  {
    name: "Проверка",
    price: "от 7 900 ₽",
    desc: "Аудит вашего проекта: ошибки, бюджет, сценарии, советы по улучшению.",
    points: ["Разбор", "Смета", "План улучшений"],
  },
];

const Pricing = ({ onOpenConsult }) => {
  const ref = useRevealOnScroll();

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">тарифы</div>
        <h2 className="sectionTitle">Стоимость</h2>

        <Row className="g-3">
          {plans.map((p, i) => (
            <Col lg={4} key={i}>
              <div className={`priceCard ${p.primary ? "priceCard--primary" : ""}`}>
                <div className="priceCard__top">
                  <div className="priceCard__name">{p.name}</div>
                  <div className="priceCard__price">{p.price}</div>
                </div>

                <div className="priceCard__desc">{p.desc}</div>

                <ul className="priceCard__list">
                  {p.points.map((x) => (
                    <li key={x} className="priceCard__item">
                      <span className="priceCard__dot" />
                      {x}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={p.primary ? "light" : "outline-light"}
                  className="priceCard__btn"
                  onClick={onOpenConsult}
                >
                  Обсудить
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Pricing;
