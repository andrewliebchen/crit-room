import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { scale } from "proportional-scale";
import { Box, Flex, Button } from "rebass";
import { Input, Label } from "@rebass/forms";
import PropTypes from "prop-types";
import { Lock, Unlock } from "react-feather";

const DimensionInput = props => {
  const [proportional, setProportional] = useState(false);

  return (
    <Flex mr={-1}>
      <Box mr={1}>
        <Label>Width</Label>
        <Flex>
          <Input
            type="number"
            defaultValue={props.width}
            onChange={event => console.log(event.target.value)}
          />
        </Flex>
      </Box>
      <Box mr={1}>
        <Label>Height</Label>
        <Flex>
          <Input
            type="number"
            defaultValue={props.height}
            onChange={event => {
              const { width, height } = scale({
                width: props.width,
                height: props.height,
                maxHeight: event.target.value
              });
              console.log(proportional && width);
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
  height: PropTypes.number
};

export default DimensionInput;
