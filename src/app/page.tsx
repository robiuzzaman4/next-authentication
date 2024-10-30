import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-52px)] max-w-screen-lg mx-auto pt-24 pb-16 flex flex-col items-center justify-center gap-4">
      <h1 className="max-w-2xl mx-auto text-center text-3xl md:text-4xl font-semibold tracking-tighter">
        Authenticate modern Next.js application with middleware.
      </h1>
      <Button asChild>
        <Link
          href={"https://github.com/robiuzzaman4/next-authentication"}
          target="_blank"
        >
          View on Github
        </Link>
      </Button>
    </div>
  );
};

export default Home;
