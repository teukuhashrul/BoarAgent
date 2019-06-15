import React, { Component, Fragment } from "react";
import "./datapesawat.css";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

class ProductItemCart extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      clicks: this.props.quantity,
      show: true,
      lihat: false
    };
  }
  handleClose() {
    this.setState({ lihat: false });
  }

  handleShow() {
    this.setState({ lihat: true });
  }

  ToggleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      //biar keliatan aja
      <Fragment>
        <Row>
          <Col>
            <h1 className="namamaskapai"> {this.props.maskapai}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <img src={require("../Pages/images/logo.png")} width="50%" />
          </Col>
          <Col xs={4}>
            <h1 className="berangkat">{this.props.berangkat}</h1>
          </Col>
          <Col xs={2}>
            <h1 className="durasi">{this.props.durasi}</h1>
          </Col>
          <Col xs={2}>
            <h1 className="sampai">{this.props.sampai}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h1 className="detail">Details</h1>
          </Col>
          <Col xs={2}>
            <h1 className="harga">Rp {this.props.harga}</h1>
            <h1 className="paket">/pax</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="pilihh" variant="warning">
              Add to Wishlist
            </Button>
          </Col>

          <Col>
            <Button className="pilih" variant="warning">
              Pilih
            </Button>
          </Col>
        </Row>
        <div className="batasbawah" />
      </Fragment>
    );
  }
}

export default ProductItemCart;
