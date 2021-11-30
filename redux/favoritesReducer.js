import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './actions';

const initialState = {
  wishlist: [],
  loading: false,
  error: false,
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        // get previous state
        ...state,
        // return new state with new favoritesList
        wishlist: [...state.wishlist, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        // get previous state
        ...state,
        // return new state, deleting previous movie
        wishlist: state.wishlist.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
