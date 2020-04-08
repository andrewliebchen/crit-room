import React from "react";
import { Image, Flex, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { LogIn, LogOut, User } from "react-feather";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

const Account = props => (
  <Flex>
    <Link to="/profile">
      <Button title="Profile" mr={1}>
        <User />
      </Button>
    </Link>
    {Object.keys(props).length !== 0 ? (
      <Button
        title="Log out"
        onClick={() => Meteor.logout(() => window.location.replace("/login"))}
      >
        <LogOut />
      </Button>
    ) : (
      <Button
        title="Log in with Facebook"
        onClick={() =>
          Meteor.loginWithFacebook(
            {
              loginStyle: "popup"
            },
            () => {
              window.location.replace("/");
            }
          )
        }
      >
        <LogIn />
      </Button>
    )}
  </Flex>
);

Account.propTypes = {
  user: PropTypes.object
};

export default withTracker(props => {
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(Account);
