export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = movie => dispatch => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: movie,
  });
};

export const removeFromWishlist = (movie) => dispatch => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: movie,
  });
};
