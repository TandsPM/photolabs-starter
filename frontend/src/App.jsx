import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const {
    state,
    openModal,
    toggleFavorite,
    onClosePhotoDetailsModal,
  } = useApplicationData();

const { selectedPhoto, displayModal, favorites } = state;

  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      toggleFavorite={toggleFavorite}
      favoriteCount={favorites.length}
      openModal={openModal}
      favorites={favorites}
      />

      {displayModal && (
        <PhotoDetailsModal
        selectedPhoto={selectedPhoto}
        closeModal={onClosePhotoDetailsModal}
        isFavorite={(photoId) => favorites.includes(photoId)}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    )}
    </div>
  );
};

export default App;