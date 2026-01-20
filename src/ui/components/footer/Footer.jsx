import { Container, Row, Col } from "react-bootstrap";
import useRevealOnScroll from "../../../core/hooks/useRevealOnScroll.js";
import "./footer.css";

const Footer = () => {
  const ref = useRevealOnScroll();

  return (
    <Container>
      <div ref={ref}>
        <div className="sectionKicker">контакты</div>
        <h2 className="sectionTitle">Связаться</h2>

        <Row className="g-3">
          <Col lg={6}>
            <div className="footerCard">
              <div className="footerCard__row">
                <div className="footerCard__label">Телефон</div>
                <a className="footerCard__value" href="tel:+70000000000">
                  +7 (000) 000-00-00
                </a>
              </div>
              <div className="footerCard__row">
                <div className="footerCard__label">Telegram</div>
                <a className="footerCard__value" href="#">
                  @demidova_design
                </a>
              </div>
              <div className="footerCard__row">
                <div className="footerCard__label">Email</div>
                <a className="footerCard__value" href="mailto:hello@example.com">
                  hello@example.com
                </a>
              </div>
              <div className="footerCard__row">
                <div className="footerCard__label">Город</div>
                <div className="footerCard__value">Онлайн / офлайн</div>
              </div>

              <div className="footerNote">
                Напишите в Telegram — отвечаю быстрее всего.
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="footerCard">
              <div className="footerMeta">
                <div className="footerMeta__title">Реквизиты</div>
                <div className="footerMeta__text sectionText">
                  ИП Демидова • ОГРНИП / ИНН — добавишь позже.
                  <br />
                  Политика конфиденциальности — добавишь ссылкой в конце.
                </div>
              </div>

              <div className="footerNav">
                <a className="footerNav__link" href="#about">О нас</a>
                <a className="footerNav__link" href="#portfolio">Портфолио</a>
                <a className="footerNav__link" href="#pricing">Тарифы</a>
              </div>

              <div className="footerCopy">© DEMIDOVA, {new Date().getFullYear()}</div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
