import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";
import PropTypes from "prop-types";

const Canvas = props => (
  <Scene>
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
          material={{ color: "#333" }}
          position={{ x: panel.x, y: panel.y, z: panel.z }}
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
  panel: PropTypes.array
};

export default Canvas;