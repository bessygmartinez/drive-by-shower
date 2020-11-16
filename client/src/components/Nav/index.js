import React, { Component } from "react";
import { Row, Col, Navbar, NavItem, Icon } from "react-materialize";

import RainbowShower from "./RainbowShower.png";
import RainbowShowerWShadow from "./RainbowShower_wShadow.png";


class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar
          alignLinks="right"
          brand={
            <a className="brand-logo" href="/">
              <img src={RainbowShower} width="200vw" style={{zIndex: -100}} className="d-inline-block responsive-img" alt="Drive-By Baby Shower" />
            </a>
          }
          id="mobile-nav"
          centerLogo
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: false,
          }}
        >
          <NavItem href="/register">Reserve Your Time</NavItem>
          <NavItem href="/viewparties">View Reserved Schedule</NavItem>
          <NavItem><img src={RainbowShowerWShadow} width="130vw" className="hide-img responsive-img" alt="Drive-By Baby Shower" /></NavItem>
        </Navbar>
        <br/>
        <Row>
            <Col s={12} className="center-align"><br/><br/>
                <h3 className="rochester">Drive-by Baby Shower</h3>
                </Col>
        </Row>
      </div>
    );
  }
}

export default Nav;
