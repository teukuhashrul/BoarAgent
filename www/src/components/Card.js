import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

class Card extends Component {
  render() {
    let { product } = this.props;
    let { visible } = this.props;

    return product.slice(0, visible).map(product => (
      <Col
        key={product.name}
        lg={3}
        md={3}
        xs={3}
        className={"gallery-img " + product.category_id + " mb-2"}
      >
        <Link to="#">
          <GalleryItem
            src={product.image}
            // className="gallery-carousel-item-large"
            alt={product.name}
            testimony={product.name}
          />
        </Link>
      </Col>
    ));
  }
}

export default Card;
