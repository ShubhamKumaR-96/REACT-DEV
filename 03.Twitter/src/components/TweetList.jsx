import React from "react";
import Tweet from "./Tweet";
import "./TweetList.css";

const TweetList = ({ tweets }) => {
  return (
    <ul className="tweet-lists">
      {tweets.map((tweet) => (
        <li key={tweet.id} >
          <Tweet content={tweet.content} likeCount={tweet.likes} />
        </li>
      ))}
    </ul>
  );
};

export default TweetList;
