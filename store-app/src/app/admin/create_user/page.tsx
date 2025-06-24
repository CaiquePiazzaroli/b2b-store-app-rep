"use client";

import React, { useState } from "react";

export default function CreateUserPage() {
  const [formData, setFormData] = useState({
    legal_name: "",
    trade_name: "",
    cnpj: "",
    username: "",
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          legal_name: formData.legal_name,
          trade_name: formData.trade_name,
          cnpj: formData.cnpj,
          username: formData.username,
          password: formData.password,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar usário");
      }

      alert("Usuario criado com sucesso!");
      setFormData({
        legal_name: "",
        trade_name: "",
        cnpj: "",
        username: "",
        password: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao criar o Usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Criar novo Usuário</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="legal_name"
          placeholder="Razão social"
          value={formData.legal_name}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="trade_name"
          placeholder="Fantasia"
          value={formData.trade_name}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="cnpj"
          placeholder="CNPJ"
          value={formData.cnpj}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="username"
          placeholder="Nome de usuario"
          value={formData.username}
          onChange={handleChange}
          required
          min={0}
          step="0.01"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
          min={0}
          step="0.01"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          min={0}
          step="0.01"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className={`border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50
          }`}
        >
          {loading ? "Enviando..." : "Criar Usuário"}
        </button>
      </form>
    </section>
  );
}
