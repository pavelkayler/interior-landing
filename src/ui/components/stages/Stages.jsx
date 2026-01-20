import { Container } from "react-bootstrap";
import "./stages.css";

const stages = [
  {
    title: "Знакомство и бриф",
    text: "Обсуждаем задачи, стиль и бюджет, формируем техническое задание.",
  },
  {
    title: "Планировочные решения",
    text: "Прорабатываем сценарии жизни, зонирование и эргономику.",
  },
  {
    title: "Концепция и материалы",
    text: "Создаем визуальный образ проекта, подбираем отделку и мебель.",
  },
  {
    title: "3D-визуализация",
    text: "Фиксируем атмосферу и детали, чтобы вы увидели будущий интерьер.",
  },
  {
    title: "Чертежи и спецификации",
    text: "Готовим рабочую документацию для строителей и смежных специалистов.",
  },
  {
    title: "Авторский надзор",
    text: "Контролируем соответствие реализации проекту на всех этапах.",
  },
  {
    title: "Реализация",
    text: "Сопровождаем комплектацию и финальный декор до сдачи объекта.",
  },
];

const Stages = () => {
  return (
    <Container className="stages">
      <h2 className="stages__title">Этапы работы</h2>
      <div className="stages__timeline">
        {stages.map((stage, index) => (
          <div
            key={stage.title}
            className={`stages__entry ${
              index % 2 === 0 ? "stages__entry--left" : "stages__entry--right"
            }`}
          >
            <div className="stages__dot" />
            <div className="stages__content">
              <h3 className="stages__entryTitle">{stage.title}</h3>
              <p className="stages__entryText">{stage.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Stages;
