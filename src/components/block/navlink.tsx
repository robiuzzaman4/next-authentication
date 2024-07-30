"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Link {
  href: string;
  label: string;
}
interface LinkProps {
  link: Link;
}

const Navlink: React.FC<LinkProps> = ({ link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.href}
      className={cn(
        "text-muted-foreground text-sm font-medium rounded-md hover:text-primary hover:transition hover:duration-300",
        {
          "text-primary": pathname === link.href,
        }
      )}
    >
      {link.label}
    </Link>
  );
};

export default Navlink;
