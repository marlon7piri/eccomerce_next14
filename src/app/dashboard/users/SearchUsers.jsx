"use client";

import Link from "next/link";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchUsers = () => {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlerSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchparams);
   

    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex justify-between p-2">
      <input
        onChange={handlerSearch}
        type="text"
        placeholder="Find users..."
        className="p-2  rounded-sm border-slate-800"
      />
      <Link href="/dashboard/users/new" className="bg-slate-50 px-3 py-2 rounded text-slate-900">New User</Link>
    </div>
  );
};

export default SearchUsers;
