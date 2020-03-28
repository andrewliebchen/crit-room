import { Flex, Text, Box, Link, Button } from "rebass";
import { Meteor } from "meteor/meteor";
import { Prototypes } from "../api/prototypes";
import { Trash, Edit2 } from "react-feather";
import { withTracker } from "meteor/react-meteor-data";
import Account from "./Account";
import React from "react";

const PrototypesList = props => (
  <Box>
    <Account {...props.user} />
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
    prototypes: Prototypes.find({ createdBy: Meteor.userId() }).fetch(),
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(PrototypesList);
