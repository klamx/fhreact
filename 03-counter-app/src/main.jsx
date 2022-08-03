import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import FirstApp from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Hola" subtitle='Que pasa' /> */}
    {/* <FirstApp /> */}
    <CounterApp value={10} />
  </React.StrictMode>
)
