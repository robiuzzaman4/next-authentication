"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/register",
    label: "Register",
  },
];

const AuthTab = () => {
  const pathname = usePathname();
  return (
    <div className="w-full sm:max-w-96 p-2 mx-auto rounded-md border border-border grid grid-cols-2">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2",
            {
              "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80":
                pathname === link.href,
            }
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default AuthTab;
