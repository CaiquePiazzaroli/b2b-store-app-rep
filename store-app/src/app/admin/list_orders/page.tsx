import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

// Tipo para o item do pedido
type OrderItem = {
  id: number;
  type: string;
  description: string;
  imagePath: string;
  value: number;
  itemOrder: {
    quantity: number;
  };
};

// Tipo para a ordem completa
type Order = {
  id: number;
  id_user: string;
  order_date: string;
  total: number;
  items: OrderItem[];
};

// Função para buscar detalhes de cada pedido
async function fetchOrderDetails(orderId: number): Promise<Order | null> {
  try {
    const res = await fetch(`http://localhost:8080/orders/${orderId}/id`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(`Erro ao buscar pedido ${orderId}:`, error);
    return null;
  }
}

// Componente para exibir uma ordem completa
function OrderCard({ order }: { order: Order }) {
  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between mb-2">
        <div>
          <p className="text-sm text-gray-600">Pedido #{order.id}</p>
          <p className="text-sm text-gray-600">Usuário: {order.id_user}</p>
          <p className="text-sm text-gray-600">
            Data: {new Date(order.order_date).toLocaleDateString()}
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">
            R$ {Number(order.total).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Itens:</h4>
        <ul className="flex flex-col gap-4">
          {order.items.map((item) => (
            <li key={item.id} className="flex gap-4 border rounded p-3">
              <img
                src={item.imagePath}
                alt={item.type}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.type}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm mt-1">
                  Quantidade:{" "}
                  <span className="font-medium">{item.itemOrder.quantity}</span>
                </p>
                <p className="text-sm">
                  Valor Unitário:{" "}
                  <span className="font-medium">
                    R$ {item.value.toFixed(2)}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-right">
          <Link href={`/admin/update_orders/${order.id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Editar Pedido
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function Page() {
  // Busca todas as orders
  const baseOrders = await fetch("http://localhost:8080/orders")
    .then((res) => res.json())
    .catch((err) => {
      console.error("Erro ao buscar pedidos:", err);
      return [];
    });

  // Para cada order, busca os dados completos
  const detailedOrders: Order[] = await Promise.all(
    baseOrders.map(async (order: any) => {
      const fullOrder = await fetchOrderDetails(order.id);
      return fullOrder;
    })
  ).then((orders) => orders.filter((o): o is Order => o !== null)); // Remove nulos

  return (
    <main className="max-w-[1200px] w-full flex flex-col mx-auto px-4">
      <section className="flex flex-col md:flex-row gap-4 py-6">
        {/* Sidebar */}
        <div className="w-full md:w-[25%] border rounded-md h-fit pb-6 pt-3 px-3">
          <h4 className="px-2 font-bold border-b mb-6">Painel de Pedidos</h4>
          <p className="text-sm text-gray-600">
            Todos os pedidos completos com itens.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-[75%]">
          <Link href="/admin/create_orders">
            <div className="flex items-center gap-2 cursor-pointer p-3 mb-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              <PlusCircleIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Criar novo Pedido</span>
            </div>
          </Link>

          <ul className="flex flex-col gap-6">
            {detailedOrders.map((order) => (
              <li key={order.id}>
                <OrderCard order={order} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
