import React from "react";
import { Box } from "theme-ui";

const Inspector = props => (
  <Box variant="card" mx={-4} my={2} pt={2}>
    {props.children}
  </Box>
);

export default Inspector;
