import { Container, Row, Col, Button } from "react-bootstrap";
import { tg } from "../../utils/tg.js";
import "./pricing.css";

const plans = [
  {
    name: "Концептуальный дизайн-проект",
    price: "4 000",
    details: [
      { text: "Планировочные решения" },
      { text: "Концепция интерьера" },
      { text: "2-3 коллажа" },
      { text: "Ведомость материалов", muted: true },
      { text: "Рабочая документация", muted: true },
    ],
  },
  {
    name: "Полный дизайн-проект",
    price: "6 500",
    details: [
      { text: "Планировочные решения" },
      { text: "Концепция + 3D" },
      { text: "Полный комплект чертежей" },
      { text: "Ведомость материалов" },
      { text: "Авторский надзор", muted: true },
    ],
  },
  {
    name: "Премиум дизайн-проект",
    price: "10 000",
    details: [
      { text: "Расширенный комплект чертежей" },
      { text: "3D всех помещений" },
      { text: "Ведомость материалов" },
      { text: "Авторский надзор" },
      { text: "Комплектация", muted: true },
    ],
  },
];

const Pricing = () => {
  return (
    <Container className="packages">
      <div className="packages__head">
        <h2 className="packages__title">Услуги и цены:</h2>
        <p className="packages__note">
          Полный спектр услуг в области проектирования дизайна интерьера
        </p>
      </div>

      <Row className="g-4">
        {plans.map((plan) => (
          <Col lg={4} key={plan.name}>
            <div className="packages__card">
              <h3 className="packages__name">{plan.name}</h3>
              <div className="packages__subtitle">Наполнение тарифа:</div>
              <ul className="packages__list">
                {plan.details.map((item) => (
                  <li
                    key={item.text}
                    className={`packages__item ${item.muted ? "packages__item--muted" : ""}`}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="packages__priceRow">
                <span>Стоимость:</span>
                <div className="packages__price">{plan.price} руб/м²</div>
              </div>
              <Button
                className="packages__btn"
                as="a"
                href={tg(`Хочу узнать подробнее про тариф ${plan.name}`)}
                target="_blank"
                rel="noreferrer"
              >
                Узнать подробнее
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
