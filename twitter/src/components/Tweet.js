import React from 'react';
import './Tweet.css';
import {profilepic} from './sidebar/imports'

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <div className="tweet__header">
        <img src={profilepic} alt="profile" />
        <div>
          <h3>Devon Lane <span>@johndue</span></h3>
          <p>{tweet.text}</p>
          {tweet.image && <img src={tweet.image} alt="tweet" />}
        </div>
      </div>
      <div className="tweet__footer">
        <span>{tweet.isDisaster ? 'Disaster' : 'Not a Disaster'}</span>
      </div>
    </div>
  );
}

export default Tweet;
