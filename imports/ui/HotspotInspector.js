import { Box, Button, Text, Heading } from "rebass";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React from "react";
import { Select } from "@rebass/forms";
import { backgrounds } from "../utils/manifest";

const HotspotInspector = props => (
  <Box>
    <Heading>Hotspot Inspector</Heading>
    <Box mb={1}>
      <FormField
        type="number"
        param="width"
        method="hotspots.update"
        {...props.hotspot}
      />
      <FormField
        type="number"
        param="height"
        method="hotspots.update"
        {...props.hotspot}
      />
      <FormField
        type="number"
        param="x"
        method="hotspots.update"
        {...props.hotspot}
      />
      <FormField
        type="number"
        param="y"
        method="hotspots.update"
        {...props.hotspot}
      />
    </Box>
    <Box mb={1}>
      <Select
        onChange={event =>
          Meteor.call("hotspots.update", props.hotspot._id, {
            link: event.target.value
          })
        }
      >
        <option value={null}>None</option>
        {props.scenes.map(scene => (
          <option key={scene._id} value={scene._id}>
            {scene.name} {scene._id}
          </option>
        ))}
      </Select>
    </Box>

    <Button
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this hotspot?")) {
          Meteor.call("hotspots.delete", props.hotspot._id);
        }
      }}
    >
      Delete
    </Button>
  </Box>
);

HotspotInspector.propTypes = {
  hotspot: PropTypes.object,
  scenes: PropTypes.array
};

export default HotspotInspector;
