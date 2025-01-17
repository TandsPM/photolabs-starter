import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo, openModal, toggleFavorite, favorites }) => {
  const { location, urls, user } = photo;

  const handleClick = (event) => {
    const isFav = event.target.classList.contains('photo-list__fav-icon-svg');
    if (!isFav && openModal) {
      openModal(photo);
    };
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={photo.id} toggleFavorite={toggleFavorite} favorites={favorites} />

      <div className="photo-list__content" onClick={handleClick}>
        {urls && <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-list__image" />}

        {user && (
          <div className="photo-list__user-container">
            <div className="photo-list__user-details">
              <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
              <div>
                <p className="photo-list__user-username">{user.username}</p>
                {location && (
                  <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoListItem;