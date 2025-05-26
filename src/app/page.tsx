import { getDveri } from '@/services/actions';
import Image from 'next/image';
const BASE_URL = "https://directus-production-2529.up.railway.app";



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
          {item.img?.id && <Image src={`${BASE_URL}/assets/${item.img.id}`} width={500} height={500}  alt={item.name}/>}
        </div>
      ))}
    </main>
  );
}
