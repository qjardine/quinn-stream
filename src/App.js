import React from 'react';
import './QuinnTweet.css';
import Header from './Header';
import Sidebar from './Sidebar';
import TweetList from './TweetList';
import { tweets } from './tweetData';

function App() {
  return (
    <div className="quinntweet-app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <TweetList tweets={tweets} />
      </div>
    </div>
  );
}

export default App;
