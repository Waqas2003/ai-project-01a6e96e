import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function ProductDetail({ match }) {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    axios.get(`/api/products/${match.params.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1>{product.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img src={product.image} />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;