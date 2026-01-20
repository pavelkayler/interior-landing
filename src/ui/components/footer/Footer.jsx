import { Container, Row, Col } from "react-bootstrap";
import { tg } from "../../../core/utils/tg.js";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer__top g-4">
          <Col md={3}>
            <div className="footer__title">Студия</div>
            <ul className="footer__list">
              <li>О бюро</li>
              <li>Команда</li>
              <li>Подход</li>
              <li>Карьера</li>
            </ul>
          </Col>
          <Col md={3}>
            <div className="footer__title">Услуги</div>
            <ul className="footer__list">
              <li>Дизайн-проекты</li>
              <li>Комплектация</li>
              <li>Авторский надзор</li>
              <li>Консультации</li>
            </ul>
          </Col>
          <Col md={3}>
            <div className="footer__title">Проекты</div>
            <ul className="footer__list">
              <li>Квартиры</li>
              <li>Дома</li>
              <li>Коммерция</li>
              <li>Журнал</li>
            </ul>
          </Col>
          <Col md={3}>
            <div className="footer__title">Держим связь</div>
            <div className="footer__contact">
              <a href={tg("Хочу связаться")}
                target="_blank"
                rel="noreferrer"
              >
                +7 (000) 000-00-00
              </a>
              <a href={tg("Хочу обсудить проект")}
                target="_blank"
                rel="noreferrer"
              >
                hello@demidova.ru
              </a>
              <span>Пн-Пт: 10:00 — 19:00</span>
            </div>
            <div className="footer__socials">
              {["TG", "IG", "FB", "BE"].map((label) => (
                <a
                  key={label}
                  className="footer__social"
                  href={tg("Хочу подписаться")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <div className="footer__mid">
          {["Главная", "О Бюро", "Портфолио", "Журнал", "Контакты"].map((label) => (
            <span key={label} className="footer__midItem">
              <span className="footer__arrow">→</span>
              {label}
            </span>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© DEMIDOVA, {new Date().getFullYear()}</span>
          <div className="footer__bottomLinks">
            <a href={tg("Согласие на обработку данных")}
              target="_blank"
              rel="noreferrer"
            >
              Согласие на обработку данных
            </a>
            <a href={tg("Политика конфиденциальности")}
              target="_blank"
              rel="noreferrer"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
