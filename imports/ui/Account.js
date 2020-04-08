import React from "react";
import { Image, Flex, Button } from "theme-ui";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { LogIn, LogOut, User } from "react-feather";
import { Link } from "react-router-dom";

const Account = props => (
  <Flex>
    <Link to="/profile">
      <Button variant="icon" title="Profile" mr={1}>
        <User />
      </Button>
    </Link>
    {Object.keys(props).length !== 0 ? (
      <Button
        variant="icon"
        title="Log out"
        onClick={() => Meteor.logout(() => window.location.replace("/login"))}
      >
        <LogOut />
      </Button>
    ) : (
      <Button
        variant="icon"
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
  services: PropTypes.object
};

export default Account;
