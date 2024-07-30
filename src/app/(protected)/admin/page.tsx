import React from "react";

const AdminPage = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-24 pb-16">
      {/* badge */}
      <div className="w-fit mx-auto px-4 py-1 rounded-md bg-indigo-50 text-indigo-500 flex items-center justify-center text-center text-base font-medium">
        Admin
      </div>
      <h1 className="text-3xl font-semibold tracking-tighter">
        This is Admin Page
      </h1>
    </div>
  );
};

export default AdminPage;
