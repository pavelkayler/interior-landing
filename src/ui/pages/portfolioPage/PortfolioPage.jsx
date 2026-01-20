import { useMemo, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ContactModal from "../../components/contactModal/ContactModal.jsx";
import "./portfolioPage.css";

const PortfolioPage = () => {
  const [open, setOpen] = useState(false);
  const onOpenConsult = useMemo(() => () => setOpen(true), []);
  const onCloseConsult = useMemo(() => () => setOpen(false), []);

  return (
    <>
      <Header onOpenConsult={onOpenConsult} />

      <Container className="section portfolioPage__container">
        <div className="sectionKicker">страница</div>
        <h1 className="sectionTitle">Портфолио</h1>

        <div className="block">
          <p className="sectionText">
            Пока здесь заглушка. Эту страницу будем наполнять позже: фильтры,
            категории и полноценные кейсы.
          </p>

          <div className="portfolioPage__spacer" />

          <div className="portfolioPage__actions">
            <Button variant="outline-light" as={Link} to="/">
              На главную
            </Button>
            <Button variant="light" onClick={onOpenConsult}>
              Обсудить проект
            </Button>
          </div>
        </div>
      </Container>

      <section id="contacts" className="section section--footer">
        <Footer />
      </section>

      <ContactModal show={open} onHide={onCloseConsult} />
    </>
  );
};

export default PortfolioPage;
