import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromWishlist} from '../redux/actions';

export const AddToWishListButton = props => {
  const dispatch = useDispatch();
  const {wishlist} = useSelector(state => state.favoritesReducer);
  const {flashyGreen} = props.theme.colors;

  useEffect(() => {}, []);
  // update redux store, add movie
  const dispatchAddToWishlist = movie => {
    dispatch(addToWishlist(movie));
  };

  // update redux store, delete movie
  const dispatchRemoveFromWishlist = movie => {
    dispatch(removeFromWishlist(movie));
  };

  const addFavorite = movie => {
    dispatchAddToWishlist(movie);
  };

  const deleteFavorite = movie => {
    dispatchRemoveFromWishlist(movie);
  };

  const doesFavoriteExist = movie => {
    if (wishlist.filter(item => item.id === movie.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <TouchableOpacity
        key={props.movieItem.id}
        onPress={() => {
          doesFavoriteExist(props.movieItem)
            ? deleteFavorite(props.movieItem)
            : addFavorite(props.movieItem);
        }}>
        <Icon
          name={doesFavoriteExist(props.movieItem) ? 'star' : 'star-border'}
          color={flashyGreen}
          size={28}
        />
      </TouchableOpacity>
    </>
  );
};

export default withTheme(AddToWishListButton);
