import React, { useState } from 'react';

import PhotoFavButton from'./components/PhotoFavButton';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [selected, setSelected] = useState(false);

  const switchFav = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  // const photo = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      {[1, 2, 3].map((id) => (
        <div key={id} className="photo-container">
          <PhotoFavButton selected={selected} switchFav={switchFav} />
          {/* <PhotoListItem /> */}
          <PhotoList />
        </div>
      ))}
    </div>
  );
};

export default App;
