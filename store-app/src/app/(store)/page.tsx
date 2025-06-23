import Item from "@/components/ui/item";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  //Busca a query type na url
  const { query } = await searchParams;

  //Veifica se existe a query type
  const url = query
    ? `http://localhost:8080/itens/${query}/type`
    : "http://localhost:8080/itens";

  //Chama a api e faz uma busca
  const data = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));
  
  return (
    <main className="max-w-10/12 m-auto">
      <h1>Home de produtos</h1>
      <ul className="flex gap-4 flex-wrap">
        {data.map((item: any) => {
          return (
            <li key={item.id}>
              <Item
                client={true}
                id={item.id}
                type={item.type}
                description={item.description}
                imagePath={item.imagePath}
                value={item.value}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
