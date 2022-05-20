import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import data from "./data.json"

function App() {
  const [ todos, setTodos ] = useState(data.todos)

  const handleDelete = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        return todo.id === id ? {...todo, isDeleted: !todo.isDeleted} : todo 
      })
    })
  }

  const handleRushed = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        return todo.id === id ? {...todo, isRushed: !todo.isRushed} : todo
      })
    })
  }

  const addTodo = (newTodo) => {
    setTodos(prevTodos => ([...prevTodos, newTodo]))
  }

  const sortedTodo = todos.sort((a,b) => b.isRushed - a.isRushed)

  const todoList = sortedTodo.map((todo) => {
    return (
      <>
        {!todo.isDeleted && 
          <Todo
            text={todo.text}
            key={todo.id} 
            isRushed={todo.isRushed}
            onRush={() => handleRushed(todo.id)} 
            onDelete={() => handleDelete(todo.id)}
          />}
      </>
    )
  })

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form addTodo={addTodo} totalTodos={todos.length}/>
      <div className='todos-wrapper'>
        {todoList}
      </div>
    </div>
  );
}

export default App;
