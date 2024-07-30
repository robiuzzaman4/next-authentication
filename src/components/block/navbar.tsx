import Link from "next/link";
import React from "react";
import Navlink from "./navlink";
import { Button } from "../ui/button";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/edit-profile",
    label: "Edit Profile",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-background border-b border-b-border">
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-4 flex items-center justify-between">
        <Link href={"/"} className="text-2xl font-semibold tracking-tighter">
          Auth
        </Link>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Navlink link={link} key={link.label} />
          ))}
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
