import { Centered } from "./Helpers";
import { Flex, Box, Button, Avatar, Text, Heading } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React from "react";

const Profile = props => (
  <Centered>
    <Box>
      <Heading mb={3}>Profile</Heading>
      {props.user && (
        <Box>
          <Flex sx={{ alignItems: "center" }} mb={3}>
            <Avatar src={props.user.services.facebook.picture.data.url} />
            <Text ml={1}>{props.user.profile.name}</Text>
          </Flex>
          <Button
            onClick={() =>
              Meteor.logout(() => window.location.replace("/login"))
            }
          >
            Log out
          </Button>
        </Box>
      )}
    </Box>
  </Centered>
);

export default withTracker(props => {
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(Profile);
