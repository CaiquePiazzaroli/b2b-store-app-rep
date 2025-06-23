"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Form from "next/form";

type SearchFor = "users" | "itens";

type GeneralSearchInput = {
  client: boolean;
  placeholder: string;
  searchFor: SearchFor;
};

export default function SearchInput({
  client,
  placeholder,
  searchFor,
}: GeneralSearchInput) {
  const typeSearch = {
    users: "list_users",
    itens: "list_itens",
  };

  const action = client ? "." : typeSearch[searchFor] ?? ".";

  return (
    <div className="mx-2 flex-1">
      <Form className="relative" action={action}>
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500" />
        <input
          type="text"
          name="query"
          placeholder={placeholder}
          className="w-full rounded-full bg-blue-50 border border-blue-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Form>
    </div>
  );
}
