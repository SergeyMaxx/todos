import React from 'react'
import {ITodo} from '../types/data'

const TodoItem = ({id, title, complete, toggle, remove}: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggle(id)}
      />
      {title}
      <button onClick={() => remove(id)}>
        X
      </button>
    </div>
  )
}

interface TodoItemProps extends ITodo {
  toggle: (id: number) => void
  remove: (id: number) => void
}

export default TodoItem