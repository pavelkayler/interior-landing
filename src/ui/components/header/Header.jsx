import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";

const navItems = [
  { id: "about", label: "О БЮРО" },
  { id: "packages", label: "УСЛУГИ И ЦЕНЫ" },
  { id: "portfolio", label: "ПРОЕКТЫ" },
  { id: "photos", label: "ФОТО" },
  { id: "other", label: "СМИ" },
  { id: "contacts", label: "КОНТАКТЫ" },
];

const Header = () => {
  return (
    <Navbar expand="lg" className="appHeader">
      <Container className="appHeader__inner">
        <Navbar.Brand className="appHeader__brand" href="#hero">
          DEMIDOVA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="appHeader__toggle" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto appHeader__nav">
            {navItems.map((item) => (
              <Nav.Link key={item.id} className="appHeader__link" href={`#${item.id}`}>
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
