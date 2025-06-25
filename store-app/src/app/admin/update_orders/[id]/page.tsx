'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function UpdateOrderForm() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [idUser, setIdUser] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [total, setTotal] = useState('');
  const [items, setItems] = useState([{ id_item: '', quantity: '' }]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:8080/orders/${id}/id`);
        if (!res.ok) throw new Error('Falha ao buscar pedido');
        const data = await res.json();

        setIdUser(data.id_user);
        setOrderDate(data.order_date.slice(0, 10));
        setTotal(data.total);
        setItems(
          data.items.map((item: any) => ({
            id_item: item.id,
            quantity: item.itemOrder.quantity,
          }))
        );
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar pedido:', err);
        alert('Erro ao carregar pedido');
      }
    };

    if (id) fetchOrder();
  }, [id]);

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

    const updatedOrder = {
      id_user: idUser,
      order_date: orderDate,
      total: parseFloat(total),
      items: items.map((item) => ({
        id_item: parseInt(item.id_item),
        quantity: parseInt(item.quantity),
      })),
    };

    try {
      const res = await fetch(`http://localhost:8080/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedOrder),
      });

      if (res.ok) {
        alert('Pedido atualizado com sucesso!');
        router.push('/admin/list_orders');
      } else {
        const error = await res.json();
        alert('Erro ao atualizar: ' + JSON.stringify(error));
      }
    } catch (err) {
      alert('Erro de rede: ' + err);
    }
  };

  if (loading) return <p className="p-4">Carregando pedido...</p>;

  return (
    <main className="max-w-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Atualizar Pedido #{id}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <h3 className="font-semibold">Itens do Pedido</h3>
          {items.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="number"
                placeholder="ID do Item"
                value={item.id_item}
                onChange={(e) =>
                  handleItemChange(index, 'id_item', e.target.value)
                }
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="number"
                placeholder="Quantidade"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, 'quantity', e.target.value)
                }
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
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Salvar Alterações
        </button>
      </form>
    </main>
  );
}
