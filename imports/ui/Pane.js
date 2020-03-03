import React from "react";
import { Button, Box, Flex, Heading, Link, Text } from "rebass";
import { Plus, ArrowLeft } from "react-feather";
import PropTypes from "prop-types";

const Pane = props => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between" mb={3}>
      <Flex alignItems="center">
        <Link onClick={props.onAdd} display="flex" mr={1}>
          <ArrowLeft />
        </Link>
        <Heading>{props.title}</Heading>
      </Flex>
      <Link onClick={props.onAdd} display="flex">
        <Plus />
      </Link>
    </Flex>
    <Box mb={3}>
      {props.items.length > 0 &&
        props.items.map(item => {
          const isSelected = props.selectedItem === item._id;
          return (
            <Box
              key={item._id}
              variant="listItem"
              bg={isSelected && "primary"}
              color={isSelected && "white"}
              onClick={props.onSelect.bind(null, isSelected ? null : item._id)}
            >
              <Text>{item.name}</Text>
            </Box>
          );
        })}
    </Box>
    {props.selectedItem && props.inspector}
  </Box>
);

Pane.defaultProps = {
  items: []
};

Pane.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  items: PropTypes.array,
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func,
  inspector: PropTypes.node
};

export default Pane;
