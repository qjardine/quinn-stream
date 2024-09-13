import React from 'react';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img src={`https://via.placeholder.com/48x48.png?text=${tweet.user.charAt(0)}`} alt={tweet.user} className="avatar" />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="user-name">{tweet.user}</span>
          <span className="user-handle">{tweet.handle}</span>
          <span className="tweet-time"> · {tweet.timestamp}</span>
        </div>
        <p className="tweet-text">{tweet.content}</p>
        <div className="tweet-actions">
          <span><i className="far fa-comment"></i> {tweet.replies}</span>
          <span><i className="fas fa-retweet"></i> {tweet.retweets}</span>
          <span><i className="far fa-heart"></i> {tweet.likes}</span>
          <span><i className="far fa-share-square"></i></span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
