import React, { Component } from "react";
import { Row, Col } from "react-materialize";

import { Link } from "react-router-dom";

class SeeYou extends Component {
  render() {
    return (
      <div>
        <Row className="light-pink-bg">
          <Col s={12} className="center-align">
            <h3 className="dosis h3-dosis">
              <b>SEE YOU SOON!</b>
            </h3>
            <h4 className="dosis h4-dosis">Get your masks and cameras ready!</h4>
          </Col>
        </Row>
        <Row className="grey lighten-5 form-row">
          <Col s={12}>
            <p className="dosis">
              If you need to change your time or if you cannot make it, please text Bessy at
              786-280-5750.
            </p>
          </Col>
        </Row>

        <Col>
            <Link to="/" className="teal-text text-darken-1">
              <i className="material-icons" style={{ fontSize: "130%" }}>
                keyboard_backspace
              </i>{" "}
              back
            </Link>
          </Col>
      </div>
    );
  }
}

export default SeeYou;
