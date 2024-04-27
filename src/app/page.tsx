import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-2xl font-medium">
          Welcome to Next Authenciation
        </h1>
        <Link href="/dashboard" className="w-fit mx-auto">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
