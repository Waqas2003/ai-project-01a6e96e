import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12}>
            <p>Copyright 2023 Ecommerce Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;