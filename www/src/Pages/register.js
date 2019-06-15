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
    mutation register($name:String , $email:String ,$phone:String,$password:String){
        register(nama:$name , email:$email , phone:$phone , password:$password)
    }
`;

let recaptchaInstance;

class Register extends Component {
  state = { isHuman: false ,name:"",email: "",phone:"",password:""};
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
                            register({
                              variables:{
                                name:this.state.name,
                                email:this.state.email,
                                password:this.state.password,
                                phone:this.state.phone
                              }
                            }).then(res => {
                              let status = res.data.register;
                              if(status === 'sukses'){
                                this.props.history.push('/login');
                              }
                            });
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
                          <Form.Control onChange={e =>{
                            e.preventDefault();
                            this.setState({name: e.target.value})
                          }} type="name" />
                        </Form.Group>

                        <Form.Group
                          controlId="registerEmail"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-at" />
                            Email
                          </Form.Label>
                          <Form.Control onChange={e =>{
                            e.preventDefault();
                            this.setState({email: e.target.value})
                          }}  type="email" />
                        </Form.Group>
                        <Form.Group
                          controlId="registerEmail"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-at" />
                            Phone Number
                          </Form.Label>
                          <Form.Control onChange={e =>{
                            e.preventDefault();
                            this.setState({phone: e.target.value})
                          }}  type="number" />
                        </Form.Group>

                        <Form.Group
                          controlId="registerPassword"
                          className="text-left"
                        >
                          <Form.Label>
                            <i className="register-fas fas fa-lock" />
                            Password
                          </Form.Label>
                          <Form.Control onChange={e =>{
                            e.preventDefault();
                            this.setState({password: e.target.value})
                          }}  type="password" />
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
