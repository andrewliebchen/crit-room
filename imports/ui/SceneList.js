import React from "react";
import { Box, Text, Heading, Button } from "rebass";
import { Meteor } from "meteor/meteor";

const SceneList = props => (
  <Box>
    <Heading>Scenes</Heading>
    <Button onClick={() => Meteor.call("scenes.create", props.parentId)}>
      New scene
    </Button>
    {props.scenes.length > 0 ? (
      props.scenes.map(scene => (
        <Box key={scene._id}>
          <Text>{scene._id}</Text>
        </Box>
      ))
    ) : (
      <Text>Loading</Text>
    )}
  </Box>
);

export default SceneList;
