import React, { useState } from 'react';
import PhotoFavButton from'./components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

const App = () => {
  const [selected, setSelected] = useState(false);

  const switchFav = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <div className="App">
      <HomeRoute />
      {[1, 2, 3].map((id) => (
        <div key={id} className="photo-container">
          <PhotoFavButton selected={selected} switchFav={switchFav} />
          <PhotoList />
        </div>
      ))}
    </div>
  );
};

export default App;
