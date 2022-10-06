import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        inputText,
        setInputText,
        todos,
        setTodos,
        status,
        setStatus,
        filteredTodos,
        setFilteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
