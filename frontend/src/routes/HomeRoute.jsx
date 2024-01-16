import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, openModal, toggleFavorite, favoriteCount, favorites }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteCount={favoriteCount}/>
      <PhotoList photos={photos} openModal={openModal} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
};

export default HomeRoute;