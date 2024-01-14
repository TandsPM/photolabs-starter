import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, closeModal, photos, similarPhoto }) => {
  const { urls, user } = selectedPhoto;
  const [selectedSimilarPhoto, setSelectedSimilarPhoto] = useState(null);

  const handleSimilar = (photo) => {
    setSelectedSimilarPhoto(photo);
  };

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* <div className="photo-details-modal__image">
        {selectedPhoto && selectedPhoto.urls && (
          <img src={selectedPhoto.urls.full} alt={`Photo by ${selectedPhoto.user.name}`} />
        )}
      </div> */}

      
      {/* <div classNmae="photo-details-modal__header">
        <h2>Similar Photos</h2>
      </div> */}

      <div className="photo-details-modal__images">
        {selectedPhoto && selectedPhoto.urls && (
          <img src={selectedPhoto.urls.regular} alt={`Photo by ${selectedPhoto.user.name}`} />
        )}

        <PhotoList
          photos={photos}
          switchFav={() => { }}
          openModal={() => { }}
          similarPhoto={handleSimilar}
        />
      </div>
      {selectedSimilarPhoto && (
        <div className="">
          {selectedSimilarPhoto.user && <p>{selectedSimilarPhoto.user.name}</p>}
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
