import { useMemo, useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import { media001, url } from "../../../core/assets/media001.js";
import "./photos.css";

const Photos = () => {
  const ref = useRevealOnScroll();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const name = media001[i % media001.length];
      return {
        id: i,
        thumb: url(name),
        img: url(name),
        label: `Реализация #${i + 1}`,
      };
    });
  }, []);

  const onOpen = (i) => {
    setActiveIndex(i);
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">реализации</div>
        <h2 className="sectionTitle">Фото реализованных интерьеров</h2>

        <Row className="g-3">
          {items.map((x, i) => (
            <Col md={6} lg={4} key={x.id}>
              <button className="photoTile" onClick={() => onOpen(i)}>
                <div className="photoTile__media" style={{ backgroundImage: `url(${x.thumb})` }} />
                <div className="photoTile__cap">{x.label}</div>
              </button>
            </Col>
          ))}
        </Row>
      </div>

      <Modal show={open} onHide={onClose} centered size="lg" contentClassName="photoModal" backdropClassName="photoModal__backdrop">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="photoModal__title">{items[activeIndex]?.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)} interval={null}>
            {items.map((x) => (
              <Carousel.Item key={x.id}>
                <div className="photoModal__img" style={{ backgroundImage: `url(${x.img})` }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Photos;
