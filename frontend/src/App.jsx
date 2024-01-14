import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  console.log("photos", photos);
  const [displayModal, setDisplayModal] = useState(false);

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} />
      {displayModal && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
