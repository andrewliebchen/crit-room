import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";
import PropTypes from "prop-types";

const Canvas = props => (
  <Scene>
    {props.panels.length > 0 &&
      props.panels.map((panel, i) => (
        <Entity
          key={panel._id}
          geometry={{ primitive: "box" }}
          material={{ color: "black" }}
          position={{ x: 0, y: 0, z: -5 * i - 5 }}
        />
      ))}
    <Entity light={{ type: "point" }} />
  </Scene>
);

Canvas.propTypes = {
  panel: PropTypes.array
};

export default Canvas;
