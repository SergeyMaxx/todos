import React from 'react'
import TodoItem from './todoItem'
import {useTodos} from './useTodos'
import {Reorder, AnimatePresence} from 'framer-motion'

const TodoList = () => {
  const {todos, setTodos} = useTodos()

  return (
    <Reorder.Group axis='y' onReorder={setTodos} values={todos}>
      <AnimatePresence>
        <div className="todo-list">
          {todos.map(t => <TodoItem key={t.id} todo={t}/>)}
        </div>
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default TodoList