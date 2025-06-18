import Image from "next/image";
import * as React from 'react'
import ButtonAddCart from "@/components/ui/buttonAddCart";
type Params = {
  //params é o argumento que o next reconheçe e é obrigatório para pegar os parametros da url
  params: {
    id: string;
  };
};


async function getItemById(id: string) {
  const res = await fetch(`http://localhost:8080/itens/${id}/id`);
  if (!res.ok) {
    throw new Error("Failed to fetch item");
  }
    return res.json();
  }


export default async function ItemPage({ params }: Params) {
  const { id } = await params;
  const item = await getItemById(id);

  return (
    <div className="max-w-6/12 m-auto flex justify-center my-20 gap-10">
      <Image
        src={item.imagePath}
        alt={item.description}
        width={600}
        height={300}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">{item.description}</h1>
          <p className="">{item.description}</p>
          <p className="mt-2 font-semibold">Price: ${item.value}</p>
        </div>

        <div className="flex gap-6 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Buy
          </button>
          <ButtonAddCart id={ id }/>
        </div>
      </div>
    </div>
  );
}
