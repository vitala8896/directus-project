import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://directus-production-2529.up.railway.app/graphql';

export const graphQLClient = new GraphQLClient(endpoint);
