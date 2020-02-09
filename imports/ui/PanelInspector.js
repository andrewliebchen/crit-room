import React from "react";
import FormField from "./FormField";
import { Text, Heading, Button, Flex, Box } from "rebass";
import PropTypes from "prop-types";

const PanelInspector = props => (
  <Box>
    <Heading>Panel inspector</Heading>
    <Box mb={1}>
      <FormField type="text" param="name" {...props.panel} />
      <FormField type="url" param="src" {...props.panel} />
    </Box>
    <Box mb={1}>
      <Text>Size</Text>
      <FormField type="number" param="width" {...props.panel} />
      <FormField type="number" param="height" {...props.panel} />
      <FormField type="number" param="depth" {...props.panel} />
    </Box>
    {/* <Box>
      <Flex>
        <Button>X</Button>
        <Button>Y</Button>
        <Button>Z</Button>
      </Flex>
      <FormField label="Position" type="number" />
      <FormField label="Rotation" type="number" />
    </Box> */}
  </Box>
);

PanelInspector.propTypes = {
  panel: PropTypes.object
};

export default PanelInspector;
