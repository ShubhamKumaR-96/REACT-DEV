import React, { useState } from "react";
import "./Tweet.css";

const Tweet = ({ tweetId,content, likeCount, createdAt,onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="tweet-wrapper">
      <div className="tweet-content">
        <h3>
          {isEditing ? (
            <input 
              placeholder="Update your tweet"
              className="edit-input"
              onChange={(e)=>{
                onEdit({
                  id:tweetId,
                  content:e.target.value,
                  likeCount:likeCount,
                  createdAt:createdAt

                })
              }}
            />
          ) : (
            content
          )}
        </h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`edit-btn ${isEditing ? "save-btn" : ""}`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="content">
        <div className="likes">{likeCount} ❤️</div>
        <div className="timestamp">Tweeted at: {createdAt}</div>
      </div>
    </div>
  );
};

export default Tweet;