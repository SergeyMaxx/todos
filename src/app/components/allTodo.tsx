import React, {useEffect, useRef, useState} from 'react'
import TodoList from './todoList'
import {useTodos} from './useTodos'
import {ITodo} from '../types/data'

const AllTodo = () => {
  const [value, setValue] = useState('')
  const {todos, setTodos} = useTodos()
  const inputRef = useRef<HTMLInputElement>(null)
  const {remove, toggle} = useTodos()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (): void => {
    if (value.trim()) {
      const newTodo: ITodo = {
        id: Date.now(),
        title: value,
        complete: false
      }
      setTodos([...todos, newTodo])
      setValue('')
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
          ref={inputRef}
        />
        <button className="todo-add" onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList
        items={todos}
        toggle={toggle}
        remove={remove}
      />
    </div>
  )
}

export default AllTodo