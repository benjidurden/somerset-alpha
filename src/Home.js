import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import September from "./September";
import Trilogy from "./Trilogy";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color: "orange"
};

class Home extends Component {
  render() {
    return (
      <div style={styles}>
        <img
          src="http://i.imgur.com/S4g0E2v.jpg"
          alt="somersetLogo"
          className="somersetIcon"
        />
        <li className = "aboutlist">
          <Link to="/about/" className="about">
            <a className = "underline">About</a>
          </Link></li>
        <h2>
          <a href="mailto:contact@somersetproductions.co">Contact</a>
        </h2>
        <Link to = "/september/">
        <img
          src="http://i.imgur.com/JPRCqmS.png"
          alt="septemberLogo"
          className="septemberIcon"
        />
        </Link>
        <Link to = "/trilogy/">
        <img
          src="http://i.imgur.com/BEDChzk.png"
          alt="trilogyLogo"
          className="trilogyIcon"
        />
        </Link>
      </div>
    );
  }
}

export default Home;
