import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-black py-8 px-16 flex justify-between items-center">
      <h2 className="text-xl font-bold">To-do App</h2>
      <div className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/todo">To-do</Link>
        <Link href="/login">Logout</Link>
      </div>
    </header>
  );
};

export default Header;
