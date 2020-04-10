import React from "react";
import { Flex } from "theme-ui";

export const Centered = props => (
  <Flex
    sx={{
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }}
  >
    {props.children}
  </Flex>
);
