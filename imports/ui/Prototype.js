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
import Loading from "./Loading";
import { Centered } from "./Helpers";

const Prototype = props => {
  const [query, setQuery] = useQueryParams({
    scene: StringParam,
    panel: StringParam,
    hotspot: StringParam,
    hideSidebar: BooleanParam,
    selected: StringParam
  });

  const scene = props.scenes.find(scene => scene._id === query.scene);
  const panels = props.panels.filter(panel => panel.sceneId === query.scene);
  const hotspots = props.hotspots.filter(
    hotspot => hotspot.panelId === query.panel
  );

  return (
    <Loading ready={props.prototype}>
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
          <Header query={query} setQuery={setQuery} />
          <Pane
            scene={scene}
            scenes={props.scenes}
            panels={panels}
            hotspots={hotspots}
            setQuery={setQuery}
            query={query}
          />
        </Box>
      </Flex>
    </Loading>
  );
};

Prototype.propTypes = {
  prototype: PropTypes.object,
  scenes: PropTypes.array,
  panels: PropTypes.array,
  hotspots: PropTypes.array
};

export default withTracker(props => {
  const id = props.match.params.id;
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ prototypeId: id }).fetch(),
    panels: Panels.find({ prototypeId: id }).fetch(),
    hotspots: Hotspots.find({ prototypeId: id }).fetch()
  };
})(Prototype);
