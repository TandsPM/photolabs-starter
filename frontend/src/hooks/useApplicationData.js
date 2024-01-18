import { useReducer, useEffect } from 'react';
import axios from 'axios';

// action types used in reducer - Objects witha 'type' property for action to be done
export const ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
};

const initialState = {
  selectedPhoto: null,
  displayModal: false,
  favorites: [],
  photoData: [],
  topicData: [],
  photosByTopic: [],
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
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return { ...state, photosByTopic: action.payload };
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

  const handleTopic = (topicId) => {
    fetchPhotosByTopic(topicId);
  }

  const fetchData = (url, actionType, dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: actionType, payload: data }))
      .catch((error) => console.error(`Error fetching data: ${error}`));
  };

  // fetching photos data
  useEffect(() => {
    const fetchPhotoData = () => {
      fetchData('/api/photos', ACTIONS.SET_PHOTO_DATA, dispatch);
    };

  fetchPhotoData();
}, []);

  // fetching Topics data
  useEffect(() => {
    const fetchTopicData = () => {
      fetchData('/api/topics', ACTIONS.SET_TOPIC_DATA, dispatch)
    };

  fetchTopicData();
}, []);

// fetch photos based on given topicId
const fetchPhotosByTopic = (topicId) => {
  axios
  .get(`http://localhost:8001/api/topics/photos/${topicId}`)
  .then((response) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
  })
  .catch((error) => {
    console.error(`Error fetching the photos by topic:`, error);
  });
};

  return {
    state,
    openModal,
    toggleFavorite,
    onClosePhotoDetailsModal,
    handleTopic,
  };
};

export default useApplicationData;