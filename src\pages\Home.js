import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function Home() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1>Home</h1>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={4} md={3} lg={2}>
            <Card>
              <Card.Img src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;