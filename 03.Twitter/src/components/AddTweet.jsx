import React, { useState } from "react";
import "./AddTweet.css";

const AddTweet = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input className="addTweet" placeholder="Add a tweet" value={text} onChange={(e)=>setText(e.target.value)} /> 
      <button onClick={()=>{
        setText('')
      }} className="twt-btn">Tweet</button>
    </>
  );
};

export default AddTweet;
