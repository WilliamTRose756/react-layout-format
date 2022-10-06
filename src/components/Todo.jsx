import React from "react";
import { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";

function Todo({ text, completed, todo }) {
  const { setTodos, todos } = useContext(TodoContext);

  const handleCompleteTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDeleteTodo = () => {
    // Creates array that excludes the current todo(todo whose delete button was pressed)
    // Filters through the original array and compares those elements to the current todo
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={handleCompleteTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDeleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
