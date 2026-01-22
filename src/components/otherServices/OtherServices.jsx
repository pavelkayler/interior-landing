import { Accordion, Container, Button } from "react-bootstrap";
import { tg } from "../../utils/tg.js";
import "./otherServices.css";

const services = [
  {
    title: "ПЛАНИРОВОЧНОЕ РЕШЕНИЕ",
    price: "от 2 500 ₽ за м2",
    desc: "Планировка под ваш сценарий жизни, функциональные зоны и варианты расстановки мебели.",
  },
  {
    title: "ДИЗАЙН-ПРОЕКТ",
    price: "от 8 500 ₽ за м2",
    desc: "Полный пакет дизайн-проекта, от концепции до рабочей документации и подборов.",
  },
  {
    title: "КОНСУЛЬТАЦИЯ ПО ДИЗАЙНУ БЕЗ РАЗРАБОТКИ ПРОЕКТА",
    price: "от 40 000 ₽",
    desc: "Разбор планировки, подбор материалов и ответы на вопросы без создания полного проекта.",
  },
  {
    title: "КОНСУЛЬТАЦИЯ ПО ВЫБОРУ КВАРТИРЫ ДО ЕЕ ПОКУПКИ",
    price: "от 55 000 ₽",
    desc: "Оценка планировки, потенциала объекта, рисков перепланировки и бюджета будущего ремонта.",
  },
];

const OtherServices = () => {
  return (
    <Container className="otherServices">
      <div className="otherServices__head">
        <h2 className="otherServices__title">СТОИМОСТЬ</h2>
        <p className="otherServices__subtitle">
          Точные цены рассчитываются после брифа. Ниже — ориентиры по ключевым услугам.
        </p>
      </div>

      <Accordion className="otherServices__list" flush>
        {services.map((service, index) => (
          <Accordion.Item eventKey={String(index)} key={service.title}>
            <Accordion.Header>
              <div className="otherServices__row">
                <span className="otherServices__name">{service.title}</span>
                <span className="otherServices__price">{service.price}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p className="otherServices__desc">{service.desc}</p>
              <Button
                className="otherServices__btn"
                as="a"
                href={tg(`Интересует услуга ${service.title}`)}
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default OtherServices;
