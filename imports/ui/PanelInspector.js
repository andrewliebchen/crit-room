import { Button, Flex, Box } from "theme-ui";
import DimensionInput from "./DimensionInput";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React, { useState } from "react";
import PrototypeContext from "./PrototypeContext";

const PositionFields = props => (
  <Flex>
    <FormField
      type="number"
      mr={1}
      param={`${props.label}Position`}
      method="panels.update"
      {...props}
    />
    <FormField
      type="number"
      mr={1}
      param={`${props.label}Rotation`}
      method="panels.update"
      {...props}
    />
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
            <Flex mt={3}>
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
                <PositionFields label={axisLabel} {...props.selectedPanel} />
              )}
              {selectedAxisIndex === 1 && (
                <PositionFields label={axisLabel} {...props.selectedPanel} />
              )}
              {selectedAxisIndex === 2 && (
                <PositionFields label={axisLabel} {...props.selectedPanel} />
              )}
            </Flex>
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
