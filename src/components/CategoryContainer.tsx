import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {Link} from 'react-router-dom';
import Loader from './Loader';
import { Heading, Flex, Text, Box, SimpleGrid } from "@chakra-ui/core";

const CategoryContainer = () => {
  const {loading, data} = useQuery(gql`
    query {
      category {
        categories
      }
    }
  `);

  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <Box position="absolute" top="5%" left="23%" width="50%">
        <Flex justify="center">
          <Heading position="relative" top="100px">Select any category to get the joke</Heading>
        </Flex>

        <SimpleGrid minChildWidth="120px" spacing="40px"
          position="relative" top="100px"
        >
          {data.category &&
            data.category.categories.map(function (category: any):any {
            return (
              <Box bg="teal.500" height="50px">
                <Link key={category} to={`/random/${category}`} style={{ textDecoration: 'none' }}>
                  <Text color="white" textAlign="center">{category}</Text>
                </Link>
              </Box>
            );
          })}

        </SimpleGrid>
      </Box>
    </React.Fragment>
)};

export default CategoryContainer;
