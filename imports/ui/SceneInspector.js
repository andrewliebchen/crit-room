import { backgrounds } from "../utils/manifest";
import { Box, Button } from "rebass";
import { Label } from "@rebass/forms";
import { Meteor } from "meteor/meteor";
import { Select } from "@rebass/forms";
import FormField from "./FormField";
import Inspector from "./Inspector";
import PropTypes from "prop-types";
import React from "react";

const SceneInspector = props => (
  <Inspector>
    <Box mb={1}>
      <FormField
        type="text"
        param="name"
        method="scenes.update"
        {...props.scene}
      />
    </Box>
    <Box mb={1}>
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
  </Inspector>
);

SceneInspector.propTypes = {
  scene: PropTypes.object
};

export default SceneInspector;
