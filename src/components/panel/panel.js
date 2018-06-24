import React, { Component } from "react";
import "./panel.css";

class panel extends Component {
    render() {
      return (
        <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">40's Screen Sirens</h1>
          <p>Click on an image of a 40's Siren to earn points. Make sure not to click on an image more than once or your score will revert to zero!</p>
        </div>
      </div>
        );
    }
  }
  
export default panel;  