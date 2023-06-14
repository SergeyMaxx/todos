import React from 'react'
import {useTodos} from './useTodos'
import TodoItem from './todoItem'

const Active = () => {
  const {todos} = useTodos()
  const {toggle} = useTodos()
  const activeTodos = todos.filter(todo => !todo.complete)

  return (
    <div className="todos-active">
      <div className="m-t"/>
      {activeTodos.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          complete={item.complete}
          toggle={toggle}
        />
      ))}
    </div>
  )
}

export default Active