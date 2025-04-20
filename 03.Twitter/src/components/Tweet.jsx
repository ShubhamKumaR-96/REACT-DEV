import React from "react";
import './Tweet.css'

const Tweet = ({ content, likeCount }) => {
  return (
    <>
      <div className="tweet-wrapper">
        <div className="tweet-content">
          <h3>{content}</h3>
        </div>
        <div className="likes">{likeCount} likes</div>
      </div>
    </>
  );
};

export default Tweet;
