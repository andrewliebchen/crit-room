import React from "react";
import { Meteor } from "meteor/meteor";
import { Button } from "rebass";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";
import RoomsList from "./RoomsList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Room from "./Room";

const App = props => (
  <ThemeProvider theme={theme}>
    <Button onClick={() => Meteor.call("rooms.create")}>Create room</Button>
    <Router>
      <Route path="/:id" component={Room} />
      <Route path="/" exact component={RoomsList} />
    </Router>
  </ThemeProvider>
);

export default App;
