import Item from "@/components/ui/item";
import SearchInput from "@/components/ui/searchinput";
import UserCard from "@/components/ui/user";

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
    <main className="max-w-[1200px] w-full flex flex-col mx-auto px-4">
      <section className="flex flex-col md:flex-row gap-4 py-6">
        {/* Sidebar de busca */}
        <div className="w-full md:w-[25%] border rounded-md h-fit pb-6 pt-3 px-3">
          <h1 className="px-2 font-bold border-b mb-6">Buscar Clientes</h1>
          <SearchInput
            client={false}
            placeholder="Buscar Clientes"
            searchFor="users"
          />
        </div>

        {/* Cards de usuários */}
        <ul className="w-full md:w-[75%] flex flex-wrap gap-4">
          {data.map((item: any) => (
            <li key={item.id} className="w-full sm:w-[48%] lg:w-[32%]">
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
      </section>
    </main>
  );
}
