import React from "react";
import Tweet from "./Tweet";
import "./TweetList.css";

const TweetList = ({ tweets,onEditTweet }) => {
  return (
    <ul className="tweet-lists">
      {tweets.map((tweet) => (
        <li key={tweet.id} >
          <Tweet tweetId={tweet.id} content={tweet.content} likeCount={tweet.likes} createdAt={tweet.createdAt.toString()} onEdit={onEditTweet} />
        </li>
      ))}
    </ul>
  );
};

export default TweetList;
