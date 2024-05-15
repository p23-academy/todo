import {useState} from "react";

const TodoNewItem = ({setTodos}) => {
  const [item, setItem] = useState("");

  const addToList = () => {
    setTodos(todos => [...todos, item]);
    setItem("")
  }

  return (
    <div>
      <input type="text" value={item} onChange={e => setItem(e.target.value)}/>
      <button onClick={addToList}>Dodaj</button>
    </div>
  )
}

export default TodoNewItem;