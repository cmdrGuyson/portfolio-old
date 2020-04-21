import React, { Fragment } from "react";
import IntroBox from "../Box/introbox";
import AboutBox from "../Box/aboutbox";
import MusicBox from "../Box/musicbox";

function content() {
  return (
    <Fragment>
      <IntroBox />
      <AboutBox />
      <MusicBox />
    </Fragment>
  );
}

export default content;
