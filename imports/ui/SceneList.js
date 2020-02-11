import React from "react";
import { Box, Text, Heading, Button } from "rebass";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

const SceneList = props => (
  <Box>
    <Heading>Scenes</Heading>
    <Button onClick={() => Meteor.call("scenes.create", props.prototypeId)}>
      New scene
    </Button>
    {props.scenes.length > 0 ? (
      props.scenes.map(scene => {
        const isSelected = props.selectedScene === scene._id;
        return (
          <Box
            key={scene._id}
            bg={isSelected && "blue"}
            color={isSelected && "white"}
            onClick={props.onSelect.bind(null, scene._id)}
            p={1}
          >
            <Text>
              {scene.name} {scene._id}
            </Text>
          </Box>
        );
      })
    ) : (
      <Text>Loading</Text>
    )}
  </Box>
);

SceneList.propTypes = {
  scenes: PropTypes.array,
  selectedScene: PropTypes.string,
  onSelect: PropTypes.func
};

export default SceneList;
