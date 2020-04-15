import "aframe";
import { backgrounds } from "../utils/manifest";
import { Entity, Scene } from "aframe-react";
import PropTypes from "prop-types";
import PrototypeContext from "./PrototypeContext";
import React from "react";
import Loading from "./Loading";

const Canvas = () => (
  <PrototypeContext.Consumer>
    {props => (
      <Loading ready={props.query.selected}>
        <Scene vrModeUi={{ enabled: true }}>
          {props.scene && props.scene.background !== "none" && (
            <Entity
              primitive="a-sky"
              src={backgrounds[props.scene.background].src}
            />
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
                    primitive: "plane",
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
                        click: props.setQuery({
                          scene: props.scene._id,
                          panel: null,
                          hotspot: hotspot.link
                        })
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
      </Loading>
    )}
  </PrototypeContext.Consumer>
);

Canvas.propTypes = {
  panels: PropTypes.array,
  scene: PropTypes.object,
  hotspots: PropTypes.array,
  onHotspotClick: PropTypes.func
};

export default Canvas;
