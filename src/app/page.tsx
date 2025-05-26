import { gql } from 'graphql-request';
import { graphQLClient } from '../lib/graphql-client';
import Image from 'next/image';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type DveriItem = {
  id: string;
  article: string;
  name: string;
  category: string;
  img?: {
    id: string;
  }
};

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

async function getDveri(): Promise<DveriItem[]> {
  const data = await graphQLClient.request<{ dveri: DveriItem[] }>(query);
  return data.dveri;
}

export default async function Page() {
  const dveri = await getDveri();

  return (
    <main>
      <h1>Список дверей!!!</h1>
      {dveri.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Артикул: {item.article}</p>
          <p>Категорія: {item.category}</p>
          {item.img && <Image src={`${BASE_URL}/assets/${item.img.id}`} width={500} height={500}  alt={item.name}/>}
        </div>
      ))}
    </main>
  );
}
