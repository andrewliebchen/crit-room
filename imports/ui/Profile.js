import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Flex, Box, Button, Image, Text, Heading } from "rebass";

const Profile = props => (
  <Flex
    sx={{ height: "100vh", width: "100vw" }}
    justifyContent="center"
    alignItems="center"
  >
    <Box>
      <Heading mb={3}>Profile</Heading>
      {props.user && (
        <Box>
          <Flex alignItems="center" mb={3}>
            <Image src={props.user.services.facebook.picture.data.url} />
            <Text ml={1}>{props.user.profile.name}</Text>
          </Flex>
          <Button
            width={1}
            onClick={() =>
              Meteor.logout(() => window.location.replace("/login"))
            }
          >
            Log out
          </Button>
        </Box>
      )}
    </Box>
  </Flex>
);

export default withTracker(props => {
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(Profile);
