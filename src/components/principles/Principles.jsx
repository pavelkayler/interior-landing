import { Container, Row, Col, Card } from "react-bootstrap";
import "./principles.css";

const placeholders = [
  "Внимание к деталям",
  "Прозрачность процесса",
  "Сроки и ответственность",
  "Гармония и баланс",
];

const Principles = () => {
  return (
    <Container className="principles">
      <div className="principles__header">
        <h2 className="principles__title">Наши принципы</h2>
        <p className="principles__subtitle">
          Здесь будет описан подход студии к работе с проектами и клиентами.
        </p>
      </div>
      <Row className="g-4">
        {placeholders.map((label) => (
          <Col md={6} key={label}>
            <Card className="principles__card">
              <Card.Body>{label}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Principles;
