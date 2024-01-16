import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const openModal = (photo) => {
    console.log('test', photo);
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  const isFavorite = (photoId) => favorites.includes(photoId);

  const toggleFavorite = (photoId) => {
    console.log('toggleFav', photoId);
    if (isFavorite(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  }

  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      openModal={openModal}
      toggleFavorite={toggleFavorite}
      favoriteCount={favorites.length}
      favorites={favorites} />

      {displayModal && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
      />
    )}
    </div>
  );
};

export default App;