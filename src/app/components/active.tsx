import React from 'react'
import {useTodos} from './useTodos'
import TodoItem from './todoItem'
import {Reorder, AnimatePresence} from 'framer-motion'

const Active = () => {
  const {todos, setTodos} = useTodos()
  const activeTodos = todos.filter(todo => !todo.complete)

  return (
    <Reorder.Group axis='y' onReorder={setTodos} values={activeTodos}>
      <AnimatePresence>
        <div className="todos-active">
          <div className="m-t"/>
          {activeTodos.map(t => <TodoItem key={t.id} todo={t}/>)}
        </div>
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default Active