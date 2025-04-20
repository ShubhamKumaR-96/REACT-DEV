import React from "react";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";

const dummyTweets = [
  {
    id: 1,
    content: "Just had the best coffee ever! ☕ #morningvibes",
    likes: 120,
  },
  {
    id: 2,
    content: "Coding all night, who needs sleep anyway? 😅 #developerlife",
    likes: 85,
  },
  {
    id: 3,
    content: "Nothing beats a good sunset view 🌅 #naturelover",
    likes: 200,
  },
  {
    id: 4,
    content: "Reading an amazing book, any recommendations for my next one?",
    likes: 150,
  },
];

const Twitter = () => {
  return (
    <>
        <AddTweet />
      <TweetList tweets={dummyTweets} />
    </>
  );
};

export default Twitter;
