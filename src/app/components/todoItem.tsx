import React from 'react'
import {ITodo} from '../types/data'
import {Reorder} from 'framer-motion'
import {useTodos} from './useTodos'

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

const TodoItem = ({todo}: TodoItemProps) => {
  const {toggle} = useTodos()

  return (
    <Reorder.Item value={todo} id={todo.id} {...variants}>
      <div className="todo-item">
        <label>
          <input
            className="real-checkbox"
            type="checkbox"
            name="coding-notes"
            onChange={() => toggle(todo.id)}
            checked={todo.complete}
          />
          <span className="custom-checkbox"/>
          <span className="todo-title">
          {todo.title}
        </span>
        </label>
      </div>
    </Reorder.Item>

  )
}

interface TodoItemProps {
  todo: ITodo
}

export default TodoItem