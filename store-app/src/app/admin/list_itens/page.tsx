import Item from "@/components/ui/item";
import SearchInput from "@/components/ui/searchinput";
import Link from "next/link";

//searchParams é por onde acessamos as querys da url
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query } = await searchParams;

  //Veifica se tem a query type
  const url = query
    ? `http://localhost:8080/itens/${query}/type`
    : "http://localhost:8080/itens";

  const data = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));

  return (
    <main className="max-w-8/12 flex flex-col m-auto">
      <section className="flex p-6 gap-2">
        <div className="w-[20%] border rounded-md h-fit pb-6 pt-3 px-3">
          <h1 className="px-2 font-bold border-b mb-6">Buscar produtos</h1>
          <SearchInput client={false} placeholder="Buscar produtos" searchFor="itens"/>
        </div>
        <ul className="w-[70%]">
          {data.map((item: any) => {
            return (
              <li key={item.id}>
                <Item
                  client={false}
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
      </section>
    </main>
  );
}
