import React from "react";
import { Flex, Text, Box, Link } from "rebass";
import { withTracker } from "meteor/react-meteor-data";
import { Rooms } from "../api/rooms";

const RoomsList = props => (
  <Box>
    {props.rooms.length > 0 ? (
      props.rooms.map(room => (
        <Flex key={room._id}>
          <Link href={`/${room._id}`}>{room._id}</Link>
          <Link ml={2} onClick={() => console.log("Edit")}>
            Edit
          </Link>
          <Link ml={2} onClick={() => Meteor.call("rooms.delete", room._id)}>
            Delete
          </Link>
        </Flex>
      ))
    ) : (
      <Text>No rooms yet</Text>
    )}
  </Box>
);

export default withTracker(() => {
  return {
    rooms: Rooms.find({}).fetch()
  };
})(RoomsList);
