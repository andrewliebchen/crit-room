import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { Flex, Box, Text, Heading } from "rebass";
import SceneList from "./SceneList";
import Canvas from "./Canvas";

const Prototype = props => {
  if (props.prototype) {
    const [selectedScene, setSelectedScene] = useState(props.scenes[0]._id);
    return (
      <Flex>
        <Canvas scenes={props.scenes} />
        <Box sx={{ position: "fixed", zIndex: 1 }}>
          <Box mb={3}>
            <Heading>Prototype info</Heading>
            <Text>ID: {props.prototype._id}</Text>
          </Box>
          <Box mb={3}>
            <SceneList
              parentId={props.prototype._id}
              scenes={props.scenes}
              selected={selectedScene}
              onSelect={id => setSelectedScene(id)}
            />
          </Box>
        </Box>
      </Flex>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

export default withTracker(props => {
  const id = props.match.params.id;
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ parentId: id }).fetch()
  };
})(Prototype);
