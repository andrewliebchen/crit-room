import React, { useState } from "react";
import FormField from "./FormField";
import { Text, Heading, Button, Flex, Box } from "rebass";
import PropTypes from "prop-types";

const axes = ["x", "y", "z"];

const PanelInspector = props => {
  const [selectedAxis, setSelectedAxis] = useState(axes[0]);

  return (
    <Box variant="card" mx={-4} my={1}>
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
      <Box mb={1}>
        <Text>Size</Text>
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
      </Box>
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
      <Button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this panel?")) {
            Meteor.call("panels.delete", props.panel._id);
          }
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

PanelInspector.propTypes = {
  panel: PropTypes.object
};

export default PanelInspector;
