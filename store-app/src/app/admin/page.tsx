export default function AdminDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
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
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Gerenciar Usuários
          </a>

          <a
            href="/admin/list_itens"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Gerenciar Produtos
          </a>

          <a
            href="/admin/list_orders"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Gerenciar Pedidos
          </a>
        </div>
      </div>
    </main>
  );
}
