import React, { useEffect, useState } from "react";

const TodoCard = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      completed: true,
    },
    {
      text: "Learn Redux",
      completed: false,
    },
  ]);

  const getTodos = async () => {
    const res = await fetch(
      "https://next-js-todo-fdd26-default-rtdb.firebaseio.com/todos.json",
      {
        method: "GET",
      }
    );
    console.log("Res:", res);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const saveTodo = async () => {
    const res = await fetch(
      "https://next-js-todo-fdd26-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todos),
      }
    );
    console.log(res);
  };
  return (
    <section className="bg-white text-black p-8 rounded-lg shadow-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNewTodo("");
          setTodos((todos) => [...todos, { text: newTodo, completed: false }]);
          saveTodo();
        }}
      >
        <input
          type="text"
          placeholder="Add Todo..."
          className="p-4 border-2 w-full border-slate-800 rounded-lg"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
      <ul className="mt-12">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => {
              todo.completed = !todo.completed;
              setTodos((todos) => [...todos]);
            }}
            onDoubleClick={() => {
              setTodos((todos) => todos.filter((td) => td.text !== todo.text));
            }}
            className={todo.completed ? "line-through" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoCard;
