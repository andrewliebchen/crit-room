import { Text, Heading, Button, Flex, Box } from "rebass";
import FormField from "./FormField";
import Inspector from "./Inspector";
import PropTypes from "prop-types";
import React, { useState } from "react";

const axes = ["x", "y", "z"];

const PanelInspector = props => {
  const [selectedAxis, setSelectedAxis] = useState(axes[0]);

  return (
    <Inspector>
      <Box mb={1}>
        <FormField
          type="text"
          param="name"
          method="panels.update"
          {...props.panel}
        />
        <FormField
          type="url"
          param="src"
          method="panels.update"
          {...props.panel}
        />
      </Box>
      <FormField
        type="number"
        param="width"
        method="panels.update"
        {...props.panel}
      />
      <FormField
        type="number"
        param="height"
        method="panels.update"
        {...props.panel}
      />
      <FormField
        type="number"
        param="depth"
        method="panels.update"
        {...props.panel}
      />
      <Box mb={1}>
        <Flex>
          {axes.map(axis => (
            <Button
              key={axis}
              bg={axis === selectedAxis ? "blue" : "gray"}
              onClick={() => setSelectedAxis(axis)}
              mr={1}
            >
              {axis}
            </Button>
          ))}
        </Flex>
        <FormField
          type="number"
          param={`${selectedAxis}Position`}
          method="panels.update"
          {...props.panel}
        />
        <FormField
          type="number"
          param={`${selectedAxis}Rotation`}
          method="panels.update"
          {...props.panel}
        />
      </Box>
    </Inspector>
  );
};

PanelInspector.propTypes = {
  panel: PropTypes.object
};

export default PanelInspector;
