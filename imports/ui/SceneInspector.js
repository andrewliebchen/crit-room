import { backgrounds } from "../utils/manifest";
import { Box, Button, Label, Select } from "theme-ui";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import Inspector from "./Inspector";
import PropTypes from "prop-types";
import React from "react";

const SceneInspector = props => (
  <Inspector>
    <FormField
      type="text"
      param="name"
      method="scenes.update"
      {...props.scene}
    />
    <Box>
      <Label>Background</Label>
      <Select
        defaultValue={props.scene.background}
        onChange={event =>
          Meteor.call("scenes.update", props.scene._id, {
            background: event.target.value
          })
        }
      >
        {Object.keys(backgrounds).map(label => (
          <option key={label} value={label}>
            {backgrounds[label].name}
          </option>
        ))}
      </Select>
    </Box>
    <Button
      mt={3}
      variant="secondary"
      color="negative"
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this scene?")) {
          Meteor.call("scenes.delete", props.scene._id);
        }
      }}
    >
      Delete
    </Button>
  </Inspector>
);

SceneInspector.propTypes = {
  scene: PropTypes.object
};

export default SceneInspector;
