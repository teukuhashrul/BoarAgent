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
          <Navbar.Brand href="/">
            {" "}
            <img src={require("../Pages/images/logo.png")} width="50" />
          </Navbar.Brand>
          <Navbar.Brand href="/">Boar Agent</Navbar.Brand>
          <Navbar.Brand
            color="maroon"
            className="justify-content-end"
            href="/Login"
          >
            Log in
          </Navbar.Brand>
          <Navbar.Brand className="justify-content-end" href="/Register">
            Register
          </Navbar.Brand>
          <Navbar.Brand className="justify-content-end" href="/wishlist">
            Wishlist
          </Navbar.Brand>
          <Navbar.Brand className="justify-content-end" href="/notif">
            <i class="fas fa-bell fa-1x" />
          </Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
