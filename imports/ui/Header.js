import React from "react";
import { Card, Heading, Button, Flex, Text } from "theme-ui";
import { ArrowRight } from "react-feather";
import PropTypes from "prop-types";
import { elementTypes } from "../utils/types";
import Account from "./Account";

const Arrow = () => (
  <Flex sx={{ mx: 2, color: "secondaryText" }}>
    <ArrowRight />
  </Flex>
);

const Header = props => (
  <Card
    sx={{
      px: 3,
      py: 2
    }}
  >
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Heading mr={3}>DeeDeeDee</Heading>
      {elementTypes.map((type, i) => (
        <Flex key={type} sx={{ alignItems: "center" }}>
          {i > 0 && <Arrow />}
          <Button
            variant={props.selectedType === type ? "primary" : "transparent"}
            onClick={() => props.setQuery({ selected: type })}
          >
            <Text variant="capitalize">{type}</Text>
          </Button>
        </Flex>
      ))}
      <Flex ml={3}>
        <Account />
      </Flex>
    </Flex>
  </Card>
);

Header.propTypes = {
  selectedType: PropTypes.oneOf(elementTypes),
  setQuery: PropTypes.func
};

export default Header;
