import React from "react";
import { Flex, Text, Box, Link, Button } from "rebass";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";
import { Meteor } from "meteor/meteor";
import { Trash, Edit2 } from "react-feather";

const PrototypesList = props => (
  <Box>
    <Button onClick={() => Meteor.call("prototypes.create")}>
      Create prototype
    </Button>
    {props.prototypes.length > 0 ? (
      props.prototypes.map(prototype => (
        <Flex key={prototype._id}>
          <Link href={`/prototypes/${prototype._id}`}>
            {prototype.name} {prototype._id}
          </Link>
          <Link
            ml={2}
            onClick={() => Meteor.call("prototypes.delete", prototype._id)}
          >
            <Trash />
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
