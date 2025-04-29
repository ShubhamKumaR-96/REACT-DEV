import React from 'react'
import './App.css'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  )
}

export default App
