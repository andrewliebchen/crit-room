import React, { useState } from "react";
import { Button, Box, Flex, Heading, Link, Text, Card } from "theme-ui";
import { Plus, Trash, ArrowLeft, ArrowRight, Eye } from "react-feather";
import PropTypes from "prop-types";
import HotspotInspector from "./HotspotInspector";
import SceneInspector from "./SceneInspector";
import PanelInspector from "./PanelInspector";
import { elementTypes } from "../utils/types";

const Pane = props => {
  const [showInspector, setShowInspector] = useState(true);

  return (
    <Card
      sx={{
        mt: 2,
        userSelect: "none",
        width: 300
      }}
    >
      {showInspector ? (
        <Box>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Button
              sx={{ flex: "1 1 auto", mr: 2 }}
              onClick={() => setShowInspector(false)}
              title="Back"
            >
              <ArrowLeft />{" "}
              <Text variant="capitalize">{props.selectedType}</Text>
            </Button>
            <Button title="hide" mr={2}>
              <Eye />
            </Button>
            <Button title="delete" variant="negative">
              <Trash />
            </Button>
            {/* <Button onClick={props.onAdd} title="Add">
            <Plus />
          </Button> */}
          </Flex>

          {props.selectedType === elementTypes[0] && (
            <SceneInspector {...props.scene} />
          )}
          {props.selectedType === elementTypes[1] && <PanelInspector />}
          {props.selectedType === elementTypes[2] && <HotspotInspector />}
        </Box>
      ) : props[props.selectedType].length > 0 ? (
        props[props.selectedType].map(item => {
          const isSelected = props.selectedItem === item._id;
          return (
            <Box key={item._id}>
              <Flex
                variant="listItem"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  bg: isSelected && "primary",
                  color: isSelected && "white"
                }}
                onClick={() => setShowInspector(true)}
                // onClick={props.onSelect.bind(null, item._id)}
              >
                <Text>{item.name}</Text>
                {isSelected && (
                  <Flex>
                    {props.onDrilldown && (
                      <Button
                        color="inherit"
                        onClick={props.onDrilldown}
                        title="Drilldown"
                      >
                        <ArrowRight />
                      </Button>
                    )}
                  </Flex>
                )}
              </Flex>
              {isSelected && props.inspector}
            </Box>
          );
        })
      ) : (
        <Flex sx={{ justifyContent: "center" }}>
          <Text color="secondaryText">Nothing yet</Text>
        </Flex>
      )}
    </Card>
  );
};

Pane.defaultProps = {
  items: []
};

Pane.propTypes = {
  inspector: PropTypes.node,
  items: PropTypes.array,
  onAdd: PropTypes.func,
  onSelect: PropTypes.func,
  onDrilldown: PropTypes.func,
  onDrillup: PropTypes.func,
  selectedItem: PropTypes.string,
  scene: PropTypes.object,
  panels: PropTypes.array,
  hotspots: PropTypes.array
};

export default Pane;
