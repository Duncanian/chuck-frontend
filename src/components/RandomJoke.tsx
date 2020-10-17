import React from 'react';
import {useQuery, gql} from '@apollo/react-hooks';
import { useParams, Link } from "react-router-dom";
import { Flex, Text, Image, Box, Button, Icon } from "@chakra-ui/core";
import Loader from './Loader';

const GET_RANDOM_JOKE = gql`
  query random($category: String!) {
    random(category: $category) {
      id
      value
      categories
      icon_url
    }
  }
`;


const Joke = function(): any {
  const { category }: any = useParams();
  const { loading, data, refetch } = useQuery(GET_RANDOM_JOKE, {
    variables: { category: `${category}` },
    notifyOnNetworkStatusChange: true,
  });
  
  if (loading) return <Loader />;
  const { random }: any = data;

  return (
    <React.Fragment>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
        <Flex pos="absolute" top="15%" left="15%" cursor="pointer">
          <Icon name="arrow-back" size="10%"/>
        </Flex>
      </Link>
      {random && (
        <Box pos="absolute" top="20%" left="23%" w="50%">
          <Flex justify="center">
            <Image src={random.icon_url} alt={random.icon_url} />
          </Flex>
          <Flex justify="center">
            <Text fontSize="30px" textAlign="center">
              {random.value}
            </Text>
          </Flex>

          <Flex justify="center">
            <Button
                size="md"
                h="48px"
                w="200px"
                border="2px"
                borderColor="teal.500"
                cursor="pointer"
                onClick={() => refetch()}
              >
                See another joke
              </Button>
          </Flex>
        </Box>
      )}

    </React.Fragment>
  );
}

export default Joke;
