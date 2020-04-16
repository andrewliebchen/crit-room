import { backgrounds } from "../utils/manifest";
import { Box, Button, Label, Select } from "theme-ui";
import { Meteor } from "meteor/meteor";
import FormField from "./FormField";
import PropTypes from "prop-types";
import React from "react";
import PrototypeContext from "./PrototypeContext";

const SceneInspector = () => (
  <PrototypeContext.Consumer>
    {props => (
      <Box>
        <FormField
          type="text"
          param="name"
          method="scenes.update"
          {...props.selectedScene}
        />
        <Box mt={2}>
          <Label>Background</Label>
          <Select
            defaultValue={props.background}
            onChange={event =>
              Meteor.call("scenes.update", props.selectedScene._id, {
                background: event.target.value
              })
            }
          >
            {Object.keys(backgrounds).map(label => (
              <option key={label} value={label}>
                {backgrounds[label].name}
              </option>
            ))}
          </Select>
        </Box>
        {/* <Button
          mt={3}
          variant="negative"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this scene?")) {
              Meteor.call("scenes.delete", props.selectedScene._id);
            }
          }}
        >
          Delete
        </Button> */}
      </Box>
    )}
  </PrototypeContext.Consumer>
);

SceneInspector.propTypes = {
  selectedScene: PropTypes.object
};

export default SceneInspector;
