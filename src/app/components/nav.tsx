import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useTodos} from './useTodos'
import ModalConfirmation from './modalConfirmation'

const Nav = () => {
  const {todos, setTodos} = useTodos()
  const [modalActive, setModalActive] = useState(false)
  const [active, setActive] = useState<ActiveType>({
    All: false,
    Active: false,
    Completed: false
  })

  const getActive = ({target}: { target: EventTarget }): void => {
    const anchorElement = target as HTMLAnchorElement

    for (let key in active) {
      active[key] = false

    }
    setActive(prev => ({
      ...prev,
      [anchorElement.innerText]: true
    }))

  }

  const activeTodos = todos.filter(todo => !todo.complete)

  const clearCompleted = (): void => {
    const filteredTodos = todos.filter((todo: { complete: boolean }) => !todo.complete)
    localStorage.setItem('todos', JSON.stringify(filteredTodos))
    setTodos(filteredTodos)
    setModalActive(false)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="nav-container">
      <span className="nav-item">{activeTodos.length} items left</span>
      <ul className="nav">
        <li onClick={getActive}>
          <Link
            className={'nav-link ' + (active.All ? 'focus' : '')}
            to="/"
          >
            All
          </Link>
        </li>
        <li onClick={getActive}>
          <Link
            className={'nav-link ' + (active.Active ? 'focus' : '')}
            to="/active"
          >
            Active
          </Link>
        </li>
        <li onClick={getActive}>
          <Link
            className={'nav-link ' + (active.Completed ? 'focus' : '')}
            to="/completed"
          >
            Completed
          </Link>
        </li>
      </ul>
      <button
        className="nav-item nav-button"
        onClick={() => setModalActive(true)}
      >
        Clear completed
      </button>
      <ModalConfirmation
        modalActive={modalActive}
        setModalActive={setModalActive}
        remove={clearCompleted}
      />
    </div>
  )
}

interface ActiveType {
  All: boolean
  Active: boolean
  Completed: boolean
  [key: string]: boolean
}

export default Nav