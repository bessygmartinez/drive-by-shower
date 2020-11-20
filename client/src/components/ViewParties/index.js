import React, { Component } from "react";
// import PropTypes from "prop-types";
import Moment from "react-moment";
import partiesAPI from "../../utils/partiesAPI";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { Row, Col, Table, Button } from "react-materialize";
import "./ViewParties.css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class ViewParties extends Component {
  state = {
    parties: [],
    spanish: false
  };

  componentDidMount() {
    this.loadParties();
  }

  loadParties = () => {
    partiesAPI.getAllParties().then((res) =>
      this.setState({
        parties: res.data,
      })
    );
  };

  handleSpanishToggle = (e) => {
    this.setState({ spanish: !this.state.spanish });
  }

  render() {
    let parties = this.state.parties;

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

    return (
      <div>
        <Row></Row>
        <Row className="row-top-0">
          <Col s={12} className="center-align">
            <Col s={6} l={6} className="left-align">
            <Link to="/register">
              <Button small flat node="button" className="teal white-text">
              {this.state.spanish === false ? "Reserve Time" : "Reserva  Tiempo"}
              </Button>
            </Link>
            </Col>

            <Col s={6} l={6} className="right-align">
              <Button small flat node="button" onClick={this.handleSpanishToggle} className="teal white-text">
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
                Below are the parties that have already reserved their time.
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
                A continuación se muestran los grupos que ya han reservado su tiempo.
                <br />
                Cada período de tiempo está limitado a 15 personas por hora.
              </p>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <Row className="pink-row center-align">
              <h5>11:00am - 12:00pm</h5>
            </Row>
            <Table>
              <thead className="grey lighten-5">
                <tr key="11:00am - 12:00pm">
                  <th data-field="Party Name">{this.state.spanish === false ? "Party Name" : "Nombre del Grupo"}</th>
                  <th data-field="Party Size">{this.state.spanish === false ? "Party Size" : "Tamaño del Grupo"}</th>
                </tr>
              </thead>
              <tbody className="grey lighten-5">
                {party1.map((party) => {
                  return (
                    <tr key={party._id}>
                      <td>{party.partyName}</td>
                      <td>{party.partySize}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Row className="pink-row center-align">
              <h5>12:15pm - 01:15pm</h5>
            </Row>
            <Table>
              <thead className="grey lighten-5">
                <tr key="12:15pm - 01:15pm">
                <th data-field="Party Name">{this.state.spanish === false ? "Party Name" : "Nombre del Grupo"}</th>
                <th data-field="Party Size">{this.state.spanish === false ? "Party Size" : "Tamaño del Grupo"}</th>
                </tr>
              </thead>
              <tbody className="grey lighten-5">
                {party2.map((party) => {
                  return (
                    <tr  key={party._id}>
                      <td>{party.partyName}</td>
                      <td>{party.partySize}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Row className="pink-row center-align">
              <h5>01:30pm - 02:30pm</h5>
            </Row>
            <Table>
              <thead className="grey lighten-5">
                <tr key="01:30pm - 02:30pm">
                <th data-field="Party Name">{this.state.spanish === false ? "Party Name" : "Nombre del Grupo"}</th>
                <th data-field="Party Size">{this.state.spanish === false ? "Party Size" : "Tamaño del Grupo"}</th>
                </tr>
              </thead>
              <tbody className="grey lighten-5">
                {party3.map((party) => {
                  return (
                    <tr  key={party._id}>
                      <td>{party.partyName}</td>
                      <td>{party.partySize}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Row className="pink-row center-align">
              <h5>02:45pm - 03:45pm</h5>
            </Row>
            <Table>
              <thead className="grey lighten-5">
                <tr key="02:45pm - 03:45pm">
                <th data-field="Party Name">{this.state.spanish === false ? "Party Name" : "Nombre del Grupo"}</th>
                <th data-field="Party Size">{this.state.spanish === false ? "Party Size" : "Tamaño del Grupo"}</th>
                </tr>
              </thead>
              <tbody className="grey lighten-5">
                {party4.map((party) => {
                  return (
                    <tr key={party._id}>
                      <td>{party.partyName}</td>
                      <td>{party.partySize}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Row className="pink-row center-align">
              <h5>04:00pm - 05:00pm</h5>
            </Row>
            <Table>
              <thead className="grey lighten-5">
                <tr key="04:00pm - 05:00pm">
                <th data-field="Party Name">{this.state.spanish === false ? "Party Name" : "Nombre del Grupo"}</th>
                <th data-field="Party Size">{this.state.spanish === false ? "Party Size" : "Tamaño del Grupo"}</th>
                </tr>
              </thead>
              <tbody className="grey lighten-5">
                {party5.map((party) => {
                  return (
                    <tr key={party._id}>
                      <td>{party.partyName}</td>
                      <td>{party.partySize}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Row className="pink-row center-align">
              <h5>05:15pm - 06:15pm</h5>
            </Row>
            <Table>
              <thead className="grey lighten-5">
                <tr key="05:15pm - 06:15pm">
                <th data-field="Party Name">{this.state.spanish === false ? "Party Name" : "Nombre del Grupo"}</th>
                <th data-field="Party Size">{this.state.spanish === false ? "Party Size" : "Tamaño del Grupo"}</th>
                </tr>
              </thead>
              <tbody className="grey lighten-5">
                {party6.map((party) => {
                  return (
                    <tr key={party._id}>
                      <td>{party.partyName}</td>
                      <td>{party.partySize}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewParties;
