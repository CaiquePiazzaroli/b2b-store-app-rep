export default function AdminDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Bem-vindo ao Painel Administrativo
        </h1>
        <p className="text-gray-600 mb-6">
          Gerencie usuários, produtos, pedidos e muito mais de forma simples e rápida.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/admin/list_users"
            className=" border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50"
          >
            Gerenciar Usuários
          </a>

          <a
            href="/admin/list_itens"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50"
          >
            Gerenciar Produtos
          </a>

          <a
            href="/admin/list_orders"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50"
          >
            Gerenciar Pedidos
          </a>
        </div>
      </div>
    </main>
  );
}
