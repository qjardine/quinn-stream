import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages'; // Add this import
import Notifications from './pages/Notifications'; // Add this import
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="quinntweet-app">
          <Header />
          <div className="main-content">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} /> {/* Add this route */}
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
