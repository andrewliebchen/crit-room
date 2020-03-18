import React from "react";
import { Image, Box, Button } from "rebass";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { LogIn, LogOut } from "react-feather";

const Account = props => (
  <Box>
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
  </Box>
);

Account.propTypes = {
  services: PropTypes.object
};

export default Account;
