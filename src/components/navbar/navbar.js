import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="Left">Screen Siren Memory Game!</li>
          <li className="Center">{this.props.Result}</li>
          <li className="Right">Score: {this.props.Score}| Top Score: {this.props.TopScore}</li>

        </ul>
      </nav>
    );
  }
}

export default navbar;