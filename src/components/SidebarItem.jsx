import React from 'react';

function SidebarItem({ icon, label, onClick }) {
  return (
    <li onClick={() => onClick(label)}>
      <i className={icon}></i> {label}
    </li>
  );
}

export default SidebarItem;