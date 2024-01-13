import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setPhotos }) => {
  const [favorites, setFavorites] = useState([]);

  const pickFavorite = (photoId) => {
    setFavorites((prevFavorites) =>
    prevFavorites.includes(photoId)
    ? prevFavorites.filter((id) => id !== photoId)
    : [...prevFavorites, photoId]
    );
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteCount={favorites.length}/>
      <PhotoList photos={photos} switchFav={pickFavorite} />
    </div>
  );
};

export default HomeRoute;
