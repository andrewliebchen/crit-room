import { Text, Heading, Button, Flex, Box } from "rebass";
import DimensionInput from "./DimensionInput";
import FormField from "./FormField";
import Inspector from "./Inspector";
import PropTypes from "prop-types";
import React, { useState } from "react";

const axes = ["x", "y", "z"];

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
      <FormField
        type="url"
        param="src"
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
