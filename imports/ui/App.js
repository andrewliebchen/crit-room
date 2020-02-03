import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "rebass";
import { Meteor } from "meteor/meteor";
import { ThemeProvider } from "theme-ui";
import Prototype from "./Prototype";
import PrototypesList from "./PrototypesList";
import React from "react";
import theme from "../utils/theme";

const App = props => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/:id" component={Prototype} />
      <Route path="/" exact component={PrototypesList} />
    </Router>
  </ThemeProvider>
);

export default App;
