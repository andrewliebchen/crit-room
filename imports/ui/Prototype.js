import { Flex, Box, Text, Button, Card } from "theme-ui";
import { Hotspots } from "../api/hotspots";
import { Panels } from "../api/panels";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { Sidebar } from "react-feather";
import { useQueryParams, BooleanParam, StringParam } from "use-query-params";
import { withTracker } from "meteor/react-meteor-data";
import Account from "./Account";
import Canvas from "./Canvas";
import FormField from "./FormField";
import HotspotInspector from "./HotspotInspector";
import Pane from "./Pane";
import PanelInspector from "./PanelInspector";
import PropTypes from "prop-types";
import React from "react";
import SceneInspector from "./SceneInspector";
import Header from "./Header";
import { elementTypes } from "../utils/types";

const Prototype = props => {
  const [query, setQuery] = useQueryParams({
    scene: StringParam,
    panel: StringParam,
    hotspot: StringParam,
    hideSidebar: BooleanParam
  });

  if (props.prototype) {
    const scene = props.scenes.find(scene => scene._id === query.scene);
    const panels = props.panels.filter(panel => panel.sceneId === query.scene);
    const hotspots = props.hotspots.filter(
      hotspot => hotspot.panelId === query.panel
    );

    const selectedType =
      typeof query.hotspot !== "undefined"
        ? elementTypes[2]
        : typeof query.panel !== "undefined"
        ? elementTypes[1]
        : elementTypes[0];

    const scenePane = (
      <Pane
        title="Scenes"
        inspector={<SceneInspector scene={scene} />}
        items={props.scenes}
        onDrillup={() => (window.location.href = "/")}
        onDrilldown={() =>
          setQuery({ panel: panels.length > 0 ? panels[0]._id : null })
        }
        onAdd={() =>
          Meteor.call("scenes.create", props.prototype._id, (err, id) =>
            setQuery({ scene: id })
          )
        }
        onSelect={sceneId =>
          setQuery({
            scene: sceneId
          })
        }
        selectedItem={query.scene}
      />
    );

    const panelPane = (
      <Pane
        title="Panels"
        inspector={
          <PanelInspector
            panel={panels.find(panel => panel._id === query.panel)}
          />
        }
        items={panels}
        onAdd={() =>
          Meteor.call(
            "panels.create",
            props.prototype._id,
            query.scene,
            (err, id) => setQuery({ panel: id })
          )
        }
        onDrillup={() => setQuery({ panel: null })}
        onDrilldown={() =>
          setQuery({ hotspot: hotspots.length > 0 ? hotspots[0]._id : null })
        }
        onSelect={id =>
          setQuery({
            panel: id
          })
        }
        selectedItem={query.panel}
      />
    );

    const hotspotPane = (
      <Pane
        title="Hotspots"
        inspector={
          <HotspotInspector
            hotspot={props.hotspots.find(
              hotspot => hotspot._id === query.hotspot
            )}
            scenes={props.scenes}
          />
        }
        items={hotspots}
        onAdd={() =>
          Meteor.call(
            "hotspots.create",
            props.prototype._id,
            query.panel,
            (err, id) => setQuery({ hotspot: id })
          )
        }
        onDrillup={() => setQuery({ hotspot: null })}
        onSelect={id => setQuery({ hotspot: id })}
        selectedItem={query.hotspot}
      />
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
            selectedType={selectedType}
            onSelect={event => console.log(event)}
          />
          <Card
            sx={{
              mt: 2,
              userSelect: "none",
              width: query.hideSidebar || 300
            }}
          >
            {query.hideSidebar || (
              <Box mb={3}>
                {selectedType === elementTypes[0] && scenePane}
                {selectedType === elementTypes[1] && panelPane}
                {selectedType === elementTypes[2] && hotspotPane}
              </Box>
            )}
            <Flex
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Button
                title="Hide"
                mr={3}
                onClick={() => setQuery({ hideSidebar: !query.hideSidebar })}
              >
                <Sidebar />
              </Button>
              <Account {...props.user} />
            </Flex>
          </Card>
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
