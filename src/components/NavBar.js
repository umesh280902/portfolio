import { useState, useEffect } from "react";
import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { navLinks, socialLinks } from '../config/navConfig';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1 style={{ color: "white" }}>Portfolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map(link => (
                <Nav.Link
                  key={link.key}
                  href={link.href}
                  className={activeLink === link.key ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(link.key)}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.Icon;
                  return (
                    <OverlayTrigger
                      key={index}
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-${index}`}>
                          {link.href}
                        </Tooltip>
                      }
                    >
                      <a href={link.href} style={{ color: "white" }}>
                        <IconComponent />
                      </a>
                    </OverlayTrigger>
                  );
                })}
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
