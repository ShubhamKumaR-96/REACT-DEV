import React from 'react'
import useCounter from '../../custom-hook/useCounter'

const Counter = () => {
    const {count,increseCnt}=useCounter()
    return (
      <div >
        <button onClick={increseCnt}>Increase Value</button> 
        <span> : {count}</span>
      </div>
    )
}

export default Counter;
