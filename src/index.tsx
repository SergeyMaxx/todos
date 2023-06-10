import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )

reportWebVitals()