import React from 'react'
import {ITodo} from '../types/data'
import TodoItem from './todoItem'
import {useTodos} from './useTodos'
import {Reorder, AnimatePresence} from 'framer-motion'

const TodoList = ({items, toggle}: TodoListProps) => {
  const {setTodos} = useTodos()

  return (
    <Reorder.Group axis='y' onReorder={setTodos} values={items}>
      <AnimatePresence>
        <div className="todo-list">
          {items.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              toggle={toggle}
            />
          ))}
        </div>
      </AnimatePresence>
    </Reorder.Group>
  )
}

interface TodoListProps {
  items: ITodo[]
  toggle: (id: number) => void
}

export default TodoList