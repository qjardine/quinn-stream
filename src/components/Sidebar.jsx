import React from 'react';
import SidebarItem from './SidebarItem';
import useSidebarItems from '../hooks/useSidebarItems';
import { useAppContext } from '../context/AppContext';

function Sidebar() {
  const sidebarItems = useSidebarItems();
  const { setCurrentPage } = useAppContext();

  const handleItemClick = (label) => {
    setCurrentPage(label);
  };

  return (
    <nav className="sidebar">
      <ul>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={handleItemClick}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;