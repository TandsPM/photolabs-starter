import React from "react";
import PhotoListItem from './PhotoListItem';
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, openModal, toggleFavorite, favorites }) => {

  return (
    <div className="photo-list">
      {Object.values(photos).map((photo) => (
        <PhotoListItem
        key={photo.id}
        photo={photo}
        openModal={openModal}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        />
      ))}
    </div>
  );
};

export default PhotoList;