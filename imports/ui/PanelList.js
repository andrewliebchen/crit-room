import React from "react";
import { Box, Text, Heading, Button, Flex } from "rebass";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

const PanelList = props => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading>Panel</Heading>
      <Button
        onClick={() =>
          Meteor.call("panels.create", props.prototypeId, props.selectedScene)
        }
      >
        +
      </Button>
    </Flex>
    {props.panels.length > 0 ? (
      props.panels
        .filter(panel => panel.sceneId === props.selectedScene)
        .map(panel => {
          const isSelected = props.selectedPanel === panel._id;
          return (
            <Box
              key={panel._id}
              variant="listItem"
              bg={isSelected && "primary"}
              color={isSelected && "white"}
              onClick={props.onSelect.bind(null, isSelected ? null : panel._id)}
            >
              <Text>
                {panel.name} {panel._id}
              </Text>
            </Box>
          );
        })
    ) : (
      <Text>Loading</Text>
    )}
  </Box>
);

PanelList.propTypes = {
  onSelect: PropTypes.func,
  panels: PropTypes.array,
  prototypeId: PropTypes.string,
  selectedPanel: PropTypes.string,
  selectedScene: PropTypes.string
};

export default PanelList;
