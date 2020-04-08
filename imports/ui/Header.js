import React from "react";
import { Card, Heading, Button, Flex } from "theme-ui";
import { ArrowRight } from "react-feather";

const Arrow = () => (
  <Flex sx={{ mx: 3, color: "secondaryText" }}>
    <ArrowRight />
  </Flex>
);

const Header = props => (
  <Card
    sx={{
      position: "fixed",
      top: 16,
      left: 16,
      px: 3,
      py: 2,
      zIndex: 1
    }}
  >
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Heading mr={3}>DeeDeeDee</Heading>
      <Button variant="transparent">Scenes</Button>
      <Arrow />
      <Button variant="transparent">Panels</Button>
      <Arrow />
      <Button variant="transparent">Hotspots</Button>
    </Flex>
  </Card>
);

export default Header;
