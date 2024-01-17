import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    openModal,
    toggleFavorite,
    onClosePhotoDetailsModal,
    handleTopic,
    setDark,
  } = useApplicationData();

const { selectedPhoto, displayModal, favorites, photoData, topicData, dark } = state;


  return (
    <div className={`App ${dark}`}>
      <HomeRoute
      photos={photoData}
      topics={topicData}
      toggleFavorite={toggleFavorite}
      favoriteCount={favorites.length}
      openModal={openModal}
      favorites={favorites}
      handleTopic={handleTopic}
      setDark={setDark}
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