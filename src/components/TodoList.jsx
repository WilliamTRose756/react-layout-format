import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Todo from "./Todo";

function TodoList() {
  const { todos, filteredTodos } = useContext(TodoContext);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            completed={todo.completed}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
