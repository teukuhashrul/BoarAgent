import React, { Fragment, Component } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./Gallery.css";
import Card from "../components/Card";

const product = [
  {
    id: 1,
    name: "product-1",
    image: "https://via.placeholder.com/250",
    category_id: 1
  },
  {
    id: 2,
    name: "product-2",
    image: "https://via.placeholder.com/250",
    category_id: 2
  },
  {
    id: 3,
    name: "product-3",
    image: "https://via.placeholder.com/250",
    category_id: 3
  },
  {
    id: 4,
    name: "product-4",
    image: "https://via.placeholder.com/250",
    category_id: 1
  },
  {
    id: 5,
    name: "product-5",
    image: "https://via.placeholder.com/250",
    category_id: 2
  },
  {
    id: 6,
    name: "product-6",
    image: "https://via.placeholder.com/250",
    category_id: 3
  },
  {
    id: 7,
    name: "product-7",
    image: "https://via.placeholder.com/250",
    category_id: 1
  },
  {
    id: 8,
    name: "product-8",
    image: "https://via.placeholder.com/250",
    category_id: 2
  }
];
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product,
      visible: 7
    };
  }

  render() {
    return (
      <Fragment>
        <div className="hone-container">
          <div className=" no-padding">
            <Row>
              <Image
                md={12}
                lg={12}
                xs={12}
                className="img-fluid"
                src="https://via.placeholder.com/1900x400"
              />
            </Row>
          </div>
          <Container className="my-5">
            <Row>
              {/*looping product from card*/}
              <Card visible={this.state.visible} product={this.state.product} />

              {this.state.visible < this.state.product.length && (
                <Col lg={12} md={12} xs={12}>
                  <div className="d-flex justify-content-center" />
                </Col>
              )}
            </Row>

            <Row className="mt-5">
              <Image
                md={12}
                lg={12}
                xs={12}
                className="img-fluid"
                src="https://via.placeholder.com/1200x400"
              />
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
