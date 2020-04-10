import React from "react";
import { Text, Flex } from "theme-ui";

const Loading = props =>
  props.ready ? (
    <div>{props.children}</div>
  ) : (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh"
      }}
    >
      <Text>Loading...</Text>
    </Flex>
  );

export default Loading;
