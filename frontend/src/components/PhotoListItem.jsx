import React, { useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo, switchFav, setDisplayModal }) => {
  const { location, urls, user } = photo;

  const handleClick = () => {
    setDisplayModal(true);
  }
 
  return (
    <div className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton switchFav={switchFav} isFavorite={photo.isFavorite} photoId={photo.id} />
      {urls && <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-list__image"/>}
      {user && <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile"/>}
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
        <p>{user.username}</p>
        {location && (
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        )}
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
