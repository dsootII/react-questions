import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  function handleTodoSubmission (e) {
    e.preventDefault();
    setTodos([...todos, {description: e.target[0].value, completed: false}])
    e.target[0].value = ''
  }

  return (
    <>
      <form onSubmit={(e) => handleTodoSubmission(e)}>
        <label htmlFor='todoInput'>Add Todo</label>
        <input name='todoInput' type='text'/>
        <button type='submit'>Add todo</button>
      </form>
      <div>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
