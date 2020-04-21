import React, { Component } from "react";
import SidePanel from "../components/SidePanel/sidepanel";
import Content from "../components/Content/content";
import "../App.css";

import { Grid, Container } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <Container style={{ marginLeft: "20%", marginRight: "20%" }}>
        <Grid className="shadow">
          <Grid.Column width={5}>
            <SidePanel />
          </Grid.Column>
          <Grid.Column width={11}>
            <Content />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Home;
