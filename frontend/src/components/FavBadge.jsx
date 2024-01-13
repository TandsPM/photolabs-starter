import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoriteCount }) => {
  return (
    <div className='fav-badge'>
      {favoriteCount > 0 && (
        <div className='fav-badge__count'>{favoriteCount}</div>
      )}
      <FavIcon displayAlert={favoriteCount > 0}/>
    </div>
  ) 
};

export default FavBadge;