import { Flex, Box, Text, Heading, Button } from "rebass";
import { Hotspots } from "../api/hotspots";
import { Panels } from "../api/panels";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { useQueryParam, StringParam } from "use-query-params";
import { withTracker } from "meteor/react-meteor-data";
import Canvas from "./Canvas";
import FormField from "./FormField";
import getQueryParam from "get-query-param";
import HotspotInspector from "./HotspotInspector";
import Pane from "./Pane";
import PanelInspector from "./PanelInspector";
import PropTypes from "prop-types";
import React, { useState } from "react";
import SceneInspector from "./SceneInspector";
import { Sidebar, LogIn } from "react-feather";

const Prototype = props => {
  const [sceneId, setSceneId] = useQueryParam("scene", StringParam);

  const [drilldownLevel, setDrilldownLevel] = useState(0);
  const [selectedSceneId, setSelectedSceneId] = useState(
    getQueryParam("scene", window.location.href)
  );
  const [selectedPanelId, setSelectedPanelId] = useState(null);
  const [selectedHotspotId, setSelectedHotspotId] = useState(null);

  if (props.prototype) {
    const scene = props.scenes.find(scene => scene._id === selectedSceneId);
    const panels = props.panels.filter(
      panel => panel.sceneId === selectedSceneId
    );
    const hotspots = props.hotspots.filter(
      hotspot => hotspot.panelId === selectedPanelId
    );

    return (
      <Flex>
        <Canvas
          scene={scene}
          selectedPanelId={selectedPanelId}
          panels={panels}
          hotspots={hotspots}
          onHotspotClick={sceneId => {
            setSelectedSceneId(sceneId);
            setSceneId(sceneId);
            setSelectedPanelId(null);
            setSelectedHotspotId(null);
          }}
        />
        <Box
          variant="card"
          width={300}
          sx={{
            position: "fixed",
            zIndex: 1,
            left: 4,
            top: 4,
            overflow: "visible",
            userSelect: "none"
          }}
        >
          {/* <Box mb={3}>
            <Heading>Prototype info</Heading>
            <Text>ID: {props.prototype._id}</Text>
            <FormField
              param="name"
              type="text"
              method="prototypes.update"
              {...props.prototype}
            />
          </Box> */}

          {drilldownLevel === 0 && (
            <Pane
              title="Scenes"
              inspector={<SceneInspector scene={scene} />}
              items={props.scenes}
              onDrilldown={() => setDrilldownLevel(1)}
              onAdd={() => Meteor.call("scenes.create", props.prototype._id)}
              onSelect={sceneId => {
                setSelectedSceneId(sceneId);
                setSceneId(sceneId);
                setSelectedPanelId(null);
                setSelectedHotspotId(null);
              }}
              selectedItem={selectedSceneId}
            />
          )}
          {drilldownLevel === 1 && (
            <Pane
              title="Panels"
              inspector={
                <PanelInspector
                  panel={panels.find(panel => panel._id === selectedPanelId)}
                />
              }
              items={panels}
              onAdd={() =>
                Meteor.call(
                  "panels.create",
                  props.prototype._id,
                  selectedSceneId
                )
              }
              onDrillup={() => setDrilldownLevel(0)}
              onDrilldown={() => setDrilldownLevel(2)}
              onSelect={id => {
                setSelectedPanelId(id);
                setSelectedHotspotId(null);
              }}
              selectedItem={selectedPanelId}
            />
          )}
          {drilldownLevel === 2 && (
            <Pane
              title="Hotspots"
              inspector={
                <HotspotInspector
                  hotspot={props.hotspots.find(
                    hotspot => hotspot._id === selectedHotspotId
                  )}
                  scenes={props.scenes}
                />
              }
              items={hotspots}
              onAdd={() =>
                Meteor.call(
                  "hotspots.create",
                  props.prototype._id,
                  selectedPanelId
                )
              }
              onDrillup={() => setDrilldownLevel(1)}
              onSelect={id => setSelectedHotspotId(id)}
              selectedItem={selectedHotspotId}
            />
          )}
          <Flex alignItems="center" justifyContent="space-between" mt={3}>
            <Button variant="icon" title="Hide">
              <Sidebar />
            </Button>
            <Button variant="icon" title="Log in">
              <LogIn />
            </Button>
          </Flex>
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
