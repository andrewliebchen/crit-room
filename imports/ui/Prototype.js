import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { Flex, Box, Text, Heading } from "rebass";
import SceneList from "./SceneList";
import Canvas from "./Canvas";

const Prototype = props => (
  <Box>
    {props.prototype ? (
      <Flex>
        <Canvas scenes={props.scenes} />
        <Box sx={{ position: "fixed", zIndex: 1 }}>
          <Box>
            <Heading>Prototype info</Heading>
            <Text>ID: {props.prototype._id}</Text>
          </Box>
          <SceneList parentId={props.prototype._id} scenes={props.scenes} />
        </Box>
      </Flex>
    ) : (
      <Flex>Loading...</Flex>
    )}
  </Box>
);

export default withTracker(props => {
  const id = props.match.params.id;
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ parentId: id }).fetch()
  };
})(Prototype);
