import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, closeModal, toggleFavorite, favorites }) => {
  const { urls, user, location, similar_photos } = selectedPhoto;
  console.log('similar_phot', similar_photos);


  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton toggleFavorite={toggleFavorite} photoId={selectedPhoto.id} favorites={favorites} />
          {selectedPhoto.urls && selectedPhoto.urls.full && (
            <img className="photo-details-modal__image"
              src={selectedPhoto.urls.full}
              alt={`Photo taken in ${selectedPhoto.location?.city}, ${selectedPhoto.location?.country}`}
            />
          )}

          <div className="photo-details-modal__photographer-details">
            {user && (
              <>
                <img
                  className="photo-details-modal__photographer-profile"
                  src={user.profile}
                  alt={`Profile for ${user.username}`}
                />

                <div className="photo-details-modal__photographer-info">
                  <span>{user.name}</span>
                  <div className="photo-details-modal__photographer-location">
                    {location?.city}, {location?.country}
                  </div>
                </div>
              </>
            )}
          </div>

          <p className='photo-details-modal__header'>Similar Photos</p>
        </div>
        <div className='photo-details-modal__top-bar'>
          <PhotoList
            photos={similar_photos}
            toggleFavorite={toggleFavorite}
            photoId={selectedPhoto.id}
            favorites={favorites}
          />
        </div>
      </div>

  );
};

export default PhotoDetailsModal;