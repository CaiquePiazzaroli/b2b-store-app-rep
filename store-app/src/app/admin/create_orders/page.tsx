'use client';

import React, { useState } from 'react';

export default function OrderForm() {
  const [idUser, setIdUser] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [total, setTotal] = useState('');
  const [items, setItems] = useState([{ id_item: '', quantity: '' }]);

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { id_item: '', quantity: '' }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      id_user: parseInt(idUser),
      order_date: orderDate,
      total: parseFloat(total),
      items: items.map(item => ({
        id_item: parseInt(item.id_item),
        quantity: parseInt(item.quantity)
      })),
    };

    try {
      const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Pedido criado com sucesso! ID: ' + data.id);
      } else {
        const errorData = await response.json();
        alert('Erro ao criar pedido: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      alert('Erro de conexão: ' + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">Criar Pedido</h2>

      <label className="block">
        ID do Usuário:
        <input
          type="number"
          value={idUser}
          onChange={(e) => setIdUser(e.target.value)}
          required
          className="block w-full p-2 border rounded"
        />
      </label>

      <label className="block">
        Data do Pedido:
        <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
          className="block w-full p-2 border rounded"
        />
      </label>

      <label className="block">
        Total:
        <input
          type="number"
          step="0.01"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          required
          className="block w-full p-2 border rounded"
        />
      </label>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Itens</h3>
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="ID do Item"
              value={item.id_item}
              onChange={(e) => handleItemChange(index, 'id_item', e.target.value)}
              required
              className="p-2 border rounded w-full"
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
              required
              className="p-2 border rounded w-full"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remover
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Adicionar Item
        </button>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded mt-4"
      >
        Enviar Pedido
      </button>
    </form>
  );
}
