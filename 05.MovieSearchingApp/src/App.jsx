import React from 'react'
import './App.css'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <>
      Side Nav bar 
      <MainRoutes />
    </>
  )
}

export default App
