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

  // const remove = (id: number): void => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }
  //
  // const toggle = (id: number): void => {
  //   setTodos(todos.map(todo => todo.id === id
  //     ? {...todo, complete: !todo.complete}
  //     : todo
  //   ))
  // }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <input
        type="text"
        placeholder="enter text"
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
      />
      <button onClick={addTodo}>
        Add
      </button>
      <TodoList
        items={todos}
        toggle={toggle}
        remove={remove}
      />
    </>
  )
}

export default AllTodo