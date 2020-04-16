import { Box, Flex, Button, Input, Label, Text } from "theme-ui";
import { Lock, Unlock, CornerRightDown } from "react-feather";
import { Meteor } from "meteor/meteor";
import { scale } from "proportional-scale";
import InlineLabelInput from "./InlineLabelInput";
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
      <Box>
        <Label>Dimensions</Label>
        <Flex>
          <InlineLabelInput label="W">
            <Input
              type="number"
              value={props.width}
              pl={4}
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
          </InlineLabelInput>
          <Button mx={1} onClick={() => setProportional(!proportional)}>
            {proportional ? <Lock /> : <Unlock />}
          </Button>
          <InlineLabelInput label="H">
            <Input
              type="number"
              value={props.height}
              pl={4}
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
          </InlineLabelInput>
        </Flex>
      </Box>
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
