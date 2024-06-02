import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tweet.css';

function Tweet({ tweet }) {
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    async function fetchPrediction() {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/predict`, { tweet: tweet.text });
        const predictionText = response.data.prediction === 1 ? 'Disaster' : 'Not a Disaster';
        setPrediction(predictionText);
      } catch (error) {
        console.error('Error fetching prediction:', error);
      }
    }

    fetchPrediction();
  }, [tweet.text]);

  return (
    <div className="tweet">
      <p>{tweet.text}</p>
      <p className={`tweetStatus ${prediction === 'Disaster' ? 'disaster' : 'notDisaster'}`}>
        Prediction: {prediction}
      </p>
    </div>
  );
}

export default Tweet;
