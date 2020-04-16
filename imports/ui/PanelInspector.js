import { Button, Flex, Box, Label, Input } from "theme-ui";
import DimensionInput from "./DimensionInput";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React, { useState } from "react";
import PrototypeContext from "./PrototypeContext";
import InlineLabelInput from "./InlineLabelInput";

const PositionFields = props => (
  <Flex>
    <InlineLabelInput label="P">
      <Input
        type="number"
        value={props[`${props.axisLabel}Position`]}
        pl={4}
        onChange={event => {
          let args = {};
          args[`${props.axisLabel}Position`] = event.target.value;
          Meteor.call("panels.update", props._id, args);
        }}
      />
    </InlineLabelInput>
    <InlineLabelInput label="P">
      <Input
        type="number"
        value={props[`${props.axisLabel}Rotation`]}
        pl={4}
        onChange={event => {
          let args = {};
          args[`${props.label}Rotation`] = event.target.value;
          Meteor.call("panels.update", props._id, args);
        }}
      />
    </InlineLabelInput>
  </Flex>
);

const PanelInspector = props => {
  const [selectedAxisIndex, setSelectedAxisIndex] = useState(0);

  return (
    <PrototypeContext.Consumer>
      {props => {
        const axes = ["x", "y", "z"];
        const axisLabel = axes[selectedAxisIndex];

        return (
          <Box>
            <FormField
              type="text"
              param="name"
              method="panels.update"
              {...props.selectedPanel}
            />
            <DimensionInput {...props.selectedPanel} />
            <Box>
              <Label>Position</Label>
              <Flex>
                <Button
                  variant="primary"
                  onClick={() => {
                    const newIndex =
                      selectedAxisIndex < axes.length - 1
                        ? selectedAxisIndex + 1
                        : 0;
                    setSelectedAxisIndex(newIndex);
                  }}
                  mr={1}
                  sx={{ textTransform: "uppercase" }}
                >
                  {axisLabel}
                </Button>
                {selectedAxisIndex === 0 && (
                  <PositionFields
                    axisLabel={axisLabel}
                    {...props.selectedPanel}
                  />
                )}
                {selectedAxisIndex === 1 && (
                  <PositionFields
                    axisLabel={axisLabel}
                    {...props.selectedPanel}
                  />
                )}
                {selectedAxisIndex === 2 && (
                  <PositionFields
                    axisLabel={axisLabel}
                    {...props.selectedPanel}
                  />
                )}
              </Flex>
            </Box>
            {/* <Button
        mt={3}
        variant="secondary"
        color="negative"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this panel?")) {
            Meteor.call("panels.delete", panel._id);
          }
        }}
      >
        Delete
      </Button> */}
          </Box>
        );
      }}
    </PrototypeContext.Consumer>
  );
};

PanelInspector.propTypes = {
  selectedPanel: PropTypes.object
};

export default PanelInspector;
