import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { footerLinks } from '../config/navConfig';

export const Footer = () => {
  return (
    <footer className="footer" >
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 style={{ color: "white" }}>Portfolio</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {footerLinks.map((link, index) => {
                const IconComponent = link.Icon;
                return (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${index}`}>
                        {link.href}
                      </Tooltip>
                    }
                  >
                    <a key={index} href={link.href}>
                      <IconComponent style={{ color: "white" }} />
                    </a>
                  </OverlayTrigger>
                );
              })}
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
