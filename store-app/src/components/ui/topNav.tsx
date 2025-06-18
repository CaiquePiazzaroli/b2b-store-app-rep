'use client';

import {UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import SearchInput from './searchinput';
import Link from 'next/link';


export default function TopNav() {
  return (
    <header className="border-b">
      <div className='max-w-10/12 flex items-center justify-between px-6 py-4 m-auto'>
        {/* Logo */}
      <Link href={'/'}>
        <div className="text-2xl font-bold text-blue-600">LOGO</div>
      </Link>

      {/* Search */}
      <SearchInput placeholder='Buscar produtos'/>

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
      </div>
      </div>
      
    </header>
  );
}
