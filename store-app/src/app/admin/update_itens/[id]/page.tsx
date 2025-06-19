"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Item = {
  id: string;
  type: string;
  description: string;
  imagePath: string;
  value: string;
};

export default function UpdateItensPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id;

  const [data, setData] = useState<Item>({
    id: "",
    type: "",
    description: "",
    imagePath: "",
    value: "",
  });

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8080/itens/${id}/id`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:8080/itens`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        type: data.type,
        description: data.description,
        imagePath: data.imagePath,
        value: data.value,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao atualizar o item");
        }
        return res.json();
      })
      .then(() => {
        alert("Produto atualizado com sucesso!");
        router.push("/admin/list_itens");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao atualizar o produto");
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    );

    if (!confirmDelete) return;

    fetch(`http://localhost:8080/itens/${id}/id`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao deletar o item");
        }
        alert("Produto deletado com sucesso!");
        router.push("/admin/list_itens");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao deletar o produto");
      });
  };

  return (
    <section className="max-w-5xl m-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Editar Produto</h1>
      <div>
        {data.imagePath && (
          <Image
            src={data.imagePath}
            alt={data.type}
            width={200}
            height={200}
          />
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Código do produto
            <input
              type="text"
              name="id"
              placeholder="Id do produto"
              value={data.id}
              onChange={handleChange}
              className="border px-2 py-1 rounded"
            />
          </label>

          <input
            type="text"
            name="type"
            placeholder="Título do produto"
            value={data.type}
            onChange={handleChange}
            required
            className="border px-2 py-1 rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição"
            value={data.description}
            onChange={handleChange}
            required
            className="border px-2 py-1 rounded"
          />
          <input
            type="text"
            name="imagePath"
            placeholder="URL da imagem"
            value={data.imagePath}
            onChange={handleChange}
            required
            className="border px-2 py-1 rounded"
          />
          <input
            type="text"
            name="value"
            placeholder="Valor do produto"
            value={data.value}
            onChange={handleChange}
            required
            className="border px-2 py-1 rounded"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Atualizar Produto
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Deletar Produto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
