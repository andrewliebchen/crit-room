import { Flex, Text, Box, Link, Button, Heading } from "rebass";
import { Meteor } from "meteor/meteor";
import { Prototypes } from "../api/prototypes";
import { Trash, Edit2, Plus, Settings } from "react-feather";
import { withTracker } from "meteor/react-meteor-data";
import Account from "./Account";
import React from "react";
import TimeAgo from "react-timeago";

const PrototypesList = props => (
  <Box p={3}>
    <Flex alignItems="center" justifyContent="space-between" mb={3}>
      <Heading>Prototypes</Heading>
      <Flex>
        <Account {...props.user} />
        <Button
          variant="icon"
          title="Create prototype"
          ml={3}
          onClick={() => Meteor.call("prototypes.create")}
        >
          <Plus />
        </Button>
      </Flex>
    </Flex>

    {props.prototypes.length > 0 ? (
      props.prototypes.map(prototype => (
        <Flex
          key={prototype._id}
          variant="listItem"
          alignItems="center"
          justifyContent="space-between"
          onClick={() =>
            (window.location.href = `/prototypes/${prototype._id}`)
          }
        >
          <Flex>
            <Text fontWeight="bold">{prototype.name || prototype._id}</Text>
            <Text ml={2}>
              Created <TimeAgo date={prototype.createdAt} />
            </Text>
          </Flex>
          <Flex>
            <Button
              variant="icon"
              title="Edit"
              onClick={event => {
                event.stopPropagation();
                console.log("Edit");
              }}
            >
              <Settings />
            </Button>
            <Button
              variant="icon"
              title="Delete"
              onClick={() => {
                event.stopPropagation();
                Meteor.call("prototypes.delete", prototype._id);
              }}
            >
              <Trash />
            </Button>
          </Flex>
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
