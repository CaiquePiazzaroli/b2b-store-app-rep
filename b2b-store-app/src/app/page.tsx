
async function getData() {
  const res = await fetch('http://localhost:3001/home/usuario/6', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Falha ao buscar dados');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}