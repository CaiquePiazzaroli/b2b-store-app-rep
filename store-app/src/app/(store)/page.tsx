"use client";

import Item from "@/components/ui/item";
import { useEffect, useState } from "react";

type ItemType = {
  id: number;
  type: string;
  description: string;
  imagePath: string;
  value: number;
};

export default function Home() {

  //Tipando o estado
  const [itens, setItens] = useState<ItemType[]>([]);

  //Url de consulta de itens
  const urlItens = "http://localhost:8080/itens";
  
  //Popula o esto itens com os itens do banco de dados
  useEffect(() => {
    fetch(urlItens)
    .then(response => response.json())
    .then(json => setItens(json))
    .catch(e => console.log(e));
  }, []);

  //Componente
  return (
    <main className="max-w-10/12 m-auto">
      <h1>Home de produtos</h1>
      <ul className="flex gap-4">
        {itens.map(item => {
          return <li key={item.id}>
            <Item id={item.id} type={item.type} description={item.description} imagePath={item.imagePath} value={item.value} />
          </li>
        })}
      </ul>
    </main>
  );
}
