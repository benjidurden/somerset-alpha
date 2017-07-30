import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
 fontFamily: 'Raleway',
}

class About extends Component {
  render() {
    return (
      <div className = "animated fadeIn" style = {styles}>
        <Link to="/" className="arrow">
        <a className = "underline"><span>
          ←</span>
          </a>
        </Link>
        <p className = "somersetInfo">
          <b>Somerset Productions is a duo consisting of Ayodeji Ogunlana & Gian Nazario. It is
          a platform for releasing and hosting creative content.</b>
        </p>
        <br />
        <h3>Credits</h3>
        <ul className = "listcontainer">
          <li>
           <b>September</b>
          </li>
          <p><b>
            <i>
              Written & Directed by Somerset<br />
              Starring: Klay Teegardin & Erika Mercado
              <br />
              Director Of Photography & Editor: Ayodeji Ogunlana
              <br />
              Story by Gian Nazario
              <br />
              Music by GN. & Money Korine
              <br />
            </i>
            </b>
          </p>
          <li>
            <b>Unreal Archives, Vol. 1</b>
          </li>
          <p>
            <b>
            <i>
              Written, Directed, and Edited by Ayodeji Ogunlana <br /> Director
              Of Photography: Kyle Sapla & Adedayo Ogunlana <br />
              Additional footage from Erika Mercado <br />
              Footage used from 'Self Therapy Sessions', a Gian Nazario film
              <br />
            </i>
            </b>
          </p>
          <li>
            <b>Self Therapy Sessions</b>
          </li>
          <p>
            <b>
            <i>
              Written & Directed by Gian Nazario
              <br />
              Produced by Twin Lake
              <br />
              Color & Edit by Ayodeji Ogunlana
              <br />
              Art Direction & Arrangement by Gian Nazario
              <br />
              Design Work by Money Korine <br />
            </i>
            </b>
          </p>
        </ul>
        <div>
                <img
          src="http://i.imgur.com/mX70mmc.png"
          alt="somersetPoster"
          className="somersetPoster"
          width = "800"
          height = "800"
        />
        </div>
      </div>
    );
  }
}

export default About;
