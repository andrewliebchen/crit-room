import "aframe";
import { backgrounds } from "../utils/manifest";
import { Entity, Scene } from "aframe-react";
import PropTypes from "prop-types";
import React from "react";

const Canvas = props => (
  <Scene>
    {props.scene && props.scene.background !== "none" && (
      <Entity primitive="a-sky" src={backgrounds[props.scene.background].src} />
    )}
    {props.panels.length > 0 &&
      props.panels.map(panel => (
        <Entity
          key={panel._id}
          position={{
            x: panel.xPosition,
            y: panel.yPosition,
            z: panel.zPosition
          }}
          rotation={{
            x: panel.xRotation,
            y: panel.yRotation,
            z: panel.zRotation
          }}
        >
          <Entity
            geometry={{
              primitive: "box",
              depth: panel.depth,
              height: panel.height,
              width: panel.width
            }}
            material={{
              color: panel.src ? "#fff" : "#333",
              src: panel.src
            }}
          />
          {props.hotspots &&
            props.hotspots.map(hotspot => (
              <Entity
                key={hotspot._id}
                events={{
                  click: props.onHotspotClick.bind(null, hotspot.link)
                }}
                geometry={{
                  primitive: "plane",
                  height: hotspot.height,
                  width: hotspot.width
                }}
                material={{ color: "blue", opacity: 0.1 }}
                position={{
                  x: hotspot.x,
                  y: hotspot.y,
                  z: 0.1
                }}
              />
            ))}
        </Entity>
      ))}
    <Entity light={{ type: "point" }} />
    <Entity primitive="a-camera">
      <Entity
        primitive="a-cursor"
        animation__click={{
          property: "scale",
          startEvents: "click",
          from: "0.1 0.1 0.1",
          to: "1 1 1",
          dur: 150
        }}
      />
    </Entity>
  </Scene>
);

Canvas.propTypes = {
  panel: PropTypes.array,
  selectedPanel: PropTypes.string,
  scene: PropTypes.object,
  hotspots: PropTypes.array,
  onHotspotClick: PropTypes.func
};

export default Canvas;
