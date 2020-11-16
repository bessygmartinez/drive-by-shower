import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Register from "./components/Auth/Register";
import ViewParties from "./components/ViewParties";
import SeeYou from "./components/SeeYou";

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "materialize-css";
import { Row, Col } from "react-materialize";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class App extends Component {
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
  
  render() {
    return (
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          role="alert"
          transition={Flip}
          style={{ zIndex: "11000" }}
        />

          <Provider store={store}>
            <Router>
              <Nav />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/viewparties" component={ViewParties} />
                <Route exact path="/seeyou" component={SeeYou} />
              </Switch>
            </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
