import React, { useState } from "react";
import "./AddTweet.css";

const AddTweet = ({ onAddTweet }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        className="addTweet"
        placeholder="Add a tweet"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTweet(text);
          setText("");
        }}
        className="twt-btn"
      >
        Tweet
      </button>
    </>
  );
};

export default AddTweet;
