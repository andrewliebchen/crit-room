import { Box, Flex, Button } from "rebass";
import { Input, Label } from "@rebass/forms";
import { Lock, Unlock } from "react-feather";
import { Meteor } from "meteor/meteor";
import { scale } from "proportional-scale";
import PropTypes from "prop-types";
import React, { useState } from "react";

const DimensionInput = props => {
  const [proportional, setProportional] = useState(false);

  return (
    <Flex mr={-1}>
      <Box mr={1}>
        <Label>Width</Label>
        <Flex>
          <Input
            type="number"
            value={props.width}
            onChange={event => {
              const { width, height } = scale({
                width: props.width,
                height: props.height,
                maxWidth: event.target.value
              });
              Meteor.call("panels.update", props._id, {
                width: width,
                height: proportional ? height : props.height
              });
            }}
          />
        </Flex>
      </Box>
      <Box mr={1}>
        <Label>Height</Label>
        <Flex>
          <Input
            type="number"
            value={props.height}
            onChange={event => {
              const { width, height } = scale({
                width: props.width,
                height: props.height,
                maxHeight: event.target.value
              });
              Meteor.call("panels.update", props._id, {
                height: height,
                width: proportional ? width : props.width
              });
            }}
          />
          <Button
            variant="icon"
            ml={1}
            onClick={() => setProportional(!proportional)}
          >
            {proportional ? <Lock /> : <Unlock />}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

DimensionInput.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  _id: PropTypes.string
};

export default DimensionInput;
