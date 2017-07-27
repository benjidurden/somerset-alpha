import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  width: "100%",
  height: "100%",
  width: "800px",
  height: "720px",
  float: "none",
  clear: "both",
  margin: "2px auto"
};

class September extends Component {
  render() {
    return (
      <div className="video-container">
        <Link to="/" className="arrow">
        <a className = "underline">
          ←
          </a>
        </Link>
        <h1>September</h1>
        <object
          style={styles}
          data="https://www.youtube.com/embed/yQbOrE6woB8?rel=0"
          allowFullScreen="allowFullScreen"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default September;
