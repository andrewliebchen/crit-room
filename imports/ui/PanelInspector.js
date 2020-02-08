import React from "react";
import FormField from "./FormField";
import { Text, Heading, Button, Flex, Box } from "rebass";
import PropTypes from "prop-types";

const PanelInspector = props => (
  <Box>
    <Heading>Panel inspector</Heading>
    {/* <Box mb={1}>
      <FormField label="Name" type="text" />
      <FormField label="Image URL" type="text" />
      <FormField label="Color" type="color" />
    </Box> */}
    <Box mb={1}>
      <Text>Size</Text>
      <FormField type="number" param="width" panel={props.panel} />
      {/* <FormField label="Height" type="number" value={props.panel.height} />
      <FormField label="Depth" type="number" value={props.panel.depth} /> */}
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
