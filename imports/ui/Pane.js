import React, { useState } from "react";
import { Button, Box, Flex, Heading, Link, Text, Card } from "theme-ui";
import { Plus, Trash, ArrowLeft, Eye } from "react-feather";
import PropTypes from "prop-types";
import HotspotInspector from "./HotspotInspector";
import SceneInspector from "./SceneInspector";
import PanelInspector from "./PanelInspector";
import { elementTypes } from "../utils/types";

const Pane = props => {
  const [showInspector, setShowInspector] = useState(true);
  const pluralizedType = `${props.selectedType}s`;

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
              <ArrowLeft /> <Text variant="capitalize">{pluralizedType}</Text>
            </Button>
            <Button title="hide" mr={2}>
              <Eye />
            </Button>
            <Button title="delete" variant="negative">
              <Trash />
            </Button>
          </Flex>

          {props.selectedType === elementTypes[0] && (
            <SceneInspector {...props.scene} />
          )}
          {props.selectedType === elementTypes[1] && <PanelInspector />}
          {props.selectedType === elementTypes[2] && <HotspotInspector />}
        </Box>
      ) : (
        <Box>
          {props[pluralizedType].length > 0 ? (
            props[pluralizedType].map(item => {
              const isSelected = props.selectedItem === item._id;
              return (
                <Flex
                  key={item._id}
                  variant="listItem"
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    bg: isSelected && "primary",
                    color: isSelected && "white"
                  }}
                  onClick={() => {
                    let newQuery = {};
                    newQuery[props.selectedType] = item._id;
                    props.setQuery(newQuery);
                    setShowInspector(true);
                  }}
                >
                  <Text>{item.name}</Text>
                </Flex>
              );
            })
          ) : (
            <Text color="secondaryText">No {props.selectedType} yet</Text>
          )}
          <Button onClick={() => console.log("TODO")} title="Add">
            <Plus />
          </Button>
        </Box>
      )}
    </Card>
  );
};

Pane.defaultProps = {
  items: []
};

Pane.propTypes = {
  items: PropTypes.array,
  setQuery: PropTypes.func,
  selectedItem: PropTypes.string,
  scene: PropTypes.object,
  panels: PropTypes.array,
  hotspots: PropTypes.array
};

export default Pane;
