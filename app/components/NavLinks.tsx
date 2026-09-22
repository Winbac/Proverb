"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, isActive } from "../../lib/Navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8 px-1 font-heading text-sm font-semibold">
      {navItems.map(({ href, label }) => {
        const active = isActive(pathname, href);

        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`group relative block py-2 transition-colors ${
                active ? "text-heading" : "text-body hover:text-heading"
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}