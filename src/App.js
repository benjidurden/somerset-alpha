import React, { Component } from 'react';
import './App.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Trilogy from "./Trilogy";
import September from "./September";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/trilogy/" component={Trilogy} />
            <Route exact path="/september/" component={September} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;