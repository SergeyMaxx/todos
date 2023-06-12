import React from 'react'
import {ITodo} from '../types/data'
import TodoItem from './todoItem'

const TodoList = ({items, toggle, remove}: TodoListProps) => {
  return (
    <div className="todo-list">
      {items.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          complete={item.complete}
          toggle={toggle}
          remove={remove}
        />
      ))}
    </div>
  )
}

interface TodoListProps {
  items: ITodo[]
  toggle: (id: number) => void
  remove: (id: number) => void
}

export default TodoList