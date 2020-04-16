import React from "react";
import { controlHeight } from "../utils/theme";
import { Box, Text } from "theme-ui";

const InlineLabelInput = props => (
  <Box sx={{ position: "relative" }}>
    <Text
      sx={{
        position: "absolute",
        mx: 2,
        alignItems: "center",
        color: "secondaryText",
        lineHeight: `${controlHeight}px`
      }}
    >
      {props.label}
    </Text>
    {props.children}
  </Box>
);

export default InlineLabelInput;
