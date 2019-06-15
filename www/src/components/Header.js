import React, { Component, Fragment } from "react";

import { Navbar, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./header.css";
// import RightCart from "./RightCart";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Navbar>
          <Navbar.Brand href="/">Boar Agent</Navbar.Brand>
          <Navbar.Brand href="/Login">Log in</Navbar.Brand>
          <Navbar.Brand href="/Register">Register</Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
