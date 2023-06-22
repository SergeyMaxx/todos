import React from 'react'
import AllTodo from './components/allTodo'
import Header from './components/header'
import Nav from './components/nav'
import {Route, Switch} from 'react-router-dom'
import Active from './components/active'
import Completed from './components/completed'
import TodosProvider from './components/useTodos'

function App() {
  return (
    <div className="app">
      <TodosProvider>
        <Header/>
        <Switch>
          <Route path={'/active'} component={Active}/>
          <Route path={'/completed'} component={Completed}/>
          <Route path={'/'} exact component={AllTodo}/>
        </Switch>
        <Nav/>
      </TodosProvider>
    </div>
  )
}

export default App