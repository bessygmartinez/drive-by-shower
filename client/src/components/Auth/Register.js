import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerParty } from "../../Actions/authActions";
import Moment from "react-moment";
import partiesAPI from "../../utils/partiesAPI";

import "materialize-css";
import { Row, Col, TextInput, Button, Icon, Preloader } from "react-materialize";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      party: {},
      activeButton: null,
      errors: {},
      reservedParties: [],
      spanish: false,
      preloader: false,
    };
  }

  componentDidMount() {
    this.loadParties();
  }

  loadParties = () => {
    partiesAPI.getAllParties().then((res) =>
      this.setState({
        reservedParties: res.data,
      })
    );
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleSpanishToggle = (e) => {
    this.setState({ spanish: !this.state.spanish });
  };

  handleToggle = (e) => {
    e.preventDefault();

    this.setState({ activeButton: e.target.id });
    this.setState({
      party: {
        partyName: this.state.party.partyName,
        partySize: this.state.party.partySize,
        partyAddress: this.state.party.partyAddress,
        partyEmail: this.state.party.partyEmail,
        partyTime: e.target.value,
      },
    });
  };

  onChange = (e) => {
    this.setState({
      party: {
        ...this.state.party,
        [e.target.id]: e.target.value,
      },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let parties = this.state.reservedParties;

    if (
      this.state.party.partyName &&
      this.state.party.partySize &&
      this.state.party.partyAddress &&
      this.state.party.partyEmail &&
      this.state.party.partyTime !== undefined
    ) {
      let party1 = parties.filter((party) => {
        return party.partyTime === "11:00am - 12:00pm";
      });

      let party2 = parties.filter((party) => {
        return party.partyTime === "12:15pm - 01:15pm";
      });

      let party3 = parties.filter((party) => {
        return party.partyTime === "01:30pm - 02:30pm";
      });

      let party4 = parties.filter((party) => {
        return party.partyTime === "02:45pm - 03:45pm";
      });

      let party5 = parties.filter((party) => {
        return party.partyTime === "04:00pm - 05:00pm";
      });

      let party6 = parties.filter((party) => {
        return party.partyTime === "05:15pm - 06:15pm";
      });

      let party1Size;
      let party2Size;
      let party3Size;
      let party4Size;
      let party5Size;
      let party6Size;

      if (this.state.party.partyTime === "11:00am - 12:00pm") {
        if (party1.length < 1) {
          party1Size = 0;
        } else {
          let partySizeArr = [];
          party1.forEach((party) => {
            partySizeArr.push(parseInt(party.partySize));
            party1Size = partySizeArr.reduce(function (a, b) {
              return a + b;
            }, 0);
          });
        }
        if (parseInt(this.state.party.partySize) + party1Size <= 15) {
          this.setState({
            ...this.state,
            errors: {},
            preloader: true,
          });
        }
      } else if (this.state.party.partyTime === "12:15pm - 01:15pm") {
        if (party2.length < 1) {
          party2Size = 0;
        } else {
          let partySizeArr = [];
          party2.forEach((party) => {
            partySizeArr.push(parseInt(party.partySize));
            party2Size = partySizeArr.reduce(function (a, b) {
              return a + b;
            }, 0);
          });
        }

        if (parseInt(this.state.party.partySize) + party2Size <= 15) {
          this.setState({
            ...this.state,
            errors: {},
            preloader: true,
          });
        }
      } else if (this.state.party.partyTime === "01:30pm - 02:30pm") {
        if (party3.length < 1) {
          party3Size = 0;
        } else {
          let partySizeArr = [];
          party3.forEach((party) => {
            partySizeArr.push(parseInt(party.partySize));
            party3Size = partySizeArr.reduce(function (a, b) {
              return a + b;
            }, 0);
          });
        }

        if (parseInt(this.state.party.partySize) + party3Size <= 15) {
          this.setState({
            ...this.state,
            errors: {},
            preloader: true,
          });
        }
      } else if (this.state.party.partyTime === "02:45pm - 03:45pm") {
        if (party4.length < 1) {
          party4Size = 0;
        } else {
          let partySizeArr = [];
          party4.forEach((party) => {
            partySizeArr.push(parseInt(party.partySize));
            party4Size = partySizeArr.reduce(function (a, b) {
              return a + b;
            }, 0);
          });
        }

        if (parseInt(this.state.party.partySize) + party4Size <= 15) {
          this.setState({
            ...this.state,
            errors: {},
            preloader: true,
          });
        }
      } else if (this.state.party.partyTime === "04:00pm - 05:00pm") {
        if (party5.length < 1) {
          party5Size = 0;
        } else {
          let partySizeArr = [];
          party5.forEach((party) => {
            partySizeArr.push(parseInt(party.partySize));
            party5Size = partySizeArr.reduce(function (a, b) {
              return a + b;
            }, 0);
          });
        }

        if (parseInt(this.state.party.partySize) + party5Size <= 15) {
          this.setState({
            ...this.state,
            errors: {},
            preloader: true,
          });
        }
      } else if (this.state.party.partyTime === "05:15pm - 06:15pm") {
        if (party6.length < 1) {
          party6Size = 0;
        } else {
          let partySizeArr = [];
          party6.forEach((party) => {
            partySizeArr.push(parseInt(party.partySize));
            party6Size = partySizeArr.reduce(function (a, b) {
              return a + b;
            }, 0);
          });
        }
        if (parseInt(this.state.party.partySize) + party6Size <= 15) {
          this.setState({
            ...this.state,
            errors: {},
            preloader: true,
          });
        }
      }
    }

    const newParty = {
      partyName: this.state.party.partyName,
      partySize: this.state.party.partySize,
      partyAddress: this.state.party.partyAddress,
      partyEmail: this.state.party.partyEmail,
      partyTime: this.state.party.partyTime,
    };

    this.props.registerParty(newParty, this.props.history);

    console.log(newParty);
  };

  render() {
    const { errors } = this.state;

    let parties = this.state.reservedParties;

    let party1 = parties.filter((party) => {
      return party.partyTime === "11:00am - 12:00pm";
    });

    let party1Size;

    if (party1.length < 1) {
      party1Size = 0;
    } else {
      let partySizeArr = [];
      party1.forEach((party) => {
        partySizeArr.push(parseInt(party.partySize));
        party1Size = partySizeArr.reduce(function (a, b) {
          return a + b;
        }, 0);
      });
    }

    let party1SizeDiff = 15 - party1Size;

    let party2 = parties.filter((party) => {
      return party.partyTime === "12:15pm - 01:15pm";
    });

    let party2Size;

    if (party2.length < 1) {
      party2Size = 0;
    } else {
      let partySizeArr = [];
      party2.forEach((party) => {
        partySizeArr.push(parseInt(party.partySize));
        party2Size = partySizeArr.reduce(function (a, b) {
          return a + b;
        }, 0);
      });
    }

    let party2SizeDiff = 15 - party2Size;

    let party3 = parties.filter((party) => {
      return party.partyTime === "01:30pm - 02:30pm";
    });

    let party3Size;

    if (party3.length < 1) {
      party3Size = 0;
    } else {
      let partySizeArr = [];
      party3.forEach((party) => {
        partySizeArr.push(parseInt(party.partySize));
        party3Size = partySizeArr.reduce(function (a, b) {
          return a + b;
        }, 0);
      });
    }

    let party3SizeDiff = 15 - party3Size;

    let party4 = parties.filter((party) => {
      return party.partyTime === "02:45pm - 03:45pm";
    });

    let party4Size;

    if (party4.length < 1) {
      party4Size = 0;
    } else {
      let partySizeArr = [];
      party4.forEach((party) => {
        partySizeArr.push(parseInt(party.partySize));
        party4Size = partySizeArr.reduce(function (a, b) {
          return a + b;
        }, 0);
      });
    }

    let party4SizeDiff = 15 - party4Size;

    let party5 = parties.filter((party) => {
      return party.partyTime === "04:00pm - 05:00pm";
    });

    let party5Size;

    if (party5.length < 1) {
      party5Size = 0;
    } else {
      let partySizeArr = [];
      party5.forEach((party) => {
        partySizeArr.push(parseInt(party.partySize));
        party5Size = partySizeArr.reduce(function (a, b) {
          return a + b;
        }, 0);
      });
    }

    let party5SizeDiff = 15 - party5Size;

    let party6 = parties.filter((party) => {
      return party.partyTime === "05:15pm - 06:15pm";
    });

    let party6Size;

    if (party6.length < 1) {
      party6Size = 0;
    } else {
      let partySizeArr = [];
      party6.forEach((party) => {
        partySizeArr.push(parseInt(party.partySize));
        party6Size = partySizeArr.reduce(function (a, b) {
          return a + b;
        }, 0);
      });
    }

    let party6SizeDiff = 15 - party6Size;

    return (
      <div>
        <Row></Row>
        <Row className="row-top-0">
          <Col s={12} className="center-align">
            <Col s={6} l={6} className="left-align">
              <Link to="/viewparties">
                <Button small flat node="button" className="teal white-text">
                  {this.state.spanish === false ? "View Schedule" : "Ver Horario"}
                </Button>
              </Link>
            </Col>

            <Col s={6} l={6} className="right-align">
              <Button
                small
                flat
                node="button"
                onClick={this.handleSpanishToggle}
                className="grey lighten-4"
              >
                {this.state.spanish === false ? "Español" : "English"}
              </Button>
            </Col>
            <Row></Row>

            <Col s={12} className="center-align white">
              <p
                className={
                  this.state.spanish === false ? "show-english dosis" : "hide-english dosis"
                }
              >
                Today is <Moment interval={1000} format="L, h:mm a" />
                <br />
                Please fill out the form below to reserve your time frame.
                <br />
                Each time frame is limited to 15 people per hour.
              </p>

              <p
                className={
                  this.state.spanish === true
                    ? "show-spanish dosis white"
                    : "hide-spanish dosis white"
                }
              >
                Hoy es <Moment interval={1000} format="L, h:mm a" />
                <br />
                Favor de completar el siguiente formulario para reservar su período de tiempo.
                <br />
                Cada período de tiempo está limitado a 15 personas por hora.
              </p>
            </Col>
          </Col>
        </Row>

        <form className="grey lighten-5" onSubmit={this.onSubmit}>
          <br />

          <Row>
            <Col s={6}>
              <TextInput
                onChange={this.onChange}
                id="partyName"
                label={this.state.spanish === false ? "Full Name" : "Nombre Completo"}
                type="text"
                validate
                s={12}
                className="input-field2"
              />
              <div style={{ marginLeft: "0.75rem" }}>
                <span className="red-text text-accent-2 tiny-text">
                  {this.state.spanish === false ? errors.partyName : errors.partyNameSpanish}
                </span>
              </div>
            </Col>

            <Col s={6}>
              <TextInput
                onChange={this.onChange}
                id="partySize"
                label={this.state.spanish === false ? "# in your party" : "# en su grupo"}
                type="number"
                s={12}
                className="input-field2"
                min="1"
                max="10"
              />
              <div style={{ marginLeft: "0.75rem", marginTop: "-0.75rem" }}>
                <span className="red-text text-accent-2 tiny-text">
                  {this.state.spanish === false ? errors.partySize : errors.partySizeSpanish}
                </span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col s={12}>
              <TextInput
                onChange={this.onChange}
                id="partyAddress"
                label={
                  this.state.spanish === false
                    ? "Mailing Address (to send you a game!)"
                    : "Dirección postal (¡para enviarte un juego!)"
                }
                type="text"
                validate
                s={12}
                className="input-field2"
              />
              <div style={{ marginLeft: "0.75rem" }}>
                <span className="grey-text text-lighten-1 tiny-text">
                  {this.state.spanish === false
                    ? "Street, City, State Zip"
                    : "Calle, Ciudad, Estado Código Postal"}
                </span>
              </div>
              <div style={{ marginLeft: "0.75rem" }}>
                <span className="red-text text-accent-2 tiny-text">
                  {this.state.spanish === false ? errors.partyAddress : errors.partyAddressSpanish}
                </span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col s={12}>
              <TextInput
                onChange={this.onChange}
                id="partyEmail"
                label={this.state.spanish === false ? "Email Address" : "Correo Electrónico"}
                type="email"
                validate
                s={12}
                className="input-field2"
              />
              <div style={{ marginLeft: "0.75rem" }}>
                <span className="grey-text text-lighten-1 tiny-text">
                  {this.state.spanish === false
                    ? "Confirmation will be sent to this email"
                    : "Confirmación sera enviada a este correo"}
                </span>
              </div>
              <div style={{ marginLeft: "0.75rem" }}>
                <span className="red-text text-accent-2 tiny-text">
                  {this.state.spanish === false ? errors.partyEmail : errors.partyEmailSpanish}
                </span>
              </div>
            </Col>
          </Row>

          <Row className="center-align">
            <br />
            <div style={{ marginLeft: "0.75rem", marginBottom: "0.75rem" }}>
              <span className="red-text text-accent-2 tiny-text">
                {this.state.spanish === false ? errors.partyTime : errors.partyTimeSpanish}
              </span>
            </div>

            <Col s={6} l={4} className="offset-l2">
              <Button
                large
                value="11:00am - 12:00pm"
                id="partyTime"
                node="button"
                className={
                  this.state.party.partyTime === "11:00am - 12:00pm"
                    ? "grey darken-2"
                    : null || party1SizeDiff === 0
                    ? "disabled"
                    : null
                }
                onClick={this.handleToggle}
              >
                11:00am - 12:00pm
              </Button>
              <div className="open-spot-badge">
                <span
                  className="new badge red lighten-2"
                  data-badge-caption={
                    this.state.spanish === false ? "open spots" : "espacios abiertos"
                  }
                >
                  {party1SizeDiff}
                </span>
              </div>
            </Col>

            <Col s={6} l={4}>
              <Button
                large
                value="12:15pm - 01:15pm"
                id="partyTime"
                node="button"
                className={
                  this.state.party.partyTime === "12:15pm - 01:15pm"
                    ? "grey darken-2"
                    : null || party2SizeDiff === 0
                    ? "disabled"
                    : null
                }
                onClick={this.handleToggle}
              >
                12:15pm - 01:15pm
              </Button>
              <div className="open-spot-badge">
                <span
                  className="new badge red lighten-2"
                  data-badge-caption={
                    this.state.spanish === false ? "open spots" : "espacios abiertos"
                  }
                >
                  {party2SizeDiff}
                </span>
              </div>
            </Col>
          </Row>

          <Row className="center-align">
            <Col s={6} l={4} offset="l2">
              <Button
                large
                value="01:30pm - 02:30pm"
                id="partyTime"
                node="button"
                className={
                  this.state.party.partyTime === "01:30pm - 02:30pm"
                    ? "grey darken-2"
                    : null || party3SizeDiff === 0
                    ? "disabled"
                    : null
                }
                onClick={this.handleToggle}
              >
                01:30pm - 02:30pm
              </Button>
              <div className="open-spot-badge">
                <span
                  className="new badge red lighten-2"
                  data-badge-caption={
                    this.state.spanish === false ? "open spots" : "espacios abiertos"
                  }
                >
                  {party3SizeDiff}
                </span>
              </div>
            </Col>

            <Col s={6} l={4}>
              <Button
                large
                value="02:45pm - 03:45pm"
                id="partyTime"
                node="button"
                className={
                  this.state.party.partyTime === "02:45pm - 03:45pm"
                    ? "grey darken-2"
                    : null || party4SizeDiff === 0
                    ? "disabled"
                    : null
                }
                onClick={this.handleToggle}
              >
                02:45pm - 03:45pm
              </Button>
              <div className="open-spot-badge">
                <span
                  className="new badge red lighten-2"
                  data-badge-caption={
                    this.state.spanish === false ? "open spots" : "espacios abiertos"
                  }
                >
                  {party4SizeDiff}
                </span>
              </div>
            </Col>
          </Row>

          <Row className="center-align">
            <Col s={6} l={4} offset="l2">
              <Button
                large
                value="04:00pm - 05:00pm"
                id="partyTime"
                node="button"
                className={
                  this.state.party.partyTime === "04:00pm - 05:00pm"
                    ? "grey darken-2"
                    : null || party5SizeDiff === 0
                    ? "disabled"
                    : null
                }
                onClick={this.handleToggle}
              >
                04:00pm - 05:00pm
              </Button>
              <div className="open-spot-badge">
                <span
                  className="new badge red lighten-2"
                  data-badge-caption={
                    this.state.spanish === false ? "open spots" : "espacios abiertos"
                  }
                >
                  {party5SizeDiff}
                </span>
              </div>
            </Col>

            <Col s={6} l={4}>
              <Button
                large
                value="05:15pm - 06:15pm"
                id="partyTime"
                node="button"
                className={
                  this.state.party.partyTime === "05:15pm - 06:15pm"
                    ? "grey darken-2"
                    : null || party6SizeDiff === 0
                    ? "disabled"
                    : null
                }
                onClick={this.handleToggle}
              >
                05:15pm - 06:15pm
              </Button>
              <div className="open-spot-badge">
                <span
                  className="new badge red lighten-2"
                  data-badge-caption={
                    this.state.spanish === false ? "open spots" : "espacios abiertos"
                  }
                >
                  {party6SizeDiff}
                </span>
              </div>
            </Col>
          </Row>

          <Row className="center-align">
            <Col s={12}>
              <Button
                large
                value="Can't Make It"
                id="partyTime"
                node="button"
                className={this.state.party.partyTime === "Can't Make It" ? "red lighten-2" : null}
                onClick={this.handleToggle}
              >
                {this.state.spanish === false ? "Can't Make It" : "No Puedo Llegar"}
                <Icon right>sentiment_very_dissatisfied</Icon>
              </Button>
            </Col>
          </Row>

          <Row className="center-align">
            <Col s={4} push="s7">
              {this.state.preloader !== true ? (
                <Button large node="button" type="submit" onSubmit={this.onSubmit}>
                  {this.state.spanish === false ? "Submit" : "Enviar"}
                  <Icon right>send</Icon>
                </Button>
              ) : (
                <Preloader active color="red" flashing={false} size="small" />
              )}
            </Col>
          </Row>
          <br />
        </form>
        <br />
      </div>
    );
  }
}

Register.propTypes = {
  registerParty: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerParty })(withRouter(Register));
