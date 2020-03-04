import { Flex, Box, Text, Heading } from "rebass";
import { Hotspots } from "../api/hotspots";
import { Panels } from "../api/panels";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { withTracker } from "meteor/react-meteor-data";
import Canvas from "./Canvas";
import FormField from "./FormField";
import PanelInspector from "./PanelInspector";
import PropTypes from "prop-types";
import React, { useState } from "react";
import HotspotInspector from "./HotspotInspector";
import HotspotList from "./HotspotList";
import SceneInspector from "./SceneInspector";
import Pane from "./Pane";

const Prototype = props => {
  const [drilldownLevel, setDrilldownLevel] = useState(0);
  const [selectedSceneId, setSelectedSceneId] = useState(null);
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
              onSelect={id => {
                setSelectedSceneId(id);
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
                  scene={panels.find(panel => panel._id === selectedPanelId)}
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
          {/* {selectedSceneId && (
            <Box>
              <Box mb={3}>
                <PanelList
                  panels={panels}
                  prototypeId={props.prototype._id}
                  selectedSceneId={selectedSceneId}
                  selectedPanelId={selectedPanelId}
                  onSelect={id => {
                    setSelectedPanelId(id);
                    setSelectedHotspotId(null);
                  }}
                />
              </Box>
              {selectedPanelId && (
                <Box>
                  <Box mb={3}>
                    <PanelInspector
                      panel={props.panels.find(
                        panel => panel._id === selectedPanelId
                      )}
                    />
                  </Box>
                  <Box mb={3}>
                    <HotspotList
                      hotspots={hotspots}
                      prototypeId={props.prototype._id}
                      selectedPanelId={selectedPanelId}
                      selectedHotspotId={selectedHotspotId}
                      onSelect={id => setSelectedHotspotId(id)}
                    />
                  </Box>
                  {selectedHotspotId && (
                    <Box mb={3}>
                      <HotspotInspector
                        hotspot={props.hotspots.find(
                          hotspot => hotspot._id === selectedHotspotId
                        )}
                        scenes={props.scenes}
                      />
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          )} */}
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
