import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";
import PropTypes from "prop-types";
import { backgrounds } from "../utils/manifest";

const Canvas = props => (
  <Scene>
    {props.scene && (
      <Entity primitive="a-sky" src={backgrounds[props.scene.background].src} />
    )}
    {props.panels.length > 0 &&
      props.panels.map(panel => (
        <Entity
          key={panel._id}
          geometry={{
            primitive: "box",
            depth: panel.depth,
            height: panel.height,
            width: panel.width
          }}
          material={{
            color:
              props.selectedPanel === panel._id
                ? "blue"
                : panel.src
                ? "#fff"
                : "#333",
            src: panel.src
          }}
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
        />
      ))}
    <Entity light={{ type: "point" }} />
  </Scene>
);

Canvas.propTypes = {
  panel: PropTypes.array,
  selectedPanel: PropTypes.string,
  scene: PropTypes.object
};

export default Canvas;
