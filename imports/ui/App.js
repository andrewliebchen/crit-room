import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ThemeProvider } from "theme-ui";
import Login from "./Login";
import Profile from "./Profile";
import Prototype from "./Prototype";
import PrototypesList from "./PrototypesList";
import React from "react";
import theme from "../utils/theme";
import PrototypeProvider from "./PrototypeProvider";

const App = props => (
  <ThemeProvider theme={theme}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Route path="/login" component={Login} />
        <Route
          path="/prototypes/:id"
          render={routeProps => (
            <PrototypeProvider {...routeProps}>
              <Prototype />
            </PrototypeProvider>
          )}
        />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={PrototypesList} />
      </QueryParamProvider>
    </Router>
  </ThemeProvider>
);

export default App;
