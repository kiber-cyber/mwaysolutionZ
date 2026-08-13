"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ links }) {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link 
              href={link.href}
              className={`transition-colors ${
                isActive ? "text-[#C08A3E] font-semibold" : "text-gray-600 hover:text-[#0E1B2B]"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}