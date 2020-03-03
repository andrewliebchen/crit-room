import React from "react";
import { Button, Box, Flex, Heading, Link } from "rebass";
import { Plus } from "react-feather";
import PropTypes from "prop-types";

const Pane = props => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading>{props.title}</Heading>
      <Link onClick={props.onAdd}>
        <Plus />
      </Link>
    </Flex>
    {props.children}
  </Box>
);

Pane.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func
};

export default Pane;
