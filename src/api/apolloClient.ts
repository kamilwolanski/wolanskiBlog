import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// const DATO_TOKEN = '189f78e078cae1db31f355940fef1b';

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com',
});
console.log(process.env.REACT_APP_DATO_TOKEN);

const authLink = setContext((_, { headers }) => {
  return {
    headers: { ...headers, authorization: `Bearer ${process.env.REACT_APP_DATO_TOKEN}` },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
