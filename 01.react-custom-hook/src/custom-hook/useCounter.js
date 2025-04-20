import { useState } from "react"

function useCounter(){

    const [count,setCount]=useState(0)
  
    function increseCnt(){
      setCount(count+1)
    }
  
    return {
      count,increseCnt
    }
}

export default useCounter;

