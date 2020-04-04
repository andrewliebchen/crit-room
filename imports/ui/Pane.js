import React from "react";
import { Button, Box, Flex, Heading, Link, Text } from "rebass";
import { Plus, Trash, ArrowLeft, ArrowRight } from "react-feather";
import PropTypes from "prop-types";

const Pane = props => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between" mb={3}>
      <Flex alignItems="center">
        {props.onDrillup && (
          <Button variant="icon" mr={1} onClick={props.onDrillup} title="Back">
            <ArrowLeft />
          </Button>
        )}
        <Heading>{props.title}</Heading>
      </Flex>
      <Button variant="icon" onClick={props.onAdd} title="Add">
        <Plus />
      </Button>
    </Flex>

    {props.items.length > 0 &&
      props.items.map(item => {
        const isSelected = props.selectedItem === item._id;
        return (
          <Box key={item._id}>
            <Flex
              variant="listItem"
              alignItems="center"
              justifyContent="space-between"
              bg={isSelected && "primary"}
              color={isSelected && "white"}
              onClick={props.onSelect.bind(null, item._id)}
            >
              <Text>{item.name}</Text>
              {isSelected && (
                <Flex>
                  <Button variant="icon" color="inherit" title="Delete">
                    <Trash />
                  </Button>
                  {props.onDrilldown && (
                    <Button
                      variant="icon"
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
      })}
  </Box>
);

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
  title: PropTypes.string
};

export default Pane;
