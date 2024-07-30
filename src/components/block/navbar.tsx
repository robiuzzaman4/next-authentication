import Link from "next/link";
import React from "react";
import Navlink from "./navlink";
import { Button } from "../ui/button";
import MobileNavbar from "./mobile-navbar";

export const navlinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/user",
    label: "User",
  },
  {
    href: "/admin",
    label: "Admin",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-background border-b border-b-border">
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-4 flex items-center justify-between">
        <Link href={"/"} className="text-2xl font-semibold tracking-tighter">
          Auth
        </Link>

        <div className="hidden lg:flex items-center gap-4">
          {navlinks.map((link) => (
            <Navlink link={link} key={link.label} />
          ))}
        </div>

        <Button asChild className="hidden lg:block">
          <Link href="/login">Login</Link>
        </Button>

        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
