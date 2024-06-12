import React, { useState } from 'react';
import axios from 'axios';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import Sidebar from './components/sidebar/Sidebar';
import RightSidebar from './components/rightsidebar/RightSidebar';
import './App.css';
import vector from './assests/Vector.png';

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
      <Sidebar />
      <div className="main">
        <div className="app__header">
          <h2>Home</h2>
          <img src={vector} alt="vector"/>
        </div>
        <TweetBox addTweet={addTweet} />
        <TweetList tweets={tweets} />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
