import { ArrowRight } from "react-feather";
import { Card, Heading, Button, Flex, Text } from "theme-ui";
import { elementTypes } from "../utils/types";
import Account from "./Account";
import PropTypes from "prop-types";
import PrototypeContext from "./PrototypeContext";
import React from "react";

const Arrow = () => (
  <Flex sx={{ mx: 2, color: "secondaryText" }}>
    <ArrowRight />
  </Flex>
);

const Header = () => (
  <PrototypeContext.Consumer>
    {props => (
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
                variant={
                  props.query.selected === type ? "primary" : "transparent"
                }
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
    )}
  </PrototypeContext.Consumer>
);

Header.propTypes = {
  query: PropTypes.object,
  setQuery: PropTypes.func
};

export default Header;
