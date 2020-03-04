import React from "react";
import { Box } from "rebass";

const Inspector = props => (
  <Box variant="card" mx={-4} my={1}>
    {props.children}
  </Box>
);

export default Inspector;
