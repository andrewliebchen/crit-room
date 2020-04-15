import { Centered } from "./Helpers";
import { Text, Flex } from "theme-ui";
import React from "react";

const Loading = props =>
  props.ready ? (
    <div>{props.children}</div>
  ) : (
    <Centered>
      <Text>Loading...</Text>
    </Centered>
  );

export default Loading;
