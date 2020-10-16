import React from 'react';
import { CircularProgress, Flex } from "@chakra-ui/core";

const Loader = () => {
  return (
    <Flex
        position="absolute"
        top="40%"
        left="45%"
    >
      <CircularProgress isIndeterminate color="green" size="120px"></CircularProgress>
    </Flex>
  );
};

export default Loader;
