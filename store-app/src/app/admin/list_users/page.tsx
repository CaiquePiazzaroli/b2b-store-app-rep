import Item from "@/components/ui/item";
import SearchInput from "@/components/ui/searchinput";
import UserCard from "@/components/ui/user";

//searchParams é por onde acessamos as querys da url
export default async function Page(
  {
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
) {

  const { query } = await searchParams;

  //Veifica se tem a query query
  const url = query
    ? `http://localhost:8080/users/${query}/legalName`
    : "http://localhost:8080/users";


  const data = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));

  return (
    <main className="max-w-8/12 flex flex-col m-auto">
      <section className="flex p-6 gap-2">
        <div className="w-[20%] border rounded-md h-fit pb-6 pt-3 px-3">
          <h1 className="px-2 font-bold border-b mb-6">Buscar Clientes</h1>
          <SearchInput client={false} placeholder="Buscar Clientes" searchFor="users"/>
        </div>
        <ul className="w-full flex flex-wrap gap-2">
          {data.map((item: any) => {
            return (
              <li key={item.id}>
                <UserCard
                  legal_name={item.legal_name}
                  trade_name={item.trade_name}
                  cnpj={item.cnpj}
                  username={item.username}
                  password={item.password}
                  email={item.email}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
