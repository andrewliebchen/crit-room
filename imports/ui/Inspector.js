import React from "react";
import { Box } from "rebass";

const Inspector = props => (
  <Box variant="card" mx={-4} my={2} pt={2}>
    {props.children}
  </Box>
);

export default Inspector;
