import { Box, Button } from "rebass";
import { Label } from "@rebass/forms";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React from "react";
import { Select } from "@rebass/forms";
import { backgrounds } from "../utils/manifest";

const SceneInspector = props => (
  <Box variant="card" mx={-4} my={1}>
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
  </Box>
);

SceneInspector.propTypes = {
  scene: PropTypes.object
};

export default SceneInspector;
