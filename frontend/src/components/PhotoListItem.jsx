import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
 
  return (
    <div className="PhotoListItem">
      <img src={imageSource} alt={`Photo by ${username}`} className="photoImage"/>
      <img src={profile} alt={`${username}'s profile`} className="profileImage"/>
      <div className="photoDetails">
        <p className="photousername">{username}</p>
        <p className="photolocation">{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
