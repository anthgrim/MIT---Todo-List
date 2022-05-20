import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import data from "./data.json"

function App() {
  const defaultValue = ''
  const [ todos, setTodos ] = useState(data.todos)
  const [ value, setValue] = useState(defaultValue)

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

  const handleInputChange = (event) => {
    const { value } = event.target;
    
    if(value === '') {
      setValue(defaultValue)
      return
    }

    const newTodo = {
      id: todos.length,
      text: value,
      isRushed: false,
      isDeleted: false
    }
    
    setValue(newTodo)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!value) return
    setTodos(prevTodos => ([...prevTodos, value]))
    setValue(defaultValue)
  }

  const todoList = todos.map((todo,index) => {
    return (
      <>
        {!todo.isDeleted && 
          <Todo 
            text={todo.text} key={index} 
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
      <Form 
        onInputChange={event => handleInputChange(event)} 
        targetValue={value}
        onSubmitForm={event => handleSubmit(event)}
      />
      <div className='todos-wrapper'>
        {todoList}
      </div>
    </div>
  );
}

export default App;
