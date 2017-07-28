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
      <div className="vidcontainer">
        <Link to="/" className="arrow">
        <a className = "theatre_underline">
          ←
          </a>
        </Link>
        <div className = "spacing">
        </div>
       <iframe width="853" height="480" width="100%" title="premiere"
       src="https://www.youtube.com/embed/yQbOrE6woB8?rel=0" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}

export default September;
