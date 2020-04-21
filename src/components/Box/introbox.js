import React from "react";
import "./box.css";

import { Image, Button, Icon } from "semantic-ui-react";

import img from "../../images/back.png";

function introbox() {
  return (
    <div className="introbox">
      <div className="info" style={{ position: "absolute" }}>
        <h1>Come drink the Kool-aid!</h1>
        <p>
          Hello there! Feel free to explore the site. You can download my CV
          from below.
        </p>
        <Button basic color="black" className="cvButton">
          <Icon name="download" />
          DOWNLOAD CV
        </Button>
      </div>
      <Image src={img} className="image" style={{ position: "absolute" }} />
    </div>
  );
}

export default introbox;
