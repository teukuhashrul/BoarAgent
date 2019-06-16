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
import {withApollo} from "react-apollo";
import gql from "graphql-tag";
import {Query,Mutation} from "react-apollo";


const getBusinesFLights = gql`
    mutation getBusinesFLights($origin:String,$dest:String,$departureDate:String,$returnDate:String){
        getBusinesFLights(origin:$origin, dest:$dest , departureDate:$departureDate , returnDate:$returnDate ,isOne:1)
    }
`;

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
    query getFavCities{
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
      query:query
    }).then(res => {
      languages = res.data.getCities;
    });
    this.props.client.query({
      query: query
    }).then(res => {
      this.setState({
        cities:res.data.getCities[0]
      });

    });
    this.props.client.query({
      query:mostPointIntrest
    }).then(res => {
      this.setState({
        mostIntrest:res.data.getFavCities
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
          interval={3500}
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
        <Container className="d-flex justify-content-center text-center login-container">
          <Card className="home-card">
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
            <div className="buatwork" id="buatwork">
              <Mutation mutation={getBusinesFLights} >
                {(getBusinesFLights) => (
                  <Form className="login-form">
                    <Row>
                      <Col>
                        <h5 className="cari">
                          Cari harga tiket pesawat murah dan promo di sini!
                        </h5>
                      </Col>
                    </Row>
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
                        <Form.Control onChange={e=>{
                          e.preventDefault();
                          this.setState({
                            derparture:e.target.value
                          })
                        }} type="text" />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="loginEmail"
                        className="text-left"
                      >
                        <i class="far fa-calendar-alt" />{" "}
                        <Form.Label>Pulang</Form.Label>
                        <Form.Control onChange={e => {
                          e.preventDefault();
                          this.setState({
                            arrival:e.target.value
                          })
                        }} type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Button onClick={(e)=>{
                          e.preventDefault();
                          console.log("asdasd");

                        }} className="but" variant="danger">
                          Pesan
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                )}




              </Mutation>
              <Form className="login-form">
                <Row>
                  <Col>
                    <h5 className="cari">
                      Cari harga tiket pesawat murah dan promo di sini!
                    </h5>
                  </Col>
                </Row>

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
                    <Form.Control onChange={e=>{
                      e.preventDefault();
                      this.setState({
                        derparture :e.target.value
                      })
                    }} type="text"/>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="loginEmail"
                    className="text-left"
                  >
                    <i class="far fa-calendar-alt" />{" "}
                    <Form.Label>Pulang</Form.Label>
                    <Form.Control onChange={e=>{
                      e.preventDefault();
                      this.setState({
                        arrival: e.target.value
                      });
                    }} type="text" />
                  </Form.Group>

                </Form.Row>
                <Form.Row>
                  <Col>
                    <Button  onClick={(e)=>{
                      e.preventDefault();
                      console.log("a");


                    }}className="but" variant="danger">
                      Pesan
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
              <Data />
              <hr className="garisabuabu" />
              <Data />
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

            </div>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default withApollo(Home);
