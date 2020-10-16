// import ApolloClient from 'apollo-boost';

import { 
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const link = createHttpLink({
  // uri: "https://mpjk0plp9.lp.gql.zone/graphql"
  uri: 'http://localhost:4000/graphql'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

