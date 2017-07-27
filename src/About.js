import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="arrow">
        <a className = "underline">
          ←
          </a>
        </Link>
        <h3>
          Somerset is a duo consisting of Ayodeji Ogunlana & Gian Nazario. It is
          a platform for releases and hosting creative content.
        </h3>
        <br />
        <h3>Credits</h3>
        <ul>
          <li>
            <b>September</b>
          </li>
          <p>
            <i>
              Written & Directed by Somerset<br />
              Starring: Klay Teegardin & Erika Mercado
              <br />
              Director Of Photography & Editor: Ayodeji Ogunlana
              <br />
              Story & Music by GN.
              <br />
            </i>
          </p>
          <li>
            <b>Unreal Archives, Vol. 1</b>
          </li>
          <p>
            <i>
              Written, Directed, and Edited by Ayodeji Ogunlana <br /> Director
              Of Photography: Kyle Sapla & Adedayo Ogunlana <br />
              Additional footage from Erika Mercado <br />
              Footage used from "Self Therapy Sessions", a Gian Nazario film
              <br />
            </i>
          </p>
          <li>
            <b>Self Therapy Sessions</b>
          </li>
          <p>
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
          </p>
        </ul>
      </div>
    );
  }
}

export default About;