import React from "react";
import { Flex, Text, Box, Link } from "rebass";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";

const PrototypesList = props => (
  <Box>
    {props.prototypes.length > 0 ? (
      props.prototypes.map(prototype => (
        <Flex key={prototype._id}>
          <Link href={`/${prototype._id}`}>{prototype._id}</Link>
          <Link ml={2} onClick={() => console.log("Edit")}>
            Edit
          </Link>
          <Link
            ml={2}
            onClick={() => Meteor.call("prototypes.delete", prototype._id)}
          >
            Delete
          </Link>
        </Flex>
      ))
    ) : (
      <Text>No prototypes yet</Text>
    )}
  </Box>
);

export default withTracker(() => {
  return {
    prototypes: Prototypes.find({}).fetch()
  };
})(PrototypesList);
