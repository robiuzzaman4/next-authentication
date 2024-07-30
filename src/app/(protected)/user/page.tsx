import React from "react";

const UserPage = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-24 pb-16">
      {/* badge */}
      <div className="w-fit mx-auto px-4 py-1 rounded-md bg-orange-50 text-orange-500 flex items-center justify-center text-center text-base font-medium">
        User
      </div>
      <h1 className="text-3xl font-semibold tracking-tighter">
        This is User Page
      </h1>
    </div>
  );
};

export default UserPage;
