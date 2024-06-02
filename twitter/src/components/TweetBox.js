import React, { useState } from 'react';
import './TweetBox.css';

function TweetBox({ addTweet }) {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet.trim()) {
      addTweet(tweet);
      setTweet('');
    }
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
