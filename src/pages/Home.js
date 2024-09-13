import React from 'react';
import TweetList from '../components/TweetList';
import { tweets } from '../data/tweetData';

function Home() {
  return (
    <main className="tweet-list">
      <h2>Home</h2>
      <TweetList tweets={tweets} />
    </main>
  );
}

export default Home;