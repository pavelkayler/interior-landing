import { useMemo, useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { img, media001 } from "../../assets/media001.js";
import "./portfolioPreview.css";

const PortfolioPreview = () => {
  const items = useMemo(() => media001.slice(12, 15), []);
  const [activeIndex, setActiveIndex] = useState(null);

  const onClose = () => setActiveIndex(null);

  return (
    <Container>
      <div className="portfolio">
        <h2 className="portfolio__title">Портфолио — проекты (визуализации)</h2>
        <Row className="g-4">
          {items.map((name, index) => (
            <Col lg={4} key={name}>
              <Card className="portfolio__card" onClick={() => setActiveIndex(index)}>
                <div
                  className="portfolio__image"
                  style={{ backgroundImage: `url(${img(name)})` }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal show={activeIndex !== null} onHide={onClose} centered size="lg">
        <Modal.Body className="portfolio__modalBody">
          {activeIndex !== null && (
            <img
              className="portfolio__modalImage"
              src={img(items[activeIndex])}
              alt="Проект"
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PortfolioPreview;
