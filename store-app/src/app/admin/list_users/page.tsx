import SearchInput from "@/components/ui/searchinput";
import UserCard from "@/components/ui/user";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query } = await searchParams;

  const url = query
    ? `http://localhost:8080/users/${query}/legalName`
    : "http://localhost:8080/users";

  const data = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));

  return (
    <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col md:flex-row gap-6 py-6">
        {/* Sidebar de busca */}
        <aside className="w-full md:w-1/4 border rounded-md p-4 h-fit">
          <h1 className="font-bold border-b pb-2 mb-6 text-lg">Buscar Clientes</h1>
          <SearchInput client={false} placeholder="Buscar Clientes" searchFor="users" />
        </aside>

        {/* Conteúdo principal com cards */}
        <div className="flex-1">
          <Link href="/admin/create_users">
            <div className="flex items-center gap-2 cursor-pointer p-3 mb-6 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              <PlusCircleIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Criar novo Usuario</span>
            </div>
          </Link>

          <ul className="flex flex-wrap gap-6">
            {data.map((item: any) => (
              <li
                key={item.id}
                className="
                  w-full 
                  sm:w-[48%] 
                  lg:w-[31%] 
                  rounded-md
                "
              >
                <UserCard
                  id={item.id}
                  legal_name={item.legal_name}
                  trade_name={item.trade_name}
                  cnpj={item.cnpj}
                  username={item.username}
                  password={item.password}
                  email={item.email}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
