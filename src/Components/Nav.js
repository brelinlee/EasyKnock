import React, { Component } from "react";
import logo from "../image/logo.png";

class Nav extends Component {
  render() {
    return (
      <div className="header-with-logo">
        <img className="small-img" src={logo} alt="Logo" />
      </div>
    );
  }
}
export default Nav;
