import React from 'react';
import { CircularProgress, Flex } from "@chakra-ui/core";

const Loader = () => {
  return (
    <Flex
        pos="absolute"
        top="40%"
        left="45%"
    >
      <CircularProgress isIndeterminate color="teal" size="120px"></CircularProgress>
    </Flex>
  );
};

export default Loader;
