import { Hotspots } from "../api/hotspots";
import { Panels } from "../api/panels";
import { Prototypes } from "../api/prototypes";
import { Scenes } from "../api/scenes";
import { useQueryParams, BooleanParam, StringParam } from "use-query-params";
import { withTracker } from "meteor/react-meteor-data";
import PrototypeContext from "./PrototypeContext";
import React from "react";

const PrototypeProvider = props => {
  const [query, setQuery] = useQueryParams({
    scene: StringParam,
    panel: StringParam,
    hotspot: StringParam,
    hideSidebar: BooleanParam,
    selected: StringParam
  });

  return (
    <PrototypeContext.Provider
      value={{
        ...props,
        query: query,
        setQuery: setQuery,
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
  let id = props ? props.match.params.id : {};
  return {
    prototype: Prototypes.findOne(id),
    scenes: Scenes.find({ prototypeId: id }).fetch(),
    panels: Panels.find({ prototypeId: id }).fetch(),
    hotspots: Hotspots.find({ prototypeId: id }).fetch()
  };
})(PrototypeProvider);
