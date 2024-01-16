import { useReducer } from 'react';

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

  return {
    state,
    openModal,
    toggleFavorite,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;