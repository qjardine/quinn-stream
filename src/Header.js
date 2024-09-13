import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">QuinnStream: Quinn Fleur's Visual Resume</div>
      <input type="text" className="search-bar" placeholder="Search Quinn's qualifications" />
      <div className="user-actions">
        <button><i className="fas fa-envelope"></i> Contact Quinn</button>
      </div>
    </header>
  );
}

export default Header;
