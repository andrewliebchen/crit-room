import { Button, Box, Flex, Heading, Link, Text, Card } from "theme-ui";
import { elementTypes } from "../utils/types";
import { Plus, Trash, ArrowLeft, Eye } from "react-feather";
import HotspotInspector from "./HotspotInspector";
import PanelInspector from "./PanelInspector";
import PropTypes from "prop-types";
import React, { useState } from "react";
import SceneInspector from "./SceneInspector";

const Pane = props => {
  const [showInspector, setShowInspector] = useState(false);
  const pluralizedType = `${props.query.selected}s`;

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

          {props.query.selected === elementTypes[0] && (
            <SceneInspector {...props.scene} />
          )}
          {props.query.selected === elementTypes[1] && <PanelInspector />}
          {props.query.selected === elementTypes[2] && <HotspotInspector />}
        </Box>
      ) : (
        <Box>
          {props[pluralizedType].length > 0 ? (
            props[pluralizedType].map(item => {
              const isSelected = props.query[props.query.selected] === item._id;
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
                    newQuery[props.query.selected] = item._id;
                    props.setQuery(newQuery);
                    setShowInspector(true);
                  }}
                >
                  <Text>{item.name}</Text>
                </Flex>
              );
            })
          ) : (
            <Text color="secondaryText">No {pluralizedType} yet</Text>
          )}
          <Button onClick={() => console.log("TODO")}>
            Add a {props.query.selected}
          </Button>
        </Box>
      )}
    </Card>
  );
};

Pane.propTypes = {
  hotspots: PropTypes.array,
  panels: PropTypes.array,
  query: PropTypes.object,
  scene: PropTypes.object,
  setQuery: PropTypes.func
};

export default Pane;
