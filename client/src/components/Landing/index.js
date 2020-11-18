import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Cookies from 'js-cookie'

import M from "materialize-css";

import { Row, Col, Button, Modal } from "react-materialize";
import "./Landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      spanish: false,
    };
  }

  handleToggle = (e) => {
    e.preventDefault();

    this.setState({
      spanish: !this.state.spanish,
    });
  };

  setCookie = () => {
    Cookies.set('closeModal', 'true', { expires: 1, path: '/' });
  }

  render() {

    let cookieName = 'closeModal';

    if (Cookies.get(cookieName) === undefined || "") {
      console.log("closeModal cookie not set")

      document.addEventListener("DOMContentLoaded", function () {
      let Modalelem = document.querySelector("#Covid-19");
      let instance = M.Modal.init(Modalelem);
      instance.open();
    });
    } else if (Cookies.get(cookieName)) {
      console.log("closeModal cookie set")
    }

    return (
      <div>
        <Modal
          actions={[
            <div style={{ float: "right" }} id="modal-close">
              <Button flat modal="close" node="button" waves="teal"
              onClick={this.setCookie}>
              {this.state.spanish === false ? "Agree" : "De Acuerdo"}
              </Button>
            </div>,
            <div style={{ float: "left" }}>
              <Button flat node="button" onClick={this.handleToggle}>
                {this.state.spanish === false ? "Español" : "English"}
              </Button>
            </div>,
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header={this.state.spanish === false ? "Prevent the Spread of Covid-19" : "Evitar la Propagación del Covid-19"}
          id="Covid-19"
          open={false}
          options={{
            dismissible: true,
            endingTop: "15%",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: false,
            startingTop: "4%",
          }}
        >
          <p className={this.state.spanish === false ? "show-english" : "hide-english"}>
            We are committed to keeping ourselves and our loved ones safe. To help support the
            health and safety of everyone, we would like to remind you of the following:</p>
            <ul className={this.state.spanish === false ? "show-english" : "hide-english"}>
              <li>- Wash your hands frequently</li>
              <li>- Cover your cough or sneeze using your elbow</li>
              <li>- Wear a mask!</li>
              <li>
                - Avoid close contact with others, such as shaking hands, touching, hugging, or
                kissing.
              </li>
              <li>
                - Please do not come if you experience fever, cough, or shortness of breath within
                14 days of December 12th.
              </li>
              <li>
                - Please do not come if you have had close contact with anyone infected with
                Covid-19, including individuals exhibiting Covid-19 symptoms, within 14 days of
                December 12th.
              </li>
            </ul>

          <p className={this.state.spanish === false ? "show-english" : "hide-english"}>
            Thank you for your continued efforts in helping curb the spread of Covid-19.
          </p>

          <p className={this.state.spanish === true ? "show-spanish" : "hide-spanish"}>
          Estamos comprometidos a nuestros seres queridos y a nosotros mismos. Para mantener
          la salud y seguridad de todos, nos gustaría recordarle de lo siguiente:</p>
            <ul className={this.state.spanish === true ? "show-spanish" : "hide-spanish"}>
              <li>- Lávese las manos con frecuencia</li>
              <li>- Cúbrase al toser o estornudar con el codo</li>
              <li>- ¡Usar una máscara!</li>
              <li>
                - Evite el contacto cercano con otras personas, como dar la mano, tocar, abrazar o besar.
              </li>
              <li>
                - Por favor no venga si tiene fiebre, tos o dificultades respirando dentro de 14 días posteriores al 12 de Diciembre.
              </li>
              <li>
                - Por favor no venga si ha tenido contacto cercano con alguien infectado con Covid-19, incluidas personas que presenten 
                síntomas de Covid-19, dentro de 14 días posteriores al 12 de Diciembre.
              </li>
            </ul>
          
          <p className={this.state.spanish === true ? "show-spanish" : "hide-spanish"}>
          Gracias por sus continuos esfuerzos en frenar la propagación del Covid-19.
          </p>
        </Modal>

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
