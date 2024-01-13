import React, { useState, useEffect } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, favoriteCount }) => {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (favoriteCount > 0) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [favoriteCount]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge showBadge={favorited} favoriteCount={favoriteCount}/>
    </div>
  )
}

export default TopNavigation;