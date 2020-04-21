import React from "react";
import "./sidepanel.css";

import { Image } from "semantic-ui-react";

import src from "../../images/logo.png";

function sidePanel() {
  return (
    <div className="sidepanel">
      <Image src={src} style={{ height: 120, width: 120, margin: "auto" }} />
      <h2>Gayanga Kuruppu</h2>
      <p className="description">
        HUMAN FROM{" "}
        <a href="https://en.wikipedia.org/wiki/Sri_Lanka">SRI LANKA</a>
      </p>
      <ul className="parts">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT</a>
        </li>
        <li>
          <a href="/">MUSIC</a>
        </li>
        <li>
          <a href="/">PROJECTS</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
      <div className="footer">
        <p>Made by Gayanga Kuruppu | 2020</p>
      </div>
    </div>
  );
}

export default sidePanel;
