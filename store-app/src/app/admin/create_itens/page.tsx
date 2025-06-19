"use client";

import React, { useState } from "react";

export default function CreateItemPage() {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    imagePath: "",
    price: "",
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
      const response = await fetch("http://localhost:8080/itens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: formData.type,
          description: formData.description,
          imagePath: formData.imagePath,
          value: Number(formData.price),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar o produto");
      }

      alert("Produto criado com sucesso!");
      setFormData({
        type: "",
        description: "",
        imagePath: "",
        price: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao criar o produto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Criar novo produto</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="type"
          placeholder="Título do produto"
          value={formData.type}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="imagePath"
          placeholder="URL da imagem"
          value={formData.imagePath}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="price"
          placeholder="Valor do produto"
          value={formData.price}
          onChange={handleChange}
          required
          min={0}
          step="0.01"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white font-semibold px-6 py-3 rounded transition ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Enviando..." : "Criar Produto"}
        </button>
      </form>
    </section>
  );
}
