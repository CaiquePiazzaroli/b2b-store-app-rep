import Footer from "@/components/ui/footer";
import Item from "@/components/ui/item";
import Image from "next/image";

//searchParams: serve para buscar dados dos parametros na url
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  //Busca o parametro query na url
  //ex de url: http://localhost:3000/?query=Smart
  const { query } = await searchParams;

  //Veifica se existe o parametro query na url
  const url = query
    ? `http://localhost:8080/itens/${query}/type`
    : "http://localhost:8080/itens";

  //Chama a api e faz uma busca
  const data = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));

  //Componente
  return (
    <>
      <main className="max-w-10/12 m-auto min-h-[86vh]">

        <div className="my-6 flex flex-row">
          <h1 className="border-b-2 border-blue-500 md:max-w-md font-bold text-gray-400 text-[24px] md:text-[32px]">Home de <span className="text-blue-500">produtos</span></h1>
          <div className="grow-1 border-b-2 border-gray-300"></div> 
        </div>

        <ul className="flex gap-4 flex-wrap m-auto">
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
      <Footer />
    </>
  );
}
