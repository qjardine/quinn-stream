import { useState, useEffect } from 'react';

const defaultItems = [
  { icon: 'fas fa-home', label: 'Home', path: '/' },
  { icon: 'fas fa-bell', label: 'Notifications' },
  { icon: 'fas fa-envelope', label: 'Messages', path: '/messages' }, 
  { icon: 'fas fa-user', label: 'Profile', path: '/profile' },
];

function useSidebarItems() {
  const [items, setItems] = useState(defaultItems);

  // You can add logic here to fetch items from an API if needed
  useEffect(() => {
    // Example: fetch items from an API
    // const fetchItems = async () => {
    //   const response = await fetch('/api/sidebar-items');
    //   const data = await response.json();
    //   setItems(data);
    // };
    // fetchItems();
  }, []);

  return items;
}

export default useSidebarItems;