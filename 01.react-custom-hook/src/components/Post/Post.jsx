import React, { useState } from 'react'
import useFetchPost from '../../custom-hook/useFetchPost'
import usePrev from '../../custom-hook/usePrevious'

const Post = () => {
    const [currentIdx,setCurrentIdx]=useState(1)
    const prev=usePrev(currentIdx)

    const {finalData,loading}=useFetchPost(`https://jsonplaceholder.typicode.com/todos/${currentIdx}` )

    if(loading){
        return (
            <div>
                Loading ....
            </div>
        )
    }

    function nextIdx(){
        setCurrentIdx(currentIdx+1)
    }

    function prevIdx(){
        setCurrentIdx((prev)=> prev > 1 ? prev -1 : 1)
    }

  return (
    <div>
        <button onClick={nextIdx}> Current Post</button>
        <button onClick={prevIdx}>Prev Post</button>

      <h1>{finalData?.title}</h1>
      <p>Previous value = {prev}</p>
    </div>
  )
}

export default Post
