"use client";
import {
  UserIcon,
  ShoppingCartIcon,
  Cog8ToothIcon,
  PlusCircleIcon,
  TvIcon
} from "@heroicons/react/24/outline";
import SearchInput from "./searchinput";
import Link from "next/link";

function ClientNav() {
  return(
    <header className="border-b">
      <div className="max-w-10/12 flex items-center justify-between px-6 py-4 m-auto">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-bold text-blue-600">LOGO</div>
        </Link>

        {/* Search */}
        <SearchInput client={true} placeholder="Buscar produtos" />

        {/* User and Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Sign Up/Sign In</span>
          </div>

          <div className="h-6 w-px bg-gray-300" />

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Cart</span>
          </div>

          <div className="h-6 w-px bg-gray-300" />

          <Link href="/admin">
            <div className="flex items-center gap-2 cursor-pointer">
              <Cog8ToothIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">
                Página do Administrador
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

function AdminNav() {
  return (
    <header className="border-b">
      <div className="max-w-10/12 flex items-center px-6 py-4 m-auto">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-bold text-blue-600">LOGO</div>
        </Link>


        {/* User and Cart */}
        <div className="flex items-center gap-6 ml-6 grow">

          <div className="h-6 w-px bg-gray-300" />

          <Link href='/admin/create_itens'>
            <div className="flex items-center gap-2 cursor-pointer">
              <PlusCircleIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Criar novo Produto</span>
            </div>
          </Link>

          <div className="h-6 w-px bg-gray-300" />

          <Link href='/admin/list_itens'>
            <div className="flex items-center gap-2 cursor-pointer">
              <TvIcon className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">Listar produtos</span>
            </div>
          </Link>
            
          <div className="h-6 w-px bg-gray-300" />
        <Link href='/admin/create_user'>
          <div className="flex items-center gap-2 cursor-pointer">
            <PlusCircleIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Criar novo Usuario</span>
          </div>
        </Link>
          <div className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Listar Usuarios</span>
          </div>

          <div className="h-6 w-px grow"></div>

          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-red-700">
                Sair
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function TopNav({ client }: {client : boolean}) {
  return (
    <>
      {client == true ? (
        <ClientNav />
      ) : (<AdminNav/>)}    
    </>
  );
}
