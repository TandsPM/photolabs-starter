import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, closeModal, photos }) => {
  const { urls, user, location } = selectedPhoto;
  console.log('selectedPhoto', selectedPhoto);
  console.log('urls', selectedPhoto?.urls);
  console.log('user', selectedPhoto?.user);
  console.log('location', selectedPhoto?.location);
  const [selectedSimilarPhoto, setSelectedSimilarPhoto] = useState(null);

  const handleSimilar = (photo) => {
    setSelectedSimilarPhoto(photo);
  };

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

    <div className="photo-details-modal__images">
      {urls && urls.full && (
      <img 
      className="photo-details-modal__images"
      src={urls.full}
      alt={`Photo taken in ${location?.city}, ${location?.country}`}
      />
        )}

        <div className="photo-details-modal__photographer-details">
          {user && (
            <>
          <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`Profile for ${user.username}`}
          />
          
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
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
          photos={photos}
          similar_photo={handleSimilar}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
