import React from 'react';
import { useAppContext } from '../context/AppContext';
import Home from './Home';
import Explore from './Explore';
import Notifications from './Notifications';
import Messages from './Messages';
import Bookmarks from './Bookmarks';
import Lists from './Lists';
import Profile from './Profile';
import More from './More';

function MainContent() {
  const { currentPage } = useAppContext();

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Explore':
        return <Explore />;
      case 'Notifications':
        return <Notifications />;
      case 'Messages':
        return <Messages />;
      case 'Bookmarks':
        return <Bookmarks />;
      case 'Lists':
        return <Lists />;
      case 'Profile':
        return <Profile />;
      case 'More':
        return <More />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="main-content">
      {renderPage()}
    </main>
  );
}

export default MainContent;