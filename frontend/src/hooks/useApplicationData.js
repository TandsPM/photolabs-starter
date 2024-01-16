import { useReducer, useEffect } from 'react';


// action types used in reducer - Objects witha 'type' property for action to be done
export const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

const initialState = {
  selectedPhoto: null,
  displayModal: false,
  favorites: [],
  photoData: [],
  topicData: []
};

// how state should be updated based on different actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return { ...state, selectedPhoto: action.payload, displayModal: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, selectedPhoto: null, displayModal: false };
    case ACTIONS.TOGGLE_FAVORITE:
      if (state.favorites.includes(action.payload)) {
        return { ...state, favorites: state.favorites.filter((id) => id !== action.payload) };
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      throw new Error('Tried to reduce with unsupported action type: ${action.type}');
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });

  };

  const onClosePhotoDetailsModal = () => {
    closeModal();
  };

  // fetching photos data
  useEffect(() => {
    const fetchPhotoData = () => {
      fetch('/api/photos')
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
    };

  fetchPhotoData();
}, []);

  // fetching Topics data
  useEffect(() => {
    const fetchTopicData = () => {
      fetch('/api/topics')
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }));
    };

  fetchTopicData();
}, []);

  return {
    state,
    openModal,
    toggleFavorite,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;