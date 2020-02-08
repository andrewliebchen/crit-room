import React, { useState } from "react";
import { Flex, Box, Text, Link } from "rebass";
import { Input } from "@rebass/forms";
import PropTypes from "prop-types";

const FormField = props => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(props.panel[props.param]);

  return (
    <Box>
      <Flex>
        <Text>{props.param}</Text>
        {editing ? (
          <Link
            onClick={() => {
              let args = {};
              args[props.param] = value;
              console.log(args);
              Meteor.call("panels.update", props.panel._id, args);
              setEditing(false);
            }}
          >
            Save
          </Link>
        ) : (
          <Link onClick={() => setEditing(true)}>Edit</Link>
        )}
      </Flex>
      {editing ? (
        <Input
          type={props.type}
          defaultValue={value}
          onChange={event => setValue(event.target.value)}
        />
      ) : (
        <Text>{props.panel[props.param]}</Text>
      )}
    </Box>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "color"])
};

export default FormField;
