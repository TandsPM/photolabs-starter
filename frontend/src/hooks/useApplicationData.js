import { useState } from 'react';

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  const isFavorite = (photoId) => favorites.includes(photoId);

  const toggleFavorite = (photoId) => {
    if (isFavorite(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  const onClosePhotoDetailsModal = () => {
    closeModal();
  };

  return {
    state: {
      selectedPhoto,
      displayModal,
      favorites,
    },
    openModal,
    toggleFavorite,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;