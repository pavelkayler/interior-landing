import { useMemo, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import useActiveSection from "../../hooks/useActiveSection.js";
import "./header.css";

const navItems = [
  { id: "about", label: "О БЮРО" },
  { id: "packages", label: "УСЛУГИ И ЦЕНЫ" },
  { id: "portfolio", label: "ПРОЕКТЫ" },
  { id: "photos", label: "ФОТО" },
  { id: "other", label: "СМИ" },
  { id: "contacts", label: "КОНТАКТЫ" },
];

const Header = ({ onNavigate }) => {
  const sectionIds = useMemo(
    () => [
      "hero",
      "about",
      "portfolio",
      "principles",
      "stages",
      "packages",
      "photos",
      "other",
      "contacts",
    ],
    []
  );
  const activeId = useActiveSection(sectionIds);
  const [expanded, setExpanded] = useState(false);
  const isDark = ["hero", "photos", "contacts"].includes(activeId);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const target = document.querySelector(`#${id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded(false);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`appHeader ${isDark ? "appHeader--dark" : "appHeader--light"}`}
    >
      <Container className="appHeader__inner">
        <Navbar.Brand
          className="appHeader__brand"
          href="#hero"
          onClick={(event) => handleNavClick(event, "hero")}
        >
          DEMIDOVA
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          className="appHeader__toggle"
          onClick={() => setExpanded((prev) => !prev)}
        />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto appHeader__nav">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                className={`appHeader__link ${
                  activeId === item.id ? "appHeader__link--active" : ""
                }`}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
