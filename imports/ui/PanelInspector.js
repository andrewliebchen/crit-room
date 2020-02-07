import React from "react";
import FormField from "./FormField";
import { Text, Heading, Button, Flex, Box } from "rebass";

const PanelInspector = props => (
  <Box>
    <Heading>Panel inspector</Heading>
    <Box mb={1}>
      <FormField label="Name" type="text" />
      <FormField label="Image URL" type="text" />
      <FormField label="Color" type="color" />
    </Box>
    <Box mb={1}>
      <Text>Size</Text>
      <FormField label="Width" type="number" />
      <FormField label="Height" type="number" />
      <FormField label="Depth" type="number" />
    </Box>
    <Box>
      <Flex>
        <Button>X</Button>
        <Button>Y</Button>
        <Button>Z</Button>
      </Flex>
      <FormField label="Position" type="number" />
      <FormField label="Rotation" type="number" />
    </Box>
  </Box>
);

export default PanelInspector;
