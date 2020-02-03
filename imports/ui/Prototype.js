import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";
import { Flex, Box, Text, Heading } from "rebass";
import SceneList from "./SceneList";

const Prototype = props => (
  <Box>
    {props.prototype ? (
      <Box>
        <Box>
          <Heading>Prototype info</Heading>
          <Text>ID: {props.prototype._id}</Text>
        </Box>
        <SceneList parentId={props.prototype._id} />
      </Box>
    ) : (
      <Flex>Loading...</Flex>
    )}
  </Box>
);

export default withTracker(props => {
  return {
    prototype: Prototypes.findOne(props.match.params.id)
  };
})(Prototype);
