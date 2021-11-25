import "./App.css";
import todoArr from "./constants/todoData";
import Todo from "./components/toDo/todo";
import { useCallback, useEffect, useState } from "react";
import TodoConstructor from "./components/todoConstructor/todoConstructor";
import sortByDue from "./shared/utils/sortByDue";

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodos = useCallback((updatedTodo) => {
    setTodos(prev => sortByDue(prev.map(todo => (todo.id === updatedTodo.id) ? updatedTodo : todo)));
  }, []);

  const deleteTodo = useCallback((todoId) => {
    setTodos(prev => ([...prev].filter(todo => todo.id !== todoId)));
  }, []);

  useEffect(() => {
    setTodos([...(sortByDue(todoArr))]);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <TodoConstructor setTodos={setTodos} />
        <div className="todos-wrapper">
          {todos.map(todo => <Todo data={todo} key={todo.id} updateTodos={updateTodos} deleteTodo={deleteTodo} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
