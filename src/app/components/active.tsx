import React from 'react'
import {useTodos} from './useTodos'
import TodoItem from './todoItem'
import {Reorder, AnimatePresence} from 'framer-motion'

const Active = () => {
  const {todos, setTodos, toggle} = useTodos()
  const activeTodos = todos.filter(todo => !todo.complete)

  return (
    <Reorder.Group axis='y' onReorder={setTodos} values={activeTodos}>
      <AnimatePresence>
        <div className="todos-active">
          <div className="m-t"/>
          {activeTodos.map(item => (
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

export default Active