import React from 'react';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><i className="fas fa-home"></i> Home</li>
        <li><i className="fas fa-hashtag"></i> Explore</li>
        <li><i className="fas fa-bell"></i> Notifications</li>
        <li><i className="fas fa-envelope"></i> Messages</li>
        <li><i className="fas fa-bookmark"></i> Bookmarks</li>
        <li><i className="fas fa-list-alt"></i> Lists</li>
        <li><i className="fas fa-user"></i> Profile</li>
        <li><i className="fas fa-ellipsis-h"></i> More</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
