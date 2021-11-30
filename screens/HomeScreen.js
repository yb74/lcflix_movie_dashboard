import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';
import Carousel from 'react-native-snap-carousel';
import {withTheme} from 'react-native-paper';
import AddToWishListButton from '../UI/AddToWishListButton';
import {API_KEY, API_BASE_URL, API_IMAGE_BASE_URL} from '../API/env';

const HomeScreen = props => {
  const [topMoviesList, setTopMoviesList] = useState([]);
  const [heroMovie, setHeroMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesHeroResponse = await fetch(
          `${API_BASE_URL}/movie/10699?api_key=${API_KEY}`,
        );
        const moviesHeroData = await moviesHeroResponse.json();
        console.log('Response : o%', moviesHeroData);
        setHeroMovie(moviesHeroData);
        // console.log('Top movies array : o%', topMoviesList);
        setIsLoading(false);
      } catch (error) {
        console.log('error movies/ hero : ', error);
      }
      // Second request
      try {
        const moviesResponse = await fetch(
          `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en&page=1`,
        );
        const moviesData = await moviesResponse.json();
        // console.log('Response : o%', moviesData);
        const topMoviesData = moviesData.results.slice(0, 5);
        setTopMoviesList(topMoviesData);
        setIsLoading(false);
        // console.log('Top movies array : o%', topMoviesList);
      } catch (error) {
        console.log('error popular movie: ', error);
      }
    };

    fetchData();
  }, []);

  // console.log('Top 5 movies array : o%', topMoviesList);

  // events
  const onPressCarousel = item => {
    navigation.navigate('MovieDetails', {item});
  };

  const onPressHero = item => {
    navigation.navigate('MovieDetails', {item});
  };

  const {title, flashyGreen, primary} = props.theme.colors;
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          {
            height: 180,
            padding: 5,
          },
          tailwind('bg-white mx-7 rounded-lg'),
        ]}>
        <TouchableWithoutFeedback onPress={() => onPressCarousel(item)}>
          <View>
            <Image
              source={{
                uri: `${API_IMAGE_BASE_URL}/${item.backdrop_path}`,
              }}
              style={[{resizeMode: 'contain', width: '100%', height: 135}]}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={tailwind('flex-row bg-white pt-2 max-h-8')}>
          <Text
            style={[
              {
                lineHeight: 1,
                color: title,
                fontWeight: 'bold',
              },
              tailwind('flex-1 text-sm text-left self-start'),
            ]}>
            {item.original_title}
          </Text>
          <View style={tailwind('pr-3 items-end self-center')}>
            <AddToWishListButton movieItem={item} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={tailwind('flex-1')}>
        {!isLoading ? (
          <>
            <View style={{height: 3, backgroundColor: flashyGreen}} />
            <View style={tailwind('flex-1')}>
              <TouchableOpacity onPress={() => onPressHero(heroMovie)}>
                <Image
                  source={{
                    uri: `${API_IMAGE_BASE_URL}/${heroMovie.backdrop_path}`,
                  }}
                  style={[tailwind('h-full w-full justify-end')]}
                />
                <Text
                  style={[
                    {
                      color: primary,
                      fontWeight: 'bold',
                      backgroundColor: '#000000c0',
                    },
                    tailwind(
                      'w-full absolute bottom-0 flex-1 text-2xl leading-10 text-center',
                    ),
                  ]}>
                  {heroMovie.title}
                </Text>
                <View style={tailwind('flex-row')}>
                  <View
                    style={tailwind(
                      'flex-1 mb-1 bottom-0 right-0 absolute pr-5 items-end self-center',
                    )}>
                    <AddToWishListButton movieItem={heroMovie} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={tailwind('flex-1')}>
              <Text
                style={[
                  {
                    color: primary,
                    fontWeight: 'bold',
                  },
                  tailwind('px-5 pt-2 text-left text-xl'),
                ]}>
                The top 5
              </Text>
              <Text
                style={[{color: primary}, tailwind('px-5 pb-3 opacity-60')]}>
                The most popular movies
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Carousel
                  layout={'default'}
                  ref={ref}
                  data={topMoviesList}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={renderItem}
                  // onSnapToItem={(index) => setActiveSlide(index)}
                />
              </View>
            </View>
          </>
        ) : (
          <View style={tailwind('flex-1 justify-center')}>
            <ActivityIndicator size="large" color={flashyGreen} />
          </View>
        )}
      </View>
    </>
  );
};

export default withTheme(HomeScreen);
