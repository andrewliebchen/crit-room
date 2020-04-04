import { Box, Button, Text, Heading, Flex } from "rebass";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React from "react";
import { Select, Label } from "@rebass/forms";
import Inspector from "./Inspector";

const HotspotInspector = props => (
  <Inspector>
    <FormField
      type="text"
      param="name"
      method="hotspots.update"
      {...props.hotspot}
    />
    <Box mb={3}>
      <Label>Target</Label>
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
    <Flex mr={-1}>
      <FormField
        type="number"
        mr={1}
        param="width"
        method="hotspots.update"
        {...props.hotspot}
      />
      <FormField
        type="number"
        mr={1}
        param="height"
        method="hotspots.update"
        {...props.hotspot}
      />
    </Flex>
    <Flex mr={-1}>
      <FormField
        type="number"
        mr={1}
        param="x"
        method="hotspots.update"
        {...props.hotspot}
      />
      <FormField
        type="number"
        mr={1}
        param="y"
        method="hotspots.update"
        {...props.hotspot}
      />
    </Flex>
    <Button
      width={1}
      mt={3}
      variant="secondary"
      color="negative"
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this hotspot?")) {
          Meteor.call("hotspot.delete", props.hotspot._id);
        }
      }}
    >
      Delete
    </Button>
  </Inspector>
);

HotspotInspector.propTypes = {
  hotspot: PropTypes.object,
  scenes: PropTypes.array
};

export default HotspotInspector;
