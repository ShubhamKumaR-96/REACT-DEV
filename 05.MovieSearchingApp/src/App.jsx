import React from 'react'
import './App.css'

const App = () => {
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <div>
      Movie Searching App
    </div>
  )
}

export default App
