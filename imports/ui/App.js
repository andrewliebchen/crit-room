import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ThemeProvider } from "theme-ui";
import Login from "./Login";
import Prototype from "./Prototype";
import PrototypesList from "./PrototypesList";
import React from "react";
import theme from "../utils/theme";

const App = props => (
  <ThemeProvider theme={theme}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Route path="/login" component={Login} />
        <Route path="/prototypes/:id" component={Prototype} />
        <Route path="/" exact component={PrototypesList} />
      </QueryParamProvider>
    </Router>
  </ThemeProvider>
);

export default App;
