import React from "react";
import { Flex, Input, Label } from "theme-ui";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

const FormField = props => (
  <Box mr={props.mr} mt={2}>
    <Label>{props.param}</Label>
    <Flex>
      <Input
        type={props.type}
        defaultValue={props[props.param]}
        onChange={event => {
          let args = {};
          args[props.param] = event.target.value;
          Meteor.call(props.method, props._id, args);
        }}
      />
    </Flex>
  </Box>
);

FormField.propTypes = {
  _id: PropTypes.string,
  param: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "color", "url"]),
  method: PropTypes.string
};

export default FormField;
