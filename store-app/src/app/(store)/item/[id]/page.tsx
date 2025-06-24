import Image from "next/image";
import * as React from 'react';
import ButtonAddCart from "@/components/ui/buttonAddCart";

type Params = {
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
    <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-center my-20 gap-10 px-4">
      <div className="w-full md:w-[500px]">
        <Image
          src={item.imagePath}
          alt={item.description}
          width={500}
          height={400}
          className="rounded-lg object-contain w-full h-auto"
        />
      </div>

      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h1 className="text-2xl font-bold mb-4">{item.type}</h1>
          <p>{item.description}</p>
          <p className="mt-2 font-semibold">Price: ${item.value}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Comprar
          </button>
          <ButtonAddCart id={id} />
        </div>
      </div>
    </div>
  );
}
