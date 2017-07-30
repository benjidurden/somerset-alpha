import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Countdown from 'react-countdown-now';
import TrilogyVideo from './TrilogyVideo';

const styles = {
  width: "100%",
  height: "100%",
  width: "800px",
  height: "720px",
  float: "none",
  clear: "both",
  margin: "2px auto"
};

const renderer =  ({hours, minutes, seconds, completed}) => {
  if (completed) {
   document.getElementById("timer").style.display = "none";
   return <Redirect to = "/trilogy/premiere/" />
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};


class Trilogy extends Component {
   constructor(props){
   super(props);
    this.state = {
     showWebsite: false,
    }
    this.fadeOut = this.fadeOut.bind(this);
    this.startDate = new Date (1501369200000 * 2.4)
  }
   componentDidMount = () => {
  setInterval(() => this.checkTime(), 1000)
   }
  fadeOut = () => {
    this.setState({redirect: true});
    document.body.className = this.state.redirect
  }
  checkTime = () => {
    if (Date.now() >= this.startDate){
      this.setState({redirect: true})
    }
  }
  render() {
    return (
      <div id = "timer">
        <Link to="/" className="arrow">
        <a className = "underline"><span id = "timer-direct">
          ←</span>
          </a>
        </Link>
        <object className = "timerInput">
        <Countdown date = {new Date(15013692000000 * 2.4)} renderer = {renderer}/>
        </object>
      </div>
    );
  }
}

export default Trilogy;

