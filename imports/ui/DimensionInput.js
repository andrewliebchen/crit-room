import { Box, Flex, Button } from "rebass";
import { Input, Label } from "@rebass/forms";
import { Lock, Unlock } from "react-feather";
import { Meteor } from "meteor/meteor";
import { scale } from "proportional-scale";
import PropTypes from "prop-types";
import React, { useState } from "react";
import FormField from "./FormField";
/*
<Button
  variant="icon"
  ml={1}
  width={30}
  onClick={() => setScalarResize(!proportional)}
>
  {scalarResize ? <Lock /> : <Unlock />}
</Button>
*/
const DimensionInput = props => {
  const [scalarResize, setScalarResize] = useState(false);
  const [proportional, setProportional] = useState(false);

  return (
    <Box>
      <FormField type="url" param="src" method="panels.update" {...props} />

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
  _id: PropTypes.string
};

export default DimensionInput;
