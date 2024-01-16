import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ toggleFavorite, photoId, favorites }) {

  const handleClick = () => {
    toggleFavorite(photoId);
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorites.includes(photoId)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;