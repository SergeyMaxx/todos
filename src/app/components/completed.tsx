import React from 'react'
import {useTodos} from './useTodos'
import TodoItem from './todoItem'
import {Reorder, AnimatePresence} from 'framer-motion'

const Completed = () => {
  const {todos, setTodos} = useTodos()
  const completedTodos = todos.filter(todo => todo.complete)

  return (
    <Reorder.Group axis='y' onReorder={setTodos} values={completedTodos}>
      <AnimatePresence>
        <div className="todos-active">
          <div className="m-t"/>
          {completedTodos.map(t => <TodoItem key={t.id} todo={t}/>)}
        </div>
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default Completed