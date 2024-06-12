import React, { useState } from 'react';
import './TweetBox.css';
import { image, gif, poll, emoji, schedule, profilepic } from './sidebar/imports';

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
        <div className="tweetBox__input">
          <img src={profilepic} alt="profile" />
          <input
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What's happening?"
          />
        </div>
        <div className="tweetBox__options">
          <div className="tweetBox__icons">
            <img src={image} alt="image" />
            <img src={gif} alt="gif" />
            <img src={poll} alt="poll" />
            <img src={emoji} alt="emoji" />
            <img src={schedule} alt="schedule" />
          </div>
          <button type="submit">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
