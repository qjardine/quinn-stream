import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './QuinnTweet.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="quinntweet-app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
