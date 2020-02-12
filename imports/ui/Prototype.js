import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { Panels } from "../api/panels";
import { Flex, Box, Text, Heading } from "rebass";
import SceneList from "./SceneList";
import Canvas from "./Canvas";
import PanelList from "./PanelList";
import PanelInspector from "./PanelInspector";
import SceneInspector from "./SceneInspector";

const Prototype = props => {
  if (props.prototype) {
    const [selectedScene, setSelectedScene] = useState(null);
    const [selectedPanel, setSelectedPanel] = useState(null);

    const scene = props.scenes.find(scene => scene._id === selectedScene);
    const panels = props.panels.filter(
      panel => panel.sceneId === selectedScene
    );

    return (
      <Flex>
        <Canvas panels={panels} selectedPanel={selectedPanel} scene={scene} />
        <Box
          p={3}
          bg="white"
          sx={{
            position: "fixed",
            zIndex: 1,
            height: "100vh",
            overflow: "scroll"
          }}
        >
          <Box mb={3}>
            <Heading>Prototype info</Heading>
            <Text>ID: {props.prototype._id}</Text>
          </Box>
          <Box mb={3}>
            <SceneList
              scenes={props.scenes}
              prototypeId={props.prototype._id}
              selectedScene={selectedScene}
              onSelect={id => setSelectedScene(id)}
            />
          </Box>
          {selectedScene && (
            <Box mb={3}>
              <SceneInspector scene={scene} />
            </Box>
          )}
          <Box mb={3}>
            <PanelList
              panels={panels}
              prototypeId={props.prototype._id}
              selectedScene={selectedScene}
              selectedPanel={selectedPanel}
              onSelect={id => setSelectedPanel(id)}
            />
          </Box>
          {selectedPanel && (
            <Box mb={3}>
              <PanelInspector
                panel={props.panels.find(panel => panel._id === selectedPanel)}
              />
            </Box>
          )}
        </Box>
      </Flex>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

export default withTracker(props => {
  const id = props.match.params.id;
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ prototypeId: id }).fetch(),
    panels: Panels.find({ prototypeId: id }).fetch()
  };
})(Prototype);
