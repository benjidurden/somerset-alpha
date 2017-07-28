import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import Countdown from 'react-countdown-now';
import SeptemberVideo from './SeptemberVideo.js';

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
   return <Redirect to = "/september/premiere/" />
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};


class September extends Component {
   constructor(props){
   super(props);
    this.state = {
     showWebsite: false,
    }
    this.fadeOut = this.fadeOut.bind(this);
    this.startDate = Date.now() + 5000
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
        <object className = "timerInput">
        <Countdown date = {Date.now() + 5000} renderer = {renderer}/>
        </object>
      </div>
    );
  }
}

export default September;
