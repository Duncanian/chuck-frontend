// import ApolloClient from 'apollo-boost';

import { 
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const link = createHttpLink({
  uri: 'https://chuck-backend-sov.herokuapp.com/graphql'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

