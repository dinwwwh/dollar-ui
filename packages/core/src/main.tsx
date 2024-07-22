import React from 'react'
import ReactDOM from 'react-dom/client'
import classes from './main.module.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className={classes.container}>
      <div>Hello World</div>
    </div>
  </React.StrictMode>,
)
