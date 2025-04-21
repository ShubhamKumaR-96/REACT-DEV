import React, { useState } from "react";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";

const dummyTweets = [
  {
    id: 1,
    content: "Just had the best coffee ever! ☕ #morningvibes",
    likes: 120,
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "Coding all night, who needs sleep anyway? 😅 #developerlife",
    likes: 85,
    createdAt: new Date(),
  },
  {
    id: 3,
    content: "Nothing beats a good sunset view 🌅 #naturelover",
    likes: 200,
    createdAt: new Date(),
  },
];

const Twitter = () => {
  const [tweets, setTweets] = useState(dummyTweets);

  const handleAddTweets = (text) => {
    let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
    setTweets([
      ...tweets,
      {
        id: nextId,
        content: text,
        likes: Math.floor(Math.random() * 100),
        createdAt: new Date(),
      },
    ]);
  };

  const handleEditTweets = (tweet) => {
    setTweets(
      tweets.map((currentTweet) => {
        if (currentTweet.id == tweet.id) {
          return tweet;
        } else {
          return currentTweet;
        }
      })
    );
  };

  return (
    <>
      <AddTweet onAddTweet={handleAddTweets} />
      <TweetList tweets={tweets} onEditTweet={handleEditTweets} />
    </>
  );
};

export default Twitter;
