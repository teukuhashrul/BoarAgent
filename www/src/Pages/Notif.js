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
import Not from "../components/not";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container className="d-flex justify-content-center text-center login-container">
        <Card className="login-card">
          <Not />
          <hr className="garisabuabu" />
        </Card>
      </Container>
    );
  }
}

export default withRouter(Login);
