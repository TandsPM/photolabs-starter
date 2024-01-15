import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  console.log("photos", photos);
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = (photo) => {
    console.log('test', photo);
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      {displayModal && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          photos={photos}
          similarPhoto={(photo) => {}}
      />
    )}
    </div>
  );
};

export default App;