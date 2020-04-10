import React from "react";
import { Text, Flex } from "theme-ui";
import { Centered } from "./Helpers";

const Loading = props =>
  props.ready ? (
    <div>{props.children}</div>
  ) : (
    <Centered>
      <Text>Loading...</Text>
    </Centered>
  );

export default Loading;
