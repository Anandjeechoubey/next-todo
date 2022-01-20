import React from "react";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";

const Todo = () => {
  return (
    <div className="min-h-screen bg-slate-700 text-white">
      <Header />
      <main className="p-16">
        <TodoCard />
      </main>
    </div>
  );
};

export default Todo;
