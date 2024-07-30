import AuthTab from "@/components/block/auth-tab";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-[calc(100vh-52px)] grid place-items-center">
      <div className="w-full sm:max-w-96 mx-auto flex flex-col gap-4">
        <AuthTab />
        <>{children}</>
      </div>
    </div>
  );
};

export default AuthLayout;
