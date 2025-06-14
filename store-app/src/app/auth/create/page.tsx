"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateUser() {

  //Url para fazer requisição de post
  const urlUsers = "http://localhost:8080/users";

  //Criando o objeto que irá receber os valores do input
  const [formData, setFormData] = useState({
    legal_name: "",
    trade_name: "",
    cnpj: "",
    username: "",
    password: "",
    email: "",
  });

  //
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  }

  //Função que executa quando o usuario clica em criar conta
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(urlUsers, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      const data = await response.json();
      console.log("Usuário criado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-[20px]">
        Criar usuário
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto gap-4">
        <div>
          <Label htmlFor="legal_name">Razão Social:</Label>
          <Input id="legal_name" type="text" value={formData.legal_name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="fantasia">Fantasia:</Label>
          <Input id="fantasia" type="text" value={formData.trade_name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="cnpj">CNPJ:</Label>
          <Input id="cnpj" type="text" value={formData.cnpj} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="username">Nome de usuário:</Label>
          <Input id="username" type="text" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="password">Senha:</Label>
          <Input id="password" type="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <Input type="submit" value='Enviar'></Input>
      </form>
    </div>
  );
}
