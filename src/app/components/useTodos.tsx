import React, {useContext, useState} from 'react'
import {ITodo} from '../types/data'

const TodosContext = React.createContext<TodosContextType | null>(null)

export const useTodos = (): TodosContextType => {
  const context = useContext(TodosContext)
  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider')
  }
  return context
}

const TodosProvider = ({children}: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos')!)
      : []
  )

  const toggle = (id: string): void => {
    setTodos(todos.map(todo => todo.id === id
      ? {...todo, complete: !todo.complete}
      : todo
    ))
  }

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      toggle,
    }}>
      {children}
    </TodosContext.Provider>
  )
}

interface TodosContextType {
  todos: ITodo[]
  setTodos: (todos: ITodo[]) => void
  toggle: (id: string) => void
}

export default TodosProvider