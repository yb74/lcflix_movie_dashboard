import React, {useEffect, useState} from 'react';
import {FlatList, Text, Image, View, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromWishlist} from '../redux/actions';
import {useNavigation} from '@react-navigation/native';

function WishScreen(props) {
  const dispatch = useDispatch();
  const {wishlist} = useSelector(state => state.favoritesReducer);
  const {primary} = props.theme.colors;
  const [isFavoritesList, setIsFavoritesList] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    wishlist.length > 0
      ? setIsFavoritesList(true)
      : setIsFavoritesList(false);
  }, [isFavoritesList, wishlist]);

  // update redux store, delete movie
  const dispatchDeleteFavorite = movie => {
    dispatch(removeFromWishlist(movie));
  };

  const deleteFavorite = movie => {
    dispatchDeleteFavorite(movie);
  };

  const onPressMovie = item => {
    navigation.navigate('MovieDetails', {item});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onPressMovie(item)}>
        <View key={item.id} style={tailwind('mt-4 flex-row bg-white max-h-40')}>
          <View style={tailwind('flex-1')}>
            <Image
              style={[
                {height: '100%', resizeMode: 'cover'},
                tailwind('w-full'),
              ]}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
              }}
            />
            <View
              style={tailwind(
                'absolute bottom-0 mb-1 pb-0 pr-2 items-end self-end',
              )}>
              <TouchableOpacity
                onPress={() => {
                  deleteFavorite(item);
                }}>
                <Icon name="star" color="#ffd700" size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tailwind('flex-1 p-2')}>
            <Text style={{fontWeight: 'bold'}}>{item.original_title}</Text>
            <Text style={tailwind('text-xs')}>
              Date de sortie: {item.release_date.substring(0, 4)}
            </Text>
            <View style={tailwind('flex-row')}>
              <Icon name="thumb-up" color="#ffd700" size={20} />
              <Text style={[{fontWeight: 'bold'}, tailwind('pl-2')]}>
                {item.vote_average}
              </Text>
            </View>
            <View>
              <Text style={tailwind('text-xs pt-2')}>
                {item.overview.slice(0, 120)} [...]
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {isFavoritesList ? (
        <>
          <View style={tailwind('flex-1')}>
            <FlatList
              data={wishlist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      ) : (
        <View style={tailwind('flex-1 justify-center items-center ')}>
          <Text
            style={[
              {color: primary, fontWeight: 'bold'},
              tailwind('text-2xl p-5 text-center'),
            ]}>
            Vous n'avez aucun favori
          </Text>
          <View style={tailwind('flex-row')}>
            <Text
              style={[
                {
                  color: primary,
                },
                tailwind('text-sm self-center text-center'),
              ]}>
              Ajoutez en cliquant sur{' '}
            </Text>
            <Icon name="star-border" color="#11CB46" size={28} />
          </View>
        </View>
      )}
    </>
  );
}

export default withTheme(WishScreen);
