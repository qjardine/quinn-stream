import { useState, useEffect } from 'react';

const defaultItems = [
  { icon: 'fas fa-home', label: 'Home' },
  { icon: 'fas fa-hashtag', label: 'Explore' },
  { icon: 'fas fa-bell', label: 'Notifications' },
  { icon: 'fas fa-envelope', label: 'Messages' },
  { icon: 'fas fa-bookmark', label: 'Bookmarks' },
  { icon: 'fas fa-list-alt', label: 'Lists' },
  { icon: 'fas fa-user', label: 'Profile' },
  { icon: 'fas fa-ellipsis-h', label: 'More' },
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