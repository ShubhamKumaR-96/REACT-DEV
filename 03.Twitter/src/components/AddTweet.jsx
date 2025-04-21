import React, { useState } from "react";
import "./AddTweet.css";

const AddTweet = ({ onAddTweet ,sortedTweets }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        className="addTweet"
        placeholder="Add a tweet"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
     <div className="twt-btns-list">
     <button className="twt-btns" onClick={sortedTweets}>Sort tweet by created</button>
     <button
        onClick={() => {
          onAddTweet(text);
          setText("");
        }}
        className="twt-btn"
      >
        Tweet
      </button>
     
     </div>
    </>
  );
};

export default AddTweet;
