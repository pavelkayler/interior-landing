import { Container, Accordion } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./stages.css";

const steps = [
  {
    title: "1. Бриф",
    text: "Цели, стиль, бюджет, сроки. Фиксируем ТЗ и формат работы.",
  },
  {
    title: "2. Планировка",
    text: "Делаем 2–3 варианта, выбираем лучший и дорабатываем под сценарии жизни.",
  },
  {
    title: "3. Концепция",
    text: "Материалы, палитра, свет, настроение. Собираем общий образ.",
  },
  {
    title: "4. Визуализация",
    text: "Фотореалистичные рендеры, чтобы вы видели результат до ремонта.",
  },
  {
    title: "5. Чертежи",
    text: "Рабочая документация для строителей: планы, развертки, ведомости.",
  },
  {
    title: "6. Сопровождение (опционально)",
    text: "Комплектация и авторский надзор: контроль качества и соответствия проекту.",
  },
];

const Stages = () => {
  const ref = useRevealOnScroll();

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">процесс</div>
        <h2 className="sectionTitle">Этапы работы</h2>

        <Accordion defaultActiveKey="0" className="stagesAcc" alwaysOpen>
          {steps.map((s, i) => (
            <Accordion.Item eventKey={String(i)} key={s.title} className="stagesAcc__item">
              <Accordion.Header>{s.title}</Accordion.Header>
              <Accordion.Body className="stagesAcc__body">{s.text}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Stages;
