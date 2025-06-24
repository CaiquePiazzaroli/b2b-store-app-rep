"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type User = {
  id: string;
  legal_name: string;
  trade_name: string;
  cnpj: string;
  username: string;
  password: string;
  email: string;
};

export default function UpdateUserPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [data, setData] = useState<User>({
    id: "",
    legal_name: "",
    trade_name: "",
    cnpj: "",
    username: "",
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID recebido:", id);
    if (!id) return;

    fetch(`http://localhost:8080/users/${id}/id`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar dados do usuário");
        }
        return res.json();
      })
      .then((json) => {
        console.log("Dados recebidos:", json);
        setData({
          id: json.id || "",
          legal_name: json.legal_name || "",
          trade_name: json.trade_name || "",
          cnpj: json.cnpj || "",
          username: json.username || "",
          password: json.password || "",
          email: json.email || "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao buscar dados do usuário");
      })
      .finally(() => setLoading(false));
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

    fetch(`http://localhost:8080/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao atualizar o usuário");
        }
        return res.json();
      })
      .then(() => {
        alert("Usuário atualizado com sucesso!");
        router.push("/admin/list_users");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao atualizar o usuário");
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este usuário?"
    );

    if (!confirmDelete) return;

    fetch(`http://localhost:8080/users/${id}/id`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao deletar o usuário");
        }
        alert("Usuário deletado com sucesso!");
        router.push("/admin/list_users");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao deletar o usuário");
      });
  };

  if (loading) {
    return <p className="text-center">Carregando...</p>;
  }

  if (!id) {
    return <p className="text-center">Carregando parâmetros...</p>;
  }

  return (
    <section className="max-w-4xl m-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Editar Usuário</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="id"
          value={data.id}
          onChange={handleChange}
          readOnly
          className="border px-2 py-1 rounded bg-gray-100 cursor-not-allowed"
        />

        <input
          type="text"
          name="legal_name"
          placeholder="Nome Legal"
          value={data.legal_name}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <input
          type="text"
          name="trade_name"
          placeholder="Nome Fantasia"
          value={data.trade_name}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <input
          type="text"
          name="cnpj"
          placeholder="CNPJ"
          value={data.cnpj}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={data.password}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Atualizar Usuário
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Deletar Usuário
          </button>
        </div>
      </form>
    </section>
  );
}
