import { Box, Flex, Button } from "rebass";
import { Input, Label } from "@rebass/forms";
import { Lock, Unlock, CornerRightDown } from "react-feather";
import { Meteor } from "meteor/meteor";
import { scale } from "proportional-scale";
import PropTypes from "prop-types";
import React, { useState } from "react";

const DimensionInput = props => {
  const [proportional, setProportional] = useState(false);

  return (
    <Box>
      <Box>
        <Label>Image</Label>
        <Flex>
          <Input
            type="url"
            defaultValue={props.src}
            onChange={event =>
              Meteor.call("panels.update", props._id, {
                src: event.target.value
              })
            }
          />
          <Button
            variant="icon"
            ml={1}
            title="Apply image proportions"
            onClick={() => {
              let img = new Image();
              img.onload = function() {
                const { width, height } = scale({
                  width: img.width,
                  height: img.height,
                  maxWidth: props.width
                });
                Meteor.call("panels.update", props._id, {
                  width: width,
                  height: height
                });
                setProportional(true);
              };
              img.src = props.src;
            }}
          >
            <CornerRightDown />
          </Button>
        </Flex>
      </Box>
      <Flex>
        <Box>
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
        <Flex
          mx={1}
          flexDirection="column"
          justifyContent="flex-end"
          width="auto"
        >
          <Button
            variant="icon"
            onClick={() => setProportional(!proportional)}
            sx={{ height: 42 }}
          >
            {proportional ? <Lock /> : <Unlock />}
          </Button>
        </Flex>
        <Box>
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

DimensionInput.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  _id: PropTypes.string,
  src: PropTypes.string
};

export default DimensionInput;
