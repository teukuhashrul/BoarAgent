import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  Image,
  Carousel
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { withRouter } from "react-router-dom";

const Home = props => (
  <React.Fragment>
    <Carousel className="home-gida-carousel" interval={3500} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-85"
          src={require("./images/1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    <Container className="d-flex justify-content-center text-center login-container">
      <Card className="home-card">
        <Row noGutters className="atasform">
          <Col>
            <h1 className="tulisankiri">Pilih Trip Mu Yuk!</h1>
          </Col>
          <Col>
            <a>
              <div className="belakanggambar">
                <Image
                  width="200"
                  src={require("./images/work.png")}
                  alt="work"
                />
                <h3>Work</h3>
              </div>
            </a>
          </Col>
          <Col>
            <a>
              <div className="belakanggambar">
                <Image
                  width="200"
                  src={require("./images/vac.png")}
                  alt="vacation"
                />
                <h3>Vacation</h3>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <i class="fas fa-plane fa-2x planeicon" />
          </Col>
          <Col>
            <h5 className="cari">
              Cari harga tiket pesawat murah dan promo di sini
            </h5>
          </Col>
        </Row>
      </Card>
    </Container>
  </React.Fragment>
);

export default withRouter(Home);
