import React from "react";
import { Box, Text } from "rebass";
import { Input } from "@rebass/forms";
import PropTypes from "prop-types";

const FormField = props => (
  <Box>
    <Text>{props.label}</Text>
    <Input type={props.type} />
  </Box>
);

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "color"])
};

export default FormField;
