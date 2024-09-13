import React from 'react';
import TweetList from '../TweetList';
import { tweets } from '../tweetData';

function Home() {
  return (
    <main className="tweet-list">
      <h2>Home</h2>
      <TweetList tweets={tweets} />
    </main>
  );
}

export default Home;