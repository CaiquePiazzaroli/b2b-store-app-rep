type User = {
  legal_name: string;
  trade_name: string;
  cnpj: string;
  username: string;
  password: string;
  email: string;
};

export default function UserCard({
  legal_name,
  trade_name,
  cnpj,
  username,
  password,
  email,
}: User) {
  return (
    <div className="w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{legal_name}</h2>
      <p className="text-sm text-gray-500 mb-4 italic">{trade_name}</p>
      <div className="text-gray-700 space-y-1">
        <p><strong>CNPJ:</strong> {cnpj}</p>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        {/* Geralmente não exibimos senha, então deixei de fora por segurança */}
      </div>
    </div>
  );
}
