import { useMemo, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ContactModal from "../../components/contactModal/ContactModal.jsx";
import "./portfolioPage.css";

const PortfolioPage = () => {
  const [open, setOpen] = useState(false);
  const onOpenConsult = useMemo(() => () => setOpen(true), []);
  const onCloseConsult = useMemo(() => () => setOpen(false), []);

  const features = [
    {
      title: "Каталог проектов",
      text: "Соберем кейсы в удобную ленту с быстрым просмотром и деталями.",
    },
    {
      title: "Фильтры и стили",
      text: "Добавим сортировку по площади, бюджету, стилю и комнатам.",
    },
    {
      title: "Разбор решений",
      text: "Покажем ключевые узлы, материалы и смету по каждому проекту.",
    },
  ];

  return (
    <>
      <Header onOpenConsult={onOpenConsult} />

      <Container className="section portfolioPage__container">
        <div className="sectionKicker">страница</div>
        <h1 className="sectionTitle">Портфолио</h1>

        <div className="portfolioPage__lead block">
          <p className="sectionText">
            Здесь скоро появятся реальные кейсы, планы и визуализации. Сейчас —
            удобная заглушка, чтобы не потеряться и быстро связаться.
          </p>
          <div className="portfolioPage__actions">
            <Button variant="outline-light" as={Link} to="/">
              На главную
            </Button>
            <Button variant="light" onClick={onOpenConsult}>
              Обсудить проект
            </Button>
          </div>
        </div>

        <Row className="g-3">
          {features.map((item) => (
            <Col md={4} key={item.title}>
              <Card className="portfolioPage__card">
                <Card.Body>
                  <Card.Title className="portfolioPage__cardTitle">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="sectionText">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section id="contacts" className="section section--footer">
        <Footer />
      </section>

      <ContactModal show={open} onHide={onCloseConsult} />
    </>
  );
};

export default PortfolioPage;
