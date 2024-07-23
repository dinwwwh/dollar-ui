import '@fontsource-variable/jetbrains-mono'
import '@fontsource-variable/inter'
import './styles/all.css'
import './main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
