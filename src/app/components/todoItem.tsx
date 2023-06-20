import React from 'react'
import {ITodo} from '../types/data'
import {Reorder} from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    height: 0
  },
  animate: {
    opacity: 1,
    height: 'auto'
  },
  exit: {
    opacity: 0,
    height: 0
  }
}

const TodoItem = ({item, toggle}: TodoItemProps) => {
  return (
    <Reorder.Item value={item} {...variants}>
      <div className="todo-item">
        <label>
          <input
            className="real-checkbox"
            type="checkbox"
            name="coding-notes"
            onChange={() => toggle(item.id)}
            checked={item.complete}
          />
          <span className="custom-checkbox"/>
          <span className="todo-title">
          {item.title}
        </span>
        </label>
      </div>
    </Reorder.Item>

  )
}

interface TodoItemProps {
  item: ITodo
  toggle: (id: number) => void
}

export default TodoItem