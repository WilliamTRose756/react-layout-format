import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useContext, useEffect } from "react";
import TodoContext from "./context/TodoContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header>
          <h1>Input</h1>
        </header>
        <Form />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
