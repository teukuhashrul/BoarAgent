import React, { Component, Fragment } from "react";

import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./header.css";
// import RightCart from "./RightCart";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <header />
        {/* <RightCart /> */}
      </Fragment>
    );
  }
}

export default Header;
