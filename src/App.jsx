import { useState } from 'react'
import './App.css'
import TodoListView from "./ui/TodoListView.jsx";
import TodoNewItem from "./ui/TodoNewItem.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>TODO</h1>
      <TodoListView todos={todos} setTodos={setTodos}/>
      <TodoNewItem setTodos={setTodos}/>
    </>
  )
}

export default App
