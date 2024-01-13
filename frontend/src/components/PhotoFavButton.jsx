import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ switchFav, isFavorite, photoId }) {
  // const [selected, setSelected] = useState(false);

  const handleClick = () => {
    switchFav(photoId);
    // setSelected((prevSelected) => !prevSelected);
  };


  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;