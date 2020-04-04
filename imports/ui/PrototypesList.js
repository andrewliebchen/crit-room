import { Flex, Text, Box, Link, Button, Heading } from "rebass";
import { Meteor } from "meteor/meteor";
import { Prototypes } from "../api/prototypes";
import { Trash, Edit2, Plus, Settings, X } from "react-feather";
import { withTracker } from "meteor/react-meteor-data";
import Account from "./Account";
import React, { useState } from "react";
import TimeAgo from "react-timeago";
import Inspector from "./Inspector";
import FormField from "./FormField";

const PrototypesList = props => {
  const [selectedPrototype, setSelectedPrototype] = useState(null);

  return (
    <Flex width={1} justifyContent="center" p={3}>
      <Box width={700}>
        <Flex alignItems="center" justifyContent="space-between" mb={3}>
          <Heading>Prototypes</Heading>
          <Flex>
            <Account {...props.user} />
            <Button
              variant="icon"
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
                alignItems="center"
                justifyContent="space-between"
                onClick={() =>
                  (window.location.href = `/prototypes/${prototype._id}`)
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
                {selectedPrototype === prototype._id ? (
                  <Button
                    variant="icon"
                    title="close"
                    onClick={() => {
                      event.stopPropagation();
                      setSelectedPrototype(null);
                    }}
                  >
                    <X />
                  </Button>
                ) : (
                  <Button
                    variant="icon"
                    title="Edit"
                    onClick={event => {
                      event.stopPropagation();
                      setSelectedPrototype(prototype._id);
                    }}
                  >
                    <Settings />
                  </Button>
                )}
              </Flex>
              {selectedPrototype === prototype._id && (
                <Inspector>
                  <FormField
                    type="text"
                    param="name"
                    method="prototypes.update"
                    {...prototype}
                  />
                  <Button
                    width={1}
                    mt={3}
                    variant="secondary"
                    color="negative"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this prototype?"
                        )
                      ) {
                        Meteor.call("prototypes.delete", prototype._id);
                      }
                    }}
                  >
                    Delete
                  </Button>
                </Inspector>
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
