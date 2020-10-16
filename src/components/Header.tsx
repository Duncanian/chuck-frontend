import React from 'react';
import {Link} from 'react-router-dom';
import { Heading, Flex } from "@chakra-ui/core";

export default (): any => (
  <Flex
    flexDirection="row"
    p="0.5em"
    bg="teal.500"
    color="white"
    w="auto"
    pos="absolute"
    top="0"
    left="0"
    right="0"
    pl="20"
  >
    <Flex align="center" mr={5}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} color="white">
          Chuck Norris
        </Heading>
      </Link>
    </Flex>
  </Flex>
);
