import React from 'react';
import Tweet from './Tweet';
import tweetData from '../tweetData';

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="tweet-list">
        {tweetData.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Home;