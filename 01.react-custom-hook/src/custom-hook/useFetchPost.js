import { useEffect, useState } from "react"


const useFetchPost = (url) => {

    const [finalData,setFinalData]=useState([])
    const [loading,setLoading]=useState(true)

    const fetchPost=async()=>{
        setLoading(true)
        const response=await fetch(url)
        const json=await response.json()
        setFinalData(json)
        setLoading(false)
        console.log(json)
      }
      useEffect(()=>{
        fetchPost()
      },[url])

  return {
   finalData,
   loading
    }
}

export default useFetchPost
