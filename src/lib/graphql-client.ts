import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient('https://directus-production-2529.up.railway.app/graphql', {
  fetch: (input, init) => fetch(input, { ...init, cache: 'no-store' }),
});