import React from "react";
import PhotoListItem from './PhotoListItem';
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id}>
        <PhotoListItem photo={photo} imageSource={photo.urls.regular} />
        <PhotoFavButton />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
