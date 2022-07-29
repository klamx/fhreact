import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import FirstApp from './FirstApp'
import './styles.css'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp title="Hola qué pasa ps" subtitle="no pasa es nada"/>
  </React.StrictMode>
)
