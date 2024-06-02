// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = async (tweetText) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/predict`, { tweet: tweetText });
      const newTweet = {
        id: tweets.length + 1,
        text: tweetText,
        isDisaster: response.data.prediction === 1,
      };
      setTweets([newTweet, ...tweets]);
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  };

  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <TweetBox addTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
}

export default App;
