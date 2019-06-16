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
import "./Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autosuggest from "react-autosuggest";
import Data from "../components/datapesawat";

import "./Gallery.css";
import Cardd from "../components/Card";
const languages = [

import {withApollo} from "react-apollo";
import gql from "graphql-tag";
import {Query,Mutation} from "react-apollo";


const query = gql`
    query getCities{
        getCities{
            name
            code
            tours
            tour{
                place
            }
        }
    }
`;
const mostPointIntrest = gql`
    mutation getFavCities{
        getFavCities
    }
`;
const getVacationFlights = gql`
    mutation getVacationFlights($origin:String,$dest:String,$departureDate:String) {
        getVacationFlights(origin:$origin , dest:$dest , departureDate:$departureDate)
    }
`;
let languages = [

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

const getSuggestionValue = suggestion => {
  // this.setState({
  //   origin: suggestion.code
  // });

  return   suggestion.code;

};

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

      departure:"",
      arrival:"",
      isOneway :0,
      origin:"",
      destination:"",
      flightOffer:[],
      cities:[],
      departureTine:"",
      mostIntrest:''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangee = this.handleChangee.bind(this);
  }
  componentDidMount() {
    this.props.client.query({
      query: query
    }).then(res => {
      this.setState({
        cities:res.data.getCities[0]
      });

    });




  }


  handleChange(date) {
    let time = date+"";
    let arrTIme = time.split(" ");
    let month = new Date().getMonth();
    if(month<10){
      month = "0"+month;
    }
    let res = arrTIme[3]+"-"+month+"-"+arrTIme[2];

    this.setState({
      startDatee: date,
      departure:res
    });


  }
  handleChangee(date) {
    let time = date+"";
    let arrTIme = time.split(" ");
    let month = new Date().getMonth();
    if(month<10){
      month = "0"+month;
    }
    let res = arrTIme[3]+"-"+month+"-"+arrTIme[2];
    this.setState({
      startDate: date,
      arrival:res
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
                        <Form.Check inline label="One Way"  type={type} id="1" />
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
                    <Form.Control onChange={e=>{
                      e.preventDefault();
                      this.setState({
                        destination:e.target.value
                      });
                    }} type="text" />
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
                      dateFormat="yyyy-MM-dd"
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

              {/*vacation*/}
              <Mutation mutation={getVacationFlights}>
                {(getVacationFlights) => (
                      <Form
                       className="login-form">
                      <Row>
                        <Col>
                          <h5 className="cari">
                            Cari harga tiket pesawat murah dan promo di sini!
                          </h5>
                        </Col>
                      </Row>

                      <Form.Row>
                        <Form.Group as={Col}>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group
                          as={Col}
                          controlId="loginEmail"
                          className="text-left"
                        >
                          <i class="fas fa-plane-departure" />
                          {"   "} <Form.Label>Dariz</Form.Label>
                          <Form.Control onChange={e =>
                            this.setState({origin: e.target.value})
                          } type="text" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group
                          as={Col}
                          controlId="loginEmail"
                          className="text-left"
                        >
                          <i class="far fa-calendar-alt" />{" "}
                          <Form.Label>Pergiz</Form.Label>
                          <Form.Control onChange={e =>
                            this.setState({departureTine: e.target.value})
                          } type="text" />


                        </Form.Group>

                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Button onClick={e=>{

                            e.preventDefault();
                            getVacationFlights({
                              variables:{
                                origin: this.state.origin,
                                dest:this.state.cities.code,
                                departureDate:this.state.departureTine
                              }
                            }).then(res => {

                              this.setState({
                                flightOffer:res.data.getVacationFlights
                              });
                              console.log(this.state.flightOffer);

                            })

                          }} className="but" variant="danger">
                            Search
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                )}





              </Mutation>
              {this.state.flightOffer.map((item, key) => (
                <div >
                  <Data
                    maskapai={item.carrierCode}
                    berangkat={this.state.origin}
                    durasi={item.duration}
                    sampai={item.arrival.iataCode}
                    price={item.totalPrice}

                  />
                  <hr className="garisabuabu" />
                </div>
              ))}


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
              <Data />
              <hr className="garisabuabu" />
              <Data />

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

export default withApollo(Home);
