import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
 
  return (
    <div className="PhotoListItem">
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image"/>
      <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile"/>
      <div className="photo-list__user-details">
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
