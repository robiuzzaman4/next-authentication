import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import { navlinks } from "./navbar";
import Navlink from "./navlink";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Image
            src={"/menu.svg"}
            alt="menu"
            height={48}
            width={48}
            className="h-4 w-4 object-cover"
          />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-start w-full gap-4 mt-8">
          {navlinks.map((link) => (
            <Navlink link={link} key={link.label} />
          ))}
        </div>
        <SheetFooter className="w-full mt-4">
          <SheetClose asChild className="w-full">
            <Button className="w-full">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
