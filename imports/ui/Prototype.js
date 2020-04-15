import { Box } from "theme-ui";
import Canvas from "./Canvas";
import Pane from "./Pane";
import React from "react";
import Header from "./Header";

const Prototype = () => (
  <Box>
    <Canvas />
    <Box
      sx={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1
      }}
    >
      <Header />
      <Pane />
    </Box>
  </Box>
);

export default Prototype;
