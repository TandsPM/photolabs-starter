import React, { useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { photo } = props;
  const { location, urls, user } = photo;
  console.log('props', props);
 
  return (
    <div className="photo-list__item">
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
      {/* <PhotoFavButton switchFav={switchFav}/> */}
    </div>
  )
};

export default PhotoListItem;
