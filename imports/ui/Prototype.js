import { Flex, Box, Text, Button, Card } from "theme-ui";
import { Hotspots } from "../api/hotspots";
import { Panels } from "../api/panels";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
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

const Prototype = props => {
  const [query, setQuery] = useQueryParams({
    scene: StringParam,
    panel: StringParam,
    hotspot: StringParam,
    hideSidebar: BooleanParam,
    selected: StringParam
  });

  if (props.prototype) {
    const scene = props.scenes.find(scene => scene._id === query.scene);
    const panels = props.panels.filter(panel => panel.sceneId === query.scene);
    const hotspots = props.hotspots.filter(
      hotspot => hotspot.panelId === query.panel
    );

    return (
      <Flex>
        {typeof query.scene !== "undefined" ? (
          <Canvas
            scene={scene}
            selectedPanelId={query.panel}
            panels={panels}
            hotspots={hotspots}
            onHotspotClick={sceneId => {
              setQuery({ scene: sceneId, panel: null, hotspot: null });
            }}
          />
        ) : (
          <Flex
            sx={{
              height: "100vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text color="secondaryText">Select a Scene to get Started</Text>
          </Flex>
        )}
        <Box
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1
          }}
        >
          <Header
            selectedType={query.selected}
            user={props.user}
            setQuery={setQuery}
          />
          <Pane
            selectedType={query.selected}
            scene={scene}
            scenes={props.scenes}
            panels={panels}
            hotspots={hotspots}
            setQuery={setQuery}
          />
        </Box>
      </Flex>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

Prototype.propTypes = {
  prototype: PropTypes.object,
  scenes: PropTypes.array,
  panels: PropTypes.array,
  hotspots: PropTypes.array,
  user: PropTypes.object
};

export default withTracker(props => {
  const id = props.match.params.id;
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ prototypeId: id }).fetch(),
    panels: Panels.find({ prototypeId: id }).fetch(),
    hotspots: Hotspots.find({ prototypeId: id }).fetch(),
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(Prototype);
