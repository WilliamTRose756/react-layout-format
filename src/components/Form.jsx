import React from "react";
import { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";

function Form() {
  const {
    setInputText,
    inputText,
    todos,
    setTodos,
    setStatus,
    status,
    setFilteredTodos,
  } = useContext(TodoContext);

  const handleTextInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filteredHandler();
  }, [status, todos, status]);

  return (
    <form>
      <input
        value={inputText}
        onChange={handleTextInput}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Incomplete</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
