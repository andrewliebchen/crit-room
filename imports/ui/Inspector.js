import React from "react";
import { Card } from "theme-ui";

const Inspector = props => (
  <Card mx={-4} my={2} pt={2}>
    {props.children}
  </Card>
);

export default Inspector;
