import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import {withTheme} from 'react-native-paper';

const Stack = createStackNavigator();

const HomeNavigator = props => {
  const {primary} = props.theme.colors;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffd700',
        },
        headerTintColor: primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {backgroundColor: '#000'},
      }}>
      <Stack.Screen
        name="Homepage"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{title: 'Movie details'}}
      />
    </Stack.Navigator>
  );
};

export default withTheme(HomeNavigator);
