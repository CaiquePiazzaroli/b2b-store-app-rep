import Item from "@/components/ui/item";
import SearchInput from "@/components/ui/searchinput";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query } = await searchParams;

  const url = query
    ? `http://localhost:8080/itens/${query}/type`
    : "http://localhost:8080/itens";

  const data = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));

  return (
    <main className="max-w-[1200px] w-full flex flex-col mx-auto px-4">
      <section className="flex flex-col md:flex-row gap-4 py-6">
        {/* Sidebar */}
        <div className="w-full md:w-[25%] border rounded-md h-fit pb-6 pt-3 px-3">
          <h4 className="px-2 font-bold border-b mb-6">Buscar produtos</h4>
          <SearchInput
            client={false}
            placeholder="Buscar produtos"
            searchFor="itens"
          />
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-[75%]">
          <Link href="/admin/create_itens">
            <div className="flex items-center gap-2 cursor-pointer p-3 mb-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              <PlusCircleIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Criar novo Produto</span>
            </div>
          </Link>

          <ul className="flex flex-col gap-4">
            {data.map((item: any) => (
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
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
