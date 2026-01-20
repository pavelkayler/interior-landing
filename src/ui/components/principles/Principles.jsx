import { Container, Row, Col } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./principles.css";

const items = [
  {
    title: "Планировка = удобство",
    text: "Сценарии жизни, хранение, логика проходов и приватности. Делаем так, чтобы каждый метр работал.",
  },
  {
    title: "Визуализация = атмосфера",
    text: "Свет, фактуры, настроение. Вы видите результат до начала ремонта — без сюрпризов.",
  },
  {
    title: "Чертежи = безопасность",
    text: "Точные планы и узлы для строителей. Минимум вопросов «на объекте», максимум предсказуемости.",
  },
  {
    title: "Бюджет = спокойствие",
    text: "Прозрачная смета и контроль расходов: вы понимаете, за что платите и где можно оптимизировать.",
  },
];

const Principles = () => {
  const ref = useRevealOnScroll();

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">ценности</div>
        <h2 className="sectionTitle">Наши принципы</h2>

        <Row className="g-3">
          {items.map((x) => (
            <Col md={6} key={x.title}>
              <div className="principleCard">
                <div className="principleCard__title">{x.title}</div>
                <div className="principleCard__text">{x.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Principles;
