import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
      <PhotoDetailsModal />
    </div>
  );
};

export default App;
