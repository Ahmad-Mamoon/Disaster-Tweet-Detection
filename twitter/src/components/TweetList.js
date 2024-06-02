import React from 'react';
import Tweet from './Tweet';
import './TweetList.css';

function TweetList({ tweets }) {
  return (
    <div className="tweetList">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default TweetList;
