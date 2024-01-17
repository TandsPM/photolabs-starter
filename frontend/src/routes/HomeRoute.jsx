import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, toggleFavorite, favoriteCount, favorites, setDark }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteCount={favoriteCount} setDark={setDark}/>
      <PhotoList photos={photos} openModal={openModal} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
};

export default HomeRoute;