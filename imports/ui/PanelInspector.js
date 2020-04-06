import { Text, Heading, Button, Flex, Box } from "rebass";
import DimensionInput from "./DimensionInput";
import FormField from "./FormField";
import Inspector from "./Inspector";
import PropTypes from "prop-types";
import React, { useState } from "react";

const axes = ["x", "y", "z"];

const PositionFields = props => (
  <Flex mr={-1}>
    <FormField
      type="number"
      mr={1}
      param={`${props.axis}Position`}
      method="panels.update"
      {...props.panel}
    />
    <FormField
      type="number"
      mr={1}
      param={`${props.axis}Rotation`}
      method="panels.update"
      {...props.panel}
    />
  </Flex>
);

const PanelInspector = props => {
  const [selectedAxis, setSelectedAxis] = useState(axes[0]);

  return (
    <Inspector>
      <FormField
        type="text"
        param="name"
        method="panels.update"
        {...props.panel}
      />
      <DimensionInput {...props.panel} />
      <Box mt={3}>
        <Flex mr={-1}>
          {axes.map(axis => (
            <Button
              key={axis}
              variant={axis === selectedAxis ? "primary" : "secondary"}
              onClick={() => setSelectedAxis(axis)}
              mr={1}
              width={1}
              sx={{ textTransform: "uppercase" }}
            >
              {axis}
            </Button>
          ))}
        </Flex>
        {selectedAxis === axes[0] && (
          <PositionFields axis={axes[0]} {...props} />
        )}
        {selectedAxis === axes[1] && (
          <PositionFields axis={axes[1]} {...props} />
        )}
        {selectedAxis === axes[2] && (
          <PositionFields axis={axes[2]} {...props} />
        )}
      </Box>
      <Button
        width={1}
        mt={3}
        variant="secondary"
        color="negative"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this panel?")) {
            Meteor.call("panels.delete", props.panel._id);
          }
        }}
      >
        Delete
      </Button>
    </Inspector>
  );
};

PanelInspector.propTypes = {
  panel: PropTypes.object
};

export default PanelInspector;
