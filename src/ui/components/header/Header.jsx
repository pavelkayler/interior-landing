import { useEffect, useMemo, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const navItems = [
  { id: "about", label: "О нас" },
  { id: "portfolio", label: "Портфолио" },
  { id: "photos", label: "Реализации" },
  { id: "principles", label: "Принципы" },
  { id: "stages", label: "Этапы" },
  { id: "pricing", label: "Тарифы" },
  { id: "feedback", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = ({ onOpenConsult }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("about");

  const onBrandClick = useMemo(() => () => scrollToId("hero"), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...navItems.map((x) => x.id)];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.15, 0.25, 0.35],
      }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`appHeader ${scrolled ? "appHeader--scrolled" : ""}`}
      fixed="top"
    >
      <Container className="appHeader__inner">
        <Navbar.Brand className="appHeader__brand" onClick={onBrandClick}>
          DEMIDOVA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="appHeader__toggle" />

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto appHeader__nav">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                className={`appHeader__link ${
                  activeId === item.id ? "appHeader__link--active" : ""
                }`}
                onClick={() => scrollToId(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="appHeader__actions">
            <Link className="appHeader__portfolioLink" to="/portfolio">
              Все проекты
            </Link>

            <Button
              variant="outline-light"
              className="appHeader__cta"
              onClick={onOpenConsult}
            >
              Обсудить проект
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
