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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autosuggest from "react-autosuggest";
import Data from "../components/datapesawat";
import "./Gallery.css";
import Cardd from "../components/Card";
const languages = [
  {
    name: "C"
  },
  {
    name: "Elm"
  },
  {
    name: "Bunga Mawar"
  },
  {
    name: "Bunga"
  },
  {
    name: "Bunga Kertas"
  },
  {
    name: "Bunga Matahari"
  },
  {
    name: "Bunga lain"
  }
];

const product = [
  {
    id: 1,
    name: "Bandung",
    image: "https://ik.imagekit.io/gg7r7ahaz/lol_OaV5tCTlN.jpg",
    category_id: 1
  },
  {
    id: 2,
    name: "Bali",
    image: "https://ik.imagekit.io/gg7r7ahaz/beaches-444x266_HxhTDTyKz.jpg",
    category_id: 2
  },
  {
    id: 3,
    name: "China",
    image:
      "https://ik.imagekit.io/gg7r7ahaz/best-time-to-visit-china-250x250_N47OTwRhj.png",
    category_id: 3
  },
  {
    id: 4,
    name: "Singapore",
    image: "https://ik.imagekit.io/gg7r7ahaz/185671_uIW6rDJdD.jpg",
    category_id: 1
  }
];
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      startDatee: new Date(),
      vacation: false,
      work: false,
      value: "",
      suggestions: [],
      product,
      visible: 4
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangee = this.handleChangee.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDatee: date
    });
  }
  handleChangee(date) {
    this.setState({
      startDate: date
    });
  }

  pilih() {
    var x = document.getElementById("buatwork");
    var y = document.getElementById("buatvac");

    this.setState({
      work: true
    });
    y.style.display = "none";

    x.style.display = "block";
    if ((this.state.work = true)) {
      this.setState({
        work: false,
        vac: true
      });
    }
  }
  pilih2() {
    var x = document.getElementById("buatvac");
    var y = document.getElementById("buatwork");
    this.setState({
      vac: true
    });
    y.style.display = "none";
    x.style.display = "block";
    if ((this.state.vac = true)) {
      this.setState({
        vac: false,
        work: true
      });
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      value,
      onChange: this.onChange
    };
    return (
      <React.Fragment>
        <Carousel
          className="home-gida-carousel"
          interval={5500}
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-85"
              src={require("./images/1.jpg")}
              alt="First slide"
              height="550"
              width="100%"
            />
          </Carousel.Item>
        </Carousel>
        <Container>
          <Card className="home-card">
            <div className="temp">
              {" "}
              <Row>
                <Col className="position-absolute">
                  <Image
                    width="10%"
                    src={require("./images/logo.png")}
                    className="muka"
                  />
                </Col>
                <Col>
                  <h1 className="cari">Hi, Mau kemana?</h1>
                </Col>
              </Row>
              <Row noGutters className="atasform">
                <Col>
                  <button
                    type="button"
                    id="work"
                    href="#"
                    onClick={() => this.pilih()}
                    className="buttonawal a"
                    disabled={this.state.vac}
                  >
                    <div className="belakanggambar1">
                      <Image
                        width="150"
                        src={require("./images/work.png")}
                        alt="work"
                      />
                      <h3>Work</h3>
                    </div>
                  </button>
                </Col>
                <Col>
                  <button
                    type="button"
                    id="vac"
                    href="#"
                    onClick={() => this.pilih2()}
                    className="buttonawal b"
                    disabled={this.state.work}
                  >
                    <div className="belakanggambar2">
                      <Image
                        width="150"
                        src={require("./images/vac.png")}
                        alt="vacation"
                      />
                      <h3>Vacation</h3>
                    </div>
                  </button>
                </Col>
              </Row>
            </div>
            <div className="buatwork" id="buatwork">
              <Form className="login-form">
                <Form.Row>
                  <Form.Group as={Col}>
                    {["radio"].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="One Way" type={type} id="1" />
                        <Form.Check
                          inline
                          label="MultiTrip"
                          type={type}
                          id="2"
                        />
                      </div>
                    ))}{" "}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="fas fa-plane-departure" />
                    {"   "} <Form.Label>Dari</Form.Label>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={
                        this.onSuggestionsFetchRequested
                      }
                      onSuggestionsClearRequested={
                        this.onSuggestionsClearRequested
                      }
                      getSuggestionValue={getSuggestionValue}
                      renderSuggestion={renderSuggestion}
                      inputProps={inputProps}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <i class="fas fa-exchange-alt fa-2x returnicon" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="loginPassword"
                    className="text-left"
                  >
                    <i class="fas fa-plane-arrival" />{" "}
                    <Form.Label>Ke</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="far fa-calendar-alt" />{" "}
                    <Form.Label>Pergi</Form.Label>
                    <DatePicker
                      className="formnya"
                      selected={this.state.startDatee}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="far fa-calendar-alt" />{" "}
                    <Form.Label>Pulang</Form.Label>
                    <DatePicker
                      className="formnya"
                      selected={this.state.startDate}
                      onChange={this.handleChangee}
                    />
                  </Form.Group>
                  <Form.Group as={Col} />
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <Form.Label>Penumpang</Form.Label>

                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <Form.Label>Kelas</Form.Label>

                    <Form.Control as="select">
                      <option>Ekonomi</option>
                      <option>Bisnis</option>
                      <option>First Class</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Button className="but" variant="danger">
                      Search
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
              {/* <Data />
              <hr className="garisabuabu" />
              <Data /> */}
            </div>
            <div className="buatvac" id="buatvac">
              <Form className="login-form">
                <Form.Row>
                  <Form.Group as={Col}>
                    {["radio"].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="One Way" type={type} id="1" />
                        <Form.Check
                          inline
                          label="MultiTrip"
                          type={type}
                          id="2"
                        />
                      </div>
                    ))}{" "}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="fas fa-plane-departure" />
                    {"   "} <Form.Label>Dari</Form.Label>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={
                        this.onSuggestionsFetchRequested
                      }
                      onSuggestionsClearRequested={
                        this.onSuggestionsClearRequested
                      }
                      getSuggestionValue={getSuggestionValue}
                      renderSuggestion={renderSuggestion}
                      inputProps={inputProps}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="far fa-calendar-alt" />{" "}
                    <Form.Label>Pergi</Form.Label>
                    <DatePicker
                      className="formnya"
                      selected={this.state.startDatee}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="far fa-calendar-alt" />{" "}
                    <Form.Label>Pulang</Form.Label>
                    <DatePicker
                      className="formnya"
                      selected={this.state.startDate}
                      onChange={this.handleChangee}
                    />
                  </Form.Group>
                  <Form.Group as={Col} />
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <Form.Label>Penumpang</Form.Label>

                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <Form.Label>Kelas</Form.Label>

                    <Form.Control as="select">
                      <option>Ekonomi</option>
                      <option>Bisnis</option>
                      <option>First Class</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Button className="but" variant="danger">
                      Search
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
              {/* <Data />
              <hr className="garisabuabu" />
              <Data /> */}
            </div>
          </Card>
          <Row />
        </Container>
        <Row>
          <Col>
            <div className="hone-container">
              <div className=" no-padding">
                <Row>
                  <Image
                    md={12}
                    lg={12}
                    xs={12}
                    className="img-fluid"
                    src={require("./images/pls.png")}
                  />
                </Row>
              </div>
              <Container className="my-5">
                <Row>
                  {/*looping product from card*/}
                  <Cardd
                    visible={this.state.visible}
                    product={this.state.product}
                  />

                  {this.state.visible < this.state.product.length && (
                    <Col lg={12} md={12} xs={12}>
                      <div className="d-flex justify-content-center" />
                    </Col>
                  )}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="hone-container">
              <div className=" no-padding">
                <Row>
                  <Image
                    md={12}
                    lg={12}
                    xs={12}
                    className="img-fluid"
                    src={require("./images/plss.png")}
                  />
                </Row>
              </div>
              <Container className="my-5">
                <Row>
                  {/*looping product from card*/}
                  <Cardd
                    visible={this.state.visible}
                    product={this.state.product}
                  />

                  {this.state.visible < this.state.product.length && (
                    <Col lg={12} md={12} xs={12}>
                      <div className="d-flex justify-content-center" />
                    </Col>
                  )}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
