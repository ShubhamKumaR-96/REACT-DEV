import React, { memo, useCallback, useState } from "react";
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
    content: "Coding all night, who needs  😅 #developerlife",
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

const MemoisedAddTweet=memo(AddTweet)

const Twitter = () => {
  const [tweets, setTweets] = useState(dummyTweets);

  const handleAddTweets = useCallback((text) => {
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
  },[tweets])

  const handleEditTweets = useCallback((tweet) => {
    setTweets(
      tweets.map((currentTweet) => {
        if (currentTweet.id == tweet.id) {
          return tweet;
        } else {
          return currentTweet;
        }
      })
    );
  },[tweets])

  const sortTweets = useCallback(() => {
    setTweets((prevTweets) =>
      [...prevTweets].sort((a, b) => b.createdAt - a.createdAt)
    );
  }, [tweets]);

  return (
    <>
      <MemoisedAddTweet onAddTweet={handleAddTweets} sortedTweets={sortTweets} />
      <TweetList tweets={tweets} onEditTweet={handleEditTweets} />
    </>
  );
};

export default Twitter;
