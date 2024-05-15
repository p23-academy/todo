import "./TodoListView.css"

const TodoListView = ({todos, setTodos}) => {

  const deleteTodo = (todo) => {
    setTodos(todos => todos.filter(t => t !== todo))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Stavka</th>
            <th>Komande</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo}>
              <td>{todo}</td>
              <td><button onClick={() => deleteTodo(todo)}>Briši</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoListView;