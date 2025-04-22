import React from 'react'
import './Countdown.css'

const Countdown = () => {
  return (
    <>
      <h2>Countdown Timer App</h2>
      <div className='input'>
        <input type="datetime-local"  className='datetime'/>
        <button className='submit'>Start</button>
      </div>
    </>
  )
}

export default Countdown
