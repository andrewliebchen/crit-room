import { Box, Text, Heading, Button, Flex } from "rebass";
import { Meteor } from "meteor/meteor";
import Pane from "./Pane";
import PropTypes from "prop-types";
import React from "react";
import SceneInspector from "./SceneInspector";

// Figure out how to make using the inspector easier. Maybe context?

const SceneList = props => (
  <Pane
    title="Scenes"
    onAdd={() => Meteor.call("scenes.create", props.prototypeId)}
    selectedItem={props.selectedSceneId}
    items={props.scenes}
    inspector={
      <SceneInspector
        scene={props.scenes.find(scene => scene._id === props.selectedSceneId)}
      />
    }
    {...props}
  />
);

SceneList.propTypes = {
  onSelect: PropTypes.func,
  prototypeId: PropTypes.string,
  scenes: PropTypes.array,
  selectedSceneId: PropTypes.string
};

export default SceneList;
