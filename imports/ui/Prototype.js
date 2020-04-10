import { Flex, Box, Text, Button, Card } from "theme-ui";
import { Sidebar } from "react-feather";
import { useQueryParams, BooleanParam, StringParam } from "use-query-params";
import { withTracker } from "meteor/react-meteor-data";
import Canvas from "./Canvas";
import FormField from "./FormField";
import Pane from "./Pane";
import PropTypes from "prop-types";
import React from "react";
import Header from "./Header";
import { elementTypes } from "../utils/types";
import Loading from "./Loading";
import { Centered } from "./Helpers";
import PrototypeContext from "./PrototypeContext";

const Prototype = () => (
  <PrototypeContext.Consumer>
    {props => (
      <Loading ready={props.prototype}>
        <Flex>
          {typeof props.query.scene !== "undefined" ? (
            <Canvas
              scene={props.scene}
              panels={props.panels}
              hotspots={props.hotspots}
              onHotspotClick={sceneId => {
                props.setQuery({ scene: sceneId, panel: null, hotspot: null });
              }}
            />
          ) : (
            <Centered>
              <Text color="secondaryText">Select a Scene to get Started</Text>
            </Centered>
          )}
          <Box
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1
            }}
          >
            <Header query={props.query} setQuery={props.setQuery} />
            <Pane />
            />
          </Box>
        </Flex>
      </Loading>
    )}
  </PrototypeContext.Consumer>
);

Prototype.propTypes = {
  prototype: PropTypes.object,
  scenes: PropTypes.array,
  panels: PropTypes.array,
  hotspots: PropTypes.array
};

export default Prototype;
