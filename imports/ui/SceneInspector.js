import { Box, Button, Text, Heading } from "rebass";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React from "react";

const SceneInspector = props => (
  <Box>
    <Heading>Scene Inspector</Heading>
    <Box mb={1}>
      <FormField
        type="text"
        param="name"
        method="scenes.update"
        {...props.scene}
      />
    </Box>
    <Button
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this scene?")) {
          Meteor.call("scenes.delete", props.scene._id);
        }
      }}
    >
      Delete
    </Button>
  </Box>
);

SceneInspector.propTypes = {
  scene: PropTypes.object
};

export default SceneInspector;
