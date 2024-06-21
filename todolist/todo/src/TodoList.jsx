import React from 'react'

export default function TodoList({todos, setTodos}) {

  return (
    <div>
      {
        todos.map(todo => {
          return <div key={todo.description}>
            <em>{todo.description}</em>
            
            <button onClick={() => {
              setTodos(todos.map(todoItem => {
                if (todoItem.description === todo.description) {
                  todoItem.completed = !todo.completed
                  return todoItem
                } else {
                  return todoItem
                }
              }))
            }}>
              {todo.completed ? "Incomplete" : "Complete"}
            </button>

            <button onClick={ () => {
              setTodos(todos.filter(todoItem => todoItem.description !== todo.description))
            }}>
              Delete
            </button>

          </div>
        })
      }                                       
    </div>
  )
}
