import React from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoFavButton />
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
