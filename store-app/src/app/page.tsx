"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const urlUsers = "http://localhost:8080/users";

  //Sincroniza o componente Home com um componente externo (API)
  useEffect(() => {

    //Função asíncrona para buscar dados
    async function fetchUsers() {
      try {
        const response = await fetch(urlUsers);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, [users]); //[users] - Atualiza a tela toda vez que users é alterado

  return (
    <div>
      <h1>Usuários do sistema</h1>
      <div>
        {users.map((user: any) => (
          <div key={user.id}>
            <p>Legal name: {user.legal_name}</p>
            <p>CNPJ: {user.cnpj}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
