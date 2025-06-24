'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/outline";




type props = {
    id: string
}

export default function ButtonAddCart({ id } : props) {

    function addToCart(id: string) {
        console.log(id);
        const cartItem = {id: id};
        localStorage.setItem("cart", cartItem.id);  
    }

    return (
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 flex gap-2 justify-center" onClick={() => {addToCart(id)}}>
            <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
            Adicionar ao carrinho
        </button>
    )
}