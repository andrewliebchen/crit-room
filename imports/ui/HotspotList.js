import React from "react";
import { Box, Text, Heading, Button } from "rebass";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

const HotspotList = props => (
  <Box>
    <Heading>Hotspot</Heading>
    <Button
      onClick={() =>
        Meteor.call("hotspots.create", props.prototypeId, props.selectedPanel)
      }
    >
      New hotspot
    </Button>
    {props.hotspots.length > 0 ? (
      props.hotspots
        .filter(hotspot => hotspot.sceneId === props.selectedScene)
        .map(hotspot => {
          const isSelected = props.selectedHotspot === hotspot._id;
          return (
            <Box
              key={hotspot._id}
              bg={isSelected && "blue"}
              color={isSelected && "white"}
              onClick={props.onSelect.bind(
                null,
                isSelected ? null : hotspot._id
              )}
              p={1}
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
  selectedPanel: PropTypes.string,
  selectedHotspot: PropTypes.string,
  onSelect: PropTypes.func
};

export default HotspotList;
