import { gql } from 'graphql-request';
import { graphQLClient } from '../lib/graphql-client';

type DveriItem = {
  id: string;
  article: string;
  name: string;
  category: string;
  img?: {
    id: string;
  }
};

type DveriResponse = {
  dveri: DveriItem[];
};

export const getDveri = async (): Promise<DveriItem[]> => {
  const query = gql`
    {
      dveri {
        id
        article
        name
        category
        img {
          id
        }
      }
    }
  `;

  const data: DveriResponse = await graphQLClient.request(query);
  return data.dveri;
};