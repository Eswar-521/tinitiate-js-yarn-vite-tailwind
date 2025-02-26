import { useState } from "react";

const MenuBar = ({ setPage }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-center gap-6 shadow-md">
      <button
        onClick={() => setPage("login")}
        className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 transition"
      >
        Login
      </button>
      <button
        onClick={() => setPage("signup")}
        className="px-4 py-2 rounded bg-green-500 hover:bg-green-700 transition"
      >
        Signup
      </button>
    </nav>
  );
};

export default MenuBar;
