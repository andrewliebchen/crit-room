import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";

const Canvas = props => (
  <Scene>
    {props.scenes.length > 0 &&
      props.scenes.map((scene, i) => (
        <Entity
          key={scene._id}
          geometry={{ primitive: "box" }}
          material={{ color: "black" }}
          position={{ x: 0, y: 0, z: -5 * i - 5 }}
        />
      ))}
    <Entity light={{ type: "point" }} />
  </Scene>
);

export default Canvas;
