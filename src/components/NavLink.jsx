"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, text, activeClasses }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <>
      <Link
        className={`${
          isActive
            ? activeClasses
            : "m-2 bg-gray-600/15 hover:bg-gray-600/30 rounded-lg px-4 py-2 text-gray-500 hover:text-white"
        }`}
        href={href}
      >
        {text}
      </Link>
    </>
  );
}
