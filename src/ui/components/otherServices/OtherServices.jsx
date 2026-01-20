import { Container, Row, Col, Button } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./otherServices.css";

const services = [
  { title: "Консультация", text: "Быстрый разбор задачи, бюджета и рисков." },
  { title: "Планировочное решение", text: "Варианты планировки под ваш сценарий жизни." },
  { title: "Подбор материалов", text: "Фактуры, свет, мебель, отделка — под стиль и бюджет." },
  { title: "Комплектация", text: "Подбор и заказ позиций, контроль сроков и замен." },
  { title: "Авторский надзор", text: "Контроль реализации и соответствия проекту." },
];

const OtherServices = ({ onOpenConsult }) => {
  const ref = useRevealOnScroll();

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">дополнительно</div>
        <h2 className="sectionTitle">Прочие услуги</h2>

        <Row className="g-3">
          {services.map((s) => (
            <Col md={6} lg={4} key={s.title}>
              <div className="osCard">
                <div className="osCard__title">{s.title}</div>
                <div className="osCard__text">{s.text}</div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="osActions">
          <Button variant="outline-light" className="osActions__btn" onClick={onOpenConsult}>
            Узнать стоимость
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default OtherServices;
