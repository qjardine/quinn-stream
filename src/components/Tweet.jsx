import React from 'react';
import { formatDate } from '../utils/helpers';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img src={tweet.avatar} alt={`${tweet.name}'s avatar`} className="avatar" />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="name">{tweet.name}</span>
          <span className="username">@{tweet.username}</span>
          <span className="date">{formatDate(tweet.timestamp)}</span>
        </div>
        <p className="tweet-text">{tweet.text}</p>
        {tweet.image && <img src={tweet.image} alt="Tweet image" className="tweet-image" />}
        <div className="tweet-actions">
          <span>💬 {tweet.replies}</span>
          <span>🔁 {tweet.retweets}</span>
          <span>❤️ {tweet.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;