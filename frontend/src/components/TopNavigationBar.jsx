import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, favoriteCount, handleTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopic={handleTopic}/>
      <FavBadge showBadge={favoriteCount > 0} favoriteCount={favoriteCount}/>
    </div>
  )
}

export default TopNavigation;