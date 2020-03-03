import { Box, Text, Heading, Button, Flex } from "rebass";
import { Meteor } from "meteor/meteor";
import Pane from "./Pane";
import PropTypes from "prop-types";
import React from "react";

const SceneList = props => (
  <Pane
    title="Scenes"
    onAdd={() => Meteor.call("scenes.create", props.prototypeId)}
  >
    {props.scenes.length > 0 ? (
      props.scenes.map(scene => {
        const isSelected = props.selectedScene === scene._id;
        return (
          <Box
            key={scene._id}
            variant="listItem"
            bg={isSelected && "primary"}
            color={isSelected && "white"}
            onClick={props.onSelect.bind(null, isSelected ? null : scene._id)}
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
  </Pane>
);

SceneList.propTypes = {
  onSelect: PropTypes.func,
  prototypeId: PropTypes.string,
  scenes: PropTypes.array,
  selectedScene: PropTypes.string
};

export default SceneList;
