import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
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

  const handleComplete = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        return todo.id === id ? {...todo, isRushed: !todo.isRushed} : todo
      })
    })
  }

  const todoList = todos.map((todo,index) => {
    return (
      <>
        {!todo.isDeleted && 
          <Todo 
            text={todo.text} key={index} 
            isRushed={todo.isRushed}
            onRush={() => handleComplete(todo.id)} 
            onDelete={() => handleDelete(todo.id)}
          />}
      </>
    )
  })

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todos-wrapper'>
        {todoList}
      </div>
    </div>
  );
}

export default App;
