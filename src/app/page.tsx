import { gql } from 'graphql-request';
import { graphQLClient } from '../lib/graphql-client';

type DveriItem = {
  id: string;
  article: string;
  name: string;
  category: string;
};

const query = gql`
  {
    dveri {
      id
      article
      name
      category
    }
  }
`;

async function getDveri(): Promise<DveriItem[]> {
  const data = await graphQLClient.request<{ dveri: DveriItem[] }>(query);
  return data.dveri;
}

export default async function Page() {
  const dveri = await getDveri();

  return (
    <main>
      <h1>Список дверей</h1>
      {dveri.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Артикул: {item.article}</p>
          <p>Категорія: {item.category}</p>
        </div>
      ))}
    </main>
  );
}
