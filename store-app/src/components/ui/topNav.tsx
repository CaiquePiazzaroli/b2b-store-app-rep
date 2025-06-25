"use client";
import {
  UserIcon,
  ShoppingCartIcon,
  Cog8ToothIcon,
  PlusCircleIcon,
  TvIcon,
  Bars3Icon,
  XMarkIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import SearchInput from "./searchinput";
import Link from "next/link";

// Componente para o menu de navegação
function ClientNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-bold text-blue-500">Eletronix</div>
        </Link>

        {/* Search */}
        <div className="hidden md:block w-1/3">
          <SearchInput
            client={true}
            placeholder="Buscar produtos"
            searchFor="itens"
          />
        </div>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-blue-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-600" />
          )}
        </button>

        {/* Itens Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Sign Up/Sign In</span>
          </div>

          <div className="h-6 w-px bg-gray-300" />

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Carrinho</span>
          </div>

          <div className="h-6 w-px bg-gray-300" />

          <Link href="/admin">
            <div className="flex items-center gap-2 cursor-pointer">
              <Cog8ToothIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Administrador</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Itens Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <SearchInput
            client={true}
            placeholder="Buscar produtos"
            searchFor="itens"
          />

          <div className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Sign Up/Sign In</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Cart</span>
          </div>

          <Link href="/admin">
            <div className="flex items-center gap-2 cursor-pointer">
              <Cog8ToothIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Administrador</span>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}

function AdminNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-bold text-blue-600">Eletronix</div>
        </Link>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-blue-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-600" />
          )}
        </button>

        {/* Itens Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/admin/list_itens">
            <div className="flex items-center gap-2 cursor-pointer">
              <TvIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Gerenciar Produtos</span>
            </div>
          </Link>

          <Link href="/admin/list_users">
            <div className="flex items-center gap-2 cursor-pointer">
              <UserIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Gerenciar Usuários</span>
            </div>
          </Link>

          <Link href="/admin/list_orders">
            <div className="flex items-center gap-2 cursor-pointer">
              <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Gerenciar Pedidos</span>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-red-700">Sair</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Itens Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <Link href="/admin/list_itens">
            <div className="flex items-center gap-2 cursor-pointer">
              <TvIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Gerenciar Produtos</span>
            </div>
          </Link>

          <Link href="/admin/list_users">
            <div className="flex items-center gap-2 cursor-pointer">
              <UserIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Gerenciar Usuários</span>
            </div>
          </Link>

          <Link href="/admin/list_orders">
            <div className="flex items-center gap-2 cursor-pointer">
              <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Gerenciar Pedidos</span>
            </div>
          </Link>

          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-red-700">Sair</span>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}

export default function TopNav({ client }: { client: boolean }) {
  return <>{client ? <ClientNav /> : <AdminNav />}</>;
}
