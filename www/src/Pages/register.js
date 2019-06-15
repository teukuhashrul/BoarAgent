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
import gql from "graphql-tag";
import Recaptcha from "react-recaptcha";
import { Mutation } from "react-apollo";

const register = gql`
  mutation register($input: UserInput) {
    register(input: $input)
  }
`;

let recaptchaInstance;

class Register extends Component {
  state = { isHuman: false };
  render() {
    return (
      <Container className="d-flex justify-content-center text-center register-container">
        <Card className="register-card">
          <Row noGutters>
            <Col lg="7">
              <Row className="h-100 align-items-center" noGutters>
                <Col className="position-absolute  align-self-start" />
                <Col>
                  <Mutation mutation={register}>
                    {(register, { loading }) => (
                      <Form
                        className="register-form"
                        onSubmit={e => {
                          e.preventDefault();
                          recaptchaInstance.reset();
                          if (this.state.isHuman) {
                            if (
                              this.state.password === this.state.secPassword &&
                              this.state.password !== ""
                            ) {
                              let UserInput = {
                                phone: this.state.phone,
                                email: this.state.email,
                                password: this.state.password,
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                response: this.state.response
                              };
                              register({
                                variables: {
                                  input: UserInput
                                }
                              }).then(res => {
                                // we can use if in here
                                console.log(res);
                                if (res.data.register === "fail") {
                                  this.setState({
                                    showError: true,
                                    isHuman: false,
                                    errMessage:
                                      "Email yang Kamu masukan sudah terdaftar!"
                                  });
                                } else {
                                  this.props.history.push("/login");
                                }
                              });
                            } else {
                              this.setState({
                                showError: true,
                                errMessage: "password tidak sama"
                              });
                            }
                          } else {
                            this.setState({
                              errMessage: "Isi Dulu Captcha nyaa!!!",
                              showError: true
                            });
                          }
                        }}
                      >
                        <Form.Group>
                          <h1>Daftar</h1>
                        </Form.Group>

                        <Form.Group
                          controlId="registerName"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-user" />
                            Nama Lengkap
                          </Form.Label>
                          <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group
                          controlId="registerEmail"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-at" />
                            Email
                          </Form.Label>
                          <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group
                          controlId="registerEmail"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-at" />
                            Phone Number
                          </Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group
                          controlId="registerPassword"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-lock" />
                            Password
                          </Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>

                        <Form.Group
                          controlId="registerConfirmPassword"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-lock" />
                            Konfirmasi Password
                          </Form.Label>
                          <Form.Control />
                        </Form.Group>
                        <Recaptcha
                          ref={e => (recaptchaInstance = e)}
                          sitekey="6LeyBakUAAAAAPyzo2OjywRiMwoYoqpnTgUnTTOD"
                          render="explicit"
                          verifyCallback={response => {
                            if (response) {
                              this.setState({
                                isHuman: true,
                                response: response
                              });
                            }
                          }}
                          onloadCallback={() => {
                            console.log("loaded");
                          }}
                        />
                        <Button
                          variant="primary"
                          type="submit"
                          className={
                            this.state.isHuman === false
                              ? "disabled mt-3 register-button"
                              : "mt-3 register-button"
                          }
                        >
                          Register
                        </Button>
                      </Form>
                    )}
                  </Mutation>
                </Col>
              </Row>
            </Col>
            <Col lg="5">
              <Row className="align-items-center" noGutters>
                <Col className="register-card-fore">
                  <h1 className="batasatas">Join us now!!</h1>
                  <Image height="600" color="white" />
                </Col>
                <Col className="position-absolute">
                  <Image fluid src={require("./images/full.png")} />
                  <h1 className="atasgambar">Punya Account?</h1>
                  <a href="Login">
                    <Button variant="primary" type="submit">
                      Sign In
                    </Button>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Register;
