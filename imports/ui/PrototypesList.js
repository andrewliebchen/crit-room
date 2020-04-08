import { Flex, Text, Box, Button, Heading } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { Plus, ArrowRight } from "react-feather";
import { Prototypes } from "../api/prototypes";
import { withTracker } from "meteor/react-meteor-data";
import Account from "./Account";
import FormField from "./FormField";
import React, { useState } from "react";
import TimeAgo from "react-timeago";

const PrototypesList = props => {
  const [selectedPrototype, setSelectedPrototype] = useState(null);

  return (
    <Flex p={3} sx={{ width: "100vw", justifyContent: "center" }}>
      <Box sx={{ width: 700 }}>
        <Flex
          mb={3}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Heading>Prototypes</Heading>
          <Flex>
            <Account {...props.user} />
            <Button
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
            <Box key={prototype._id}>
              <Flex
                variant="listItem"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
                onClick={() =>
                  setSelectedPrototype(selectedPrototype ? null : prototype._id)
                }
              >
                <Flex>
                  <Text fontWeight="bold">
                    {prototype.name || prototype._id}
                  </Text>
                  <Text ml={2}>
                    Created <TimeAgo date={prototype.createdAt} />
                  </Text>
                </Flex>
                <Button
                  title="View prototype"
                  onClick={event => {
                    event.stopPropagation();
                    window.location.href = `/prototypes/${prototype._id}`;
                  }}
                >
                  <ArrowRight />
                </Button>
              </Flex>
              {selectedPrototype === prototype._id && (
                <Box>
                  <FormField
                    type="text"
                    param="name"
                    method="prototypes.update"
                    {...prototype}
                  />
                  <Button
                    mt={3}
                    variant="secondary"
                    color="negative"
                    onClick={() =>
                      window.confirm(
                        "Are you sure you want to delete this prototype?"
                      ) && Meteor.call("prototypes.delete", prototype._id)
                    }
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Box>
          ))
        ) : (
          <Text>No prototypes yet</Text>
        )}
      </Box>
    </Flex>
  );
};

export default withTracker(() => {
  return {
    prototypes: Prototypes.find({ createdBy: Meteor.userId() }).fetch(),
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(PrototypesList);
