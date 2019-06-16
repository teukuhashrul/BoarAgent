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

import "./Login.css";
import { withRouter } from "react-router-dom";
import Data from "../components/datawish";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container className="d-flex justify-content-center text-center login-container">
        <Card className="login-card">
          <Data
            maskapai="Lion Air"
            berangkat="20:00"
            durasi="2 j 35 m"
            sampai="22:35"
            price="560.000"
            display="none"
          />
        </Card>
      </Container>
    );
  }
}

export default withRouter(Login);
