import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { useParams, Link } from "react-router-dom";
import {gql} from 'apollo-boost';
import { Flex, Text, Image, Box, Button } from "@chakra-ui/core";
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
  const { loading, data } = useQuery(GET_RANDOM_JOKE, {
    variables: { category: `${category}` },
  }); 
  if (loading) return <Loader />;
  const { random }: any = data;
  
  return (
    <React.Fragment>
      {random && (
        <Box position="absolute" top="20%" left="23%" width="50%">
          <Flex justify="center">
            <Image src={random.icon_url} alt={random.icon_url} />
          </Flex>
          <Flex>
            <Text fontSize="30px" textAlign="center">
              {random.value}
            </Text>
          </Flex>

          <Flex justify="center">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="teal.500"
              >
                Back to Home Page
              </Button>
            </Link>
          </Flex>
        </Box>
      )}
      
    </React.Fragment>
  );
}

export default Joke;
