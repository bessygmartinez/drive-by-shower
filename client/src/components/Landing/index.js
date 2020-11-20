import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Cookies from 'js-cookie'

import CovidModal from "../Modal"

import { Row, Col, Button } from "react-materialize";
import "./Landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      spanish: false,
      open: true
    };
  }

  handleToggle = (e) => {
    e.preventDefault();

    this.setState({
      spanish: !this.state.spanish,
    });
  };

  componentDidMount() {
    this.handleModal();
  }

  handleModal = () => {

    let cookieName = 'closeModal';
    
    if (Cookies.get(cookieName) === undefined || "") {
      console.log("closeModel cookie not set")
    } else if (Cookies.get(cookieName)) {
      console.log("closeModel cookie set")
      this.setState({
        ...this.state,
        open: !this.state.open
      })
    }
  }

  render() {

    return (
      <div>
        <CovidModal open={this.state.open} />

        <Row className="light-pink-bg">
          <Col s={12} className="center-align">
            <h3 className="dosis h3-dosis">
              <b>BESSY & ANDRE</b>
            </h3>
            <h4 className="dosis h4-dosis">{this.state.spanish === false ? "ARE HAVING A BABY!" : "VAN A TENER UN BEBÉ"}</h4>
          </Col>
          </Row>

          <Row className="row-top-0">
            <Col s={12} className="center-align">

          <Col s={12} l={12} className="right-align">
            <Button small flat node="button" onClick={this.handleToggle} className="white">
                {this.state.spanish === false ? "Español" : "English"}
              </Button>
            </Col>
        
          <Col s={12} className="center-align white">
            <p className={this.state.spanish === false ? "dosis show-english" : "hide-english"}>
              Thank you for choosing to be part of our exciting journey into parenthood! In order to
              keep everyone safe and avoid crowds/traffic, please reserve a time frame to come by
              and say hi. You can come any time between that time frame, but it is very important
              that you come <b>only</b> during that time. Thank you for helping us stay safe and
              keeping things running smoothly. We can't wait to see you all!
            </p>

            <p className={this.state.spanish === true ? "dosis show-spanish" : "hide-spanish"}>
              Gracias por elegir ser parte de nuestra excitante aventura de ser padres. Por la
              seguridad de todos y para evitar el trafico y grupos grandes, por favor reserve un
              horario para venir y saludarnos. Pueden llegar en cualquier momento dentro del espacio
              elegido, pero es muy importante que lleguen <b>solamente</b> dentro de ese espacio de
              tiempo. Gracias por ayudarnos a mantenernos seguros y a que todo salga bien.
              ¡Esperamos verlos pronto!
            </p>
          </Col>
          </Col>
        </Row>

        <Row>
          <Col s={6} className="center-align">
            <Link to="/register">
              <Button large className="btn btn-large waves-effect waves-light teal-btn text-white">
              {this.state.spanish === false ? "Reserve Time" : "Reserva  Tiempo"}
              </Button>
            </Link>
          </Col>

          <Col s={6} className="center-align">
            <Link to="/viewparties">
              <Button className="btn btn-large waves-effect waves-light teal-btn text-white">
              {this.state.spanish === false ? "View Schedule" : "Ver Horario"}
              </Button>
            </Link>
          </Col>
          <Row></Row>
        </Row>
      </div>
    );
  }
}

Landing.propTypes = {
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(Landing));
