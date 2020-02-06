import React from "react";
import { Box, Text, Heading, Button } from "rebass";
import { Meteor } from "meteor/meteor";
import { Panels } from "../api/panels";
import { withTracker } from "meteor/react-meteor-data";

const PanelList = props => (
  <Box>
    <Heading>Panel</Heading>
    <Button onClick={() => Meteor.call("panels.create", props.parentId)}>
      New panel
    </Button>
    {props.panels.length > 0 ? (
      props.panels.map(panel => {
        const isSelected = props.selected === panel._id;
        return (
          <Box
            key={panel._id}
            bg={isSelected && "blue"}
            color={isSelected && "white"}
            // onClick={(props.onSelect.bind(null, panel._id))}
            p={1}
          >
            <Text>{panel._id}</Text>
          </Box>
        );
      })
    ) : (
      <Text>Loading</Text>
    )}
  </Box>
);

export default withTracker(props => {
  return {
    panels: Panels.find({ parentId: props.parentId }).fetch()
  };
})(PanelList);
