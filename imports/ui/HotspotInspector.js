import { Box, Button, Text, Heading } from "rebass";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React from "react";
import { Select } from "@rebass/forms";
import Inspector from "./Inspector";

const HotspotInspector = props => (
  <Inspector>
    <FormField
      type="text"
      param="name"
      method="hotspots.update"
      {...props.hotspot}
    />
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
  </Inspector>
);

HotspotInspector.propTypes = {
  hotspot: PropTypes.object,
  scenes: PropTypes.array
};

export default HotspotInspector;
