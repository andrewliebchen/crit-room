import { useQueryParams, BooleanParam, StringParam } from "use-query-params";
import PrototypeContext from "./PrototypeContext";
import { withTracker } from "meteor/react-meteor-data";
import { Hotspots } from "../api/hotspots";
import { Panels } from "../api/panels";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import React from "react";

const PrototypeProvider = props => {
  const [query, setQuery] = useQueryParams({
    scene: StringParam,
    panel: StringParam,
    hotspot: StringParam,
    hideSidebar: BooleanParam,
    selected: StringParam
  });

  console.log(query.scene);

  const scene = props.scenes.find(scene => scene._id === query.scene);
  const panels = props.panels.filter(panel => panel.sceneId === query.scene);
  const hotspots = props.hotspots.filter(
    hotspot => hotspot.panelId === query.panel
  );

  return (
    <PrototypeContext.Provider
      value={{
        query: query,
        setQuery: setQuery,
        prototype: props.prototype,
        scene: props.scenes.find(scene => scene._id === query.scene),
        panels: props.panels.filter(panel => panel.sceneId === query.scene),
        hotspots: props.hotspots.filter(
          hotspot => hotspot.panelId === query.panel
        )
      }}
    >
      {props.children}
    </PrototypeContext.Provider>
  );
};

export default withTracker(props => {
  const id = props.match.params.id;
  console.log(Prototypes.findOne(id));
  // scenes: Scenes.find({ prototypeId: id }).fetch(),
  // panels: Panels.find({ prototypeId: id }).fetch(),
  // hotspots: Hotspots.find({ prototypeId: id }).fetch()
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ prototypeId: id }).fetch(),
    panels: Panels.find({ prototypeId: id }).fetch(),
    hotspots: Hotspots.find({ prototypeId: id }).fetch()
  };
})(PrototypeProvider);
