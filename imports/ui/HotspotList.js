import React from "react";
import { Box, Text, Heading, Button, Flex } from "rebass";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

const HotspotList = props => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading>Hotspot</Heading>
      <Button
        onClick={() =>
          Meteor.call("hotspots.create", props.prototypeId, props.selectedPanelId)
        }
      >
        +
      </Button>
    </Flex>
    {props.hotspots.length > 0 ? (
      props.hotspots
        .filter(hotspot => hotspot.sceneId === props.selectedSceneId)
        .map(hotspot => {
          const isSelected = props.selectedHotspotId === hotspot._id;
          return (
            <Box
              key={hotspot._id}
              variant="listItem"
              bg={isSelected && "primary"}
              color={isSelected && "white"}
              onClick={props.onSelect.bind(
                null,
                isSelected ? null : hotspot._id
              )}
            >
              <Text>
                {hotspot.name} {hotspot._id}
              </Text>
            </Box>
          );
        })
    ) : (
      <Text>Loading</Text>
    )}
  </Box>
);

HotspotList.propTypes = {
  hotspots: PropTypes.array,
  prototypeId: PropTypes.string,
  selectedPanelId: PropTypes.string,
  selectedHotspotId: PropTypes.string,
  onSelect: PropTypes.func
};

export default HotspotList;
