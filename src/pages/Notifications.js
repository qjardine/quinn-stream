import React from 'react';
import { Link } from 'react-router-dom';

function Notifications() {
  return (
    <main className="notifications">
      <h2>Notifications</h2>
      <div className="notification-list">
        <Link to="/messages" className="notification-item">
          <div className="notification-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="notification-content">
            <p className="notification-text">
              <span className="notification-highlight">Gray Media</span> sent you a new message
            </p>
            <p className="notification-time">2 days ago</p>
          </div>
        </Link>
        {/* You can add more notification items here */}
      </div>
    </main>
  );
}

export default Notifications;