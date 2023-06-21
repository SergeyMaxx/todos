import React, {useEffect, useState} from 'react'
import TodoList from './todoList'
import {useTodos} from './useTodos'
import {ITodo} from '../types/data'

const AllTodo = () => {
  const [value, setValue] = useState('')
  const {todos, setTodos} = useTodos()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (): void => {
    if (value.trim()) {
      const newTodo: ITodo = {
        id: Math.random().toString(36).slice(2),
        title: value,
        complete: false
      }
      setTodos([...todos, newTodo])
      setValue('')
    }
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="todo-add" onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList/>
    </div>
  )
}

export default AllTodo