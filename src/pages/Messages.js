import React from 'react';

function Messages() {
  const message = {
    sender: "Gray Media",
    avatar: "https://via.placeholder.com/48x48.png?text=GM",
    timestamp: "2 days ago",
    content: "Dear Quinn,\n\nThank you for taking the time to interview with us for the Full Stack Developer position. We were impressed by your skills and experience, especially your work with React and TypeScript.\n\nWe'll be in touch soon with next steps.\n\nBest regards,\nThe Gray Media Team"
  };

  return (
    <main className="messages">
      <h2>Messages</h2>
      <div className="message">
        <img src={message.avatar} alt={message.sender} className="message-avatar" />
        <div className="message-content">
          <div className="message-header">
            <span className="message-sender">{message.sender}</span>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          <p className="message-text">{message.content}</p>
        </div>
      </div>
    </main>
  );
}

export default Messages;