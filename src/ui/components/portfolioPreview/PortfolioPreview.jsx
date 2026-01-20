import { useMemo, useState } from "react";
import { Container, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import { portfolioUrls } from "../../../core/assets/placeholders.js";
import "./portfolioPreview.css";

const projectsSeed = [
  { title: "Кухня-гостиная", subtitle: "Современный минимализм" },
  { title: "Спальня", subtitle: "Мягкий монохром" },
  { title: "Санузел", subtitle: "Камень и свет" },
  { title: "Прихожая", subtitle: "Функциональность" },
  { title: "Детская", subtitle: "Тепло и порядок" },
  { title: "Кабинет", subtitle: "Работа и тишина" },
];

const PortfolioPreview = () => {
  const ref = useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const projects = useMemo(() => {
    return projectsSeed.map((p, i) => ({
      ...p,
      img: portfolioUrls[i]?.img,
      thumb: portfolioUrls[i]?.thumb,
    }));
  }, []);

  const onOpen = (i) => {
    setActiveIndex(i);
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">проекты</div>
        <div className="portfolioHead">
          <h2 className="sectionTitle portfolioHead__title">Портфолио</h2>
          <div className="portfolioHead__actions">
            <Button variant="outline-light" className="portfolioHead__btn" href="/portfolio">
              Смотреть все
            </Button>
          </div>
        </div>

        <Row className="g-3">
          {projects.map((p, i) => (
            <Col md={6} lg={4} key={i}>
              <button className="projectCard" onClick={() => onOpen(i)}>
                <div className="projectCard__media" style={{ backgroundImage: `url(${p.thumb})` }} />
                <div className="projectCard__body">
                  <div className="projectCard__title">{p.title}</div>
                  <div className="projectCard__subtitle">{p.subtitle}</div>
                </div>
              </button>
            </Col>
          ))}
        </Row>
      </div>

      <Modal show={open} onHide={onClose} centered size="lg" contentClassName="portfolioModal" backdropClassName="portfolioModal__backdrop">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="portfolioModal__title">
            {projects[activeIndex]?.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)} interval={null} indicators>
            {projects.map((p, i) => (
              <Carousel.Item key={i}>
                <div className="portfolioModal__img" style={{ backgroundImage: `url(${p.img})` }} />
                <Carousel.Caption className="portfolioModal__caption">
                  <div className="portfolioModal__captionTitle">{p.subtitle}</div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-light" className="portfolioModal__btn" onClick={onClose}>
            Закрыть
          </Button>
          <Button variant="light" className="portfolioModal__btn" href="/portfolio">
            Все проекты
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PortfolioPreview;
