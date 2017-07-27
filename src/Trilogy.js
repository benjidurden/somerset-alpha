import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  width: "100%",
  height: "100%",
  width: "1280px",
  height: "720px",
  float: "none",
  clear: "both",
  margin: "2px auto"
};

class Trilogy extends Component {
  render() {
    return (
      <div className="video-container">
        <Link to="/" className="arrow">
        <a className = "underline">
          ←
          </a>
        </Link>
        <h1>September Trilogy</h1>
        <object
          style={styles}
          data="https://www.youtube.com/embed/8ZRVGnkSAnk?list=PLc2w7lxyt6T8fQzsg93ZXRJlgz05ihK2H&rel=0"
          allowFullScreen="allowFullScreen"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default Trilogy;
