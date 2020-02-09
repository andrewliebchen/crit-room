import React from "react";
import { Flex, Box, Text } from "rebass";
import { Input } from "@rebass/forms";
import PropTypes from "prop-types";

const FormField = props => (
  <Box>
    <Text>{props.param}</Text>
    <Flex>
      <Input
        type={props.type}
        value={props[props.param]}
        onChange={event => {
          let args = {};
          args[props.param] = event.target.value;
          Meteor.call("panels.update", props._id, args);
        }}
      />
    </Flex>
  </Box>
);

FormField.propTypes = {
  _id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "color", "url"])
};

export default FormField;
