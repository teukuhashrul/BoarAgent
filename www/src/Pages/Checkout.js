import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  Image
} from "react-bootstrap";

import "./Checkout.css";
import { withRouter } from "react-router-dom";

const midtransClient = require("midtrans-client");
// Create Snap API instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-8gxP9I8OPoWiGw0NJg2R3bdRY",
  clientKey: "SB-Mid-client-XRt4tcImqIkvp98P"
});

let parameter = {
  transaction_details: {
    order_id: "test-transaction-123",
    gross_amount: 200000
  },
  credit_card: {
    secure: true
  }
};

let trans = snap.createTransaction(parameter).then(transaction => {
  // transaction token
  let transactionToken = transaction.token;
});

snap.createTransaction(parameter).then(transaction => {
  // transaction redirect_url
  let redirectUrl = transaction.redirect_url;
  console.log("redirectUrl:", redirectUrl);
});

function pilih2() {
  document.getElementById("pay-button").onclick = function() {
    // SnapToken acquired from previous step
    snap.pay(trans, {
      // Optional
      onSuccess: function(result) {
        /* You may add your own js here, this is just example */ document.getElementById(
          "result-json"
        ).innerHTML += JSON.stringify(result, null, 2);
      },
      // Optional
      onPending: function(result) {
        /* You may add your own js here, this is just example */ document.getElementById(
          "result-json"
        ).innerHTML += JSON.stringify(result, null, 2);
      },
      // Optional
      onError: function(result) {
        /* You may add your own js here, this is just example */ document.getElementById(
          "result-json"
        ).innerHTML += JSON.stringify(result, null, 2);
      }
    });
  };
}

// alternative way to create transactionToken
// snap.createTransactionToken(parameter)
//     .then((transactionToken)=>{
//         console.log('transactionToken:',transactionToken);
//     })
class Checkout extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container className="bg">
        <Row>
          <Col>
            <h2>Checkout</h2>
            <Card className="checkout-card">
              <h2 className="detailnya">Detail Pemesanan</h2>
              <Form className="formnya">
                <Form.Group controlId="registerName" className="text-left">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="name" className="batasisi" />
                </Form.Group>

                <Form.Group controlId="registerEmail" className="text-left">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" className="batasisi" />
                </Form.Group>
                <Form.Group controlId="registerEmail" className="text-left">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" className="batasisi" />
                </Form.Group>
              </Form>
            </Card>
            <div className="batasbawah" />
            <Card className="checkout-card">
              <h2 className="detailnya">Detail Penumpang</h2>
              <Form className="formnya">
                <Form.Group controlId="registerName" className="text-left">
                  <Form.Group controlId="registerEmail" className="text-left">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" className="batasisi" />
                  </Form.Group>
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="name" className="batasisi" />
                </Form.Group>

                <Form.Group controlId="registerEmail" className="text-left">
                  <Form.Label>No Identitas</Form.Label>
                  <Form.Control type="number" className="batasisi" />
                </Form.Group>
              </Form>
            </Card>
            <div className="batasbawah" />
            <Card className="checkout-card">
              <h2 className="detailnya">Bagasi</h2>
              <Form className="formnya">
                <Form.Group controlId="registerName" className="text-left">
                  <Form.Label>Jumlah</Form.Label>
                  <Form.Control type="name" className="batasisi2" />
                  <h2>Kg</h2>
                </Form.Group>
              </Form>
            </Card>
            <button id="pay-button">Pay!</button>
          </Col>
          <Col>
            <Card className="checkoutaja">
              <h2>Detail Perjalanan</h2>
              <Row>
                <Col xs={4}>
                  <img src={require("../Pages/images/logo.png")} width="80%" />
                </Col>
                <Col xs>
                  <p>CGK - DPS - Min 16 Jun 2019 - 20:45</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Harga</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Dewasa (x1)</p>
                </Col>
                <Col>
                  <p>Rp 1.250.000</p>
                </Col>
              </Row>
              <hr className="garisabuabu" />
              <Row>
                <Col>
                  <p>Pajak dan Biaya Layanan</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Pajak</p>
                </Col>
                <Col>
                  <p>Rp 10.000</p>
                </Col>
              </Row>
              <hr className="garisabuabu" />

              <Row>
                <Col>
                  <p>Total</p>
                </Col>
                <Col>
                  <p>Rp 1.260.000</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Checkout);
