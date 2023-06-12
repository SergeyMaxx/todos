import React from 'react'
import {ITodo} from '../types/data'

const TodoItem = ({id, title, complete, toggle, remove}: TodoItemProps) => {
  return (
    <div className="todo-item">
      <label>
        <input
          className="real-checkbox"
          type="checkbox"
          name="coding-notes"
          onChange={() => toggle(id)}
          checked={complete}
        />
        <span className="custom-checkbox"/>
        <span className="todo-title">
          {title}
        </span>
      </label>
    </div>
  )
}

interface TodoItemProps extends ITodo {
  toggle: (id: number) => void
  remove: (id: number) => void
}

export default TodoItem