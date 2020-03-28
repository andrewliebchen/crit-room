import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Flex, Box, Button, Image, Text, Heading } from "rebass";

const Profile = props => (
  <Box>
    <Heading mb={3}>Profile</Heading>
    {props.user && (
      <Box>
        <Flex alignItems="center" mb={3}>
          <Image src={props.user.services.facebook.picture.data.url} />
          <Text ml={1}>{props.user.profile.name}</Text>
        </Flex>
        <Button
          onClick={() => Meteor.logout(() => window.location.replace("/login"))}
        >
          Log out
        </Button>
      </Box>
    )}
  </Box>
);

export default withTracker(props => {
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(Profile);
