import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/ProductDetails.css";
import ReactStars from "react-rating-stars-component";

const Products = () => {
  const [products, setProducts] = useState([]);
  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return products?.length ? (
    <div class="container">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 p-4">
        {products.map((product) => (
          <Col>
            <Card key={product.id}>
              <Card.Img
                className="m-auto fixed-size mt-2"
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title className="h6 text-center">
                  {product.title.slice(0, 10)}
                </Card.Title>
                <ReactStars
                  classNames="m-auto"
                  size={30}
                  value={product.rating.rate}
                  edit={false}
                />
                <Card.Text
                  title={product.description}
                  className="text-secondary text-center"
                >
                  {product.description.slice(0, 100) + "....."}
                </Card.Text>
                <div className="text-center">
                  <Link to={`/products/${product.id}`}>
                    <Button variant="danger">Product Info</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <div class="center">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  );
};

export default Products;
