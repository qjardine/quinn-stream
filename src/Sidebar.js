import React from 'react';
import { Link } from 'react-router-dom';
import useSidebarItems from './hooks/useSidebarItems';

function Sidebar() {
  const sidebarItems = useSidebarItems();

  return (
    <nav className="sidebar">
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path || `/${item.label.toLowerCase()}`} className="sidebar-item">
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
