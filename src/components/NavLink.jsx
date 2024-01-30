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
            : "flex justify-center px-4 py-2 my-1 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
        }`}
        href={href}
      >
        {text}
      </Link>
    </>
  );
}
