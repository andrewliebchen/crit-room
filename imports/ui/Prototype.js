import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";
import { Flex, Box } from "rebass";

const Prototype = props => (
  <Box>
    {props.prototype ? (
      <Flex>
        <ul>
          <li>ID: {props.prototype._id}</li>
        </ul>
      </Flex>
    ) : (
      <Flex>Loading...</Flex>
    )}
  </Box>
);

export default withTracker(props => {
  return {
    prototype: Prototypes.findOne(props.match.params.id)
  };
})(Prototype);
