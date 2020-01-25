import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Text, Flex, Box, Button, Link } from "rebass";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";

import { Rooms } from "../api/rooms";

const App = props => (
  <ThemeProvider theme={theme}>
    <Box>
      <Button onClick={() => Meteor.call("rooms.create")}>Create room</Button>
      {props.rooms.length > 0 ? (
        props.rooms.map(room => (
          <Flex key={room._id}>
            <Text>{room._id}</Text>
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
  </ThemeProvider>
);

export default withTracker(() => {
  return {
    rooms: Rooms.find({}).fetch()
  };
})(App);
