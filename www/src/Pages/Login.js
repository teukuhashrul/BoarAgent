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

class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container className="d-flex justify-content-center text-center login-container">
        <Card className="login-card">
          <Row noGutters>
            <Col lg="7">
              <Row className="h-100 align-items-center" noGutters>
                <Col className="position-absolute align-self-start" />
                <Col>
                  <Form className="login-form">
                    <h1>Log In</h1>

                    <Form.Group controlId="loginEmail" className="text-left">
                      <Form.Label>
                        <i className="login-fas fas fa-at" />
                        Email
                      </Form.Label>

                      <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="loginPassword" className="text-left">
                      <Form.Label>
                        <i className="login-fas fas fa-lock" />
                        Password
                      </Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      disabled
                      className="mt-3  login-button"
                    >
                      Masuk
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col lg="5">
              <Row className="align-items-center" noGutters>
                <Col className="login-card-fore">
                  <Image
                    fluid
                    src={require("./images/fr.png")}
                    alt="Register"
                  />
                </Col>
                <Col className="position-absolute">
                  <Image fluid src={require("./images/coba.gif")} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Login);
