import React from "react";
import PhotoListItem from './PhotoListItem';
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, switchFav, openModal }) => {

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} switchFav={switchFav} openModal={openModal} />
      ))}
    </div>
  );
};

export default PhotoList;
