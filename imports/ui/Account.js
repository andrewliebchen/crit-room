import React from "react";
import { Image, Flex, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { LogIn, LogOut } from "react-feather";
import { Avatar } from "theme-ui";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

const Account = props => (
  <Link to="/profile" title="View profile">
    {props.user && (
      <Flex sx={{ alignItems: "center" }}>
        <Avatar
          src={props.user.services.facebook.picture.data.url}
          sx={{ height: 24, width: 24 }}
        />
      </Flex>
    )}
  </Link>
);

Account.propTypes = {
  user: PropTypes.object
};

export default withTracker(props => {
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(Account);
