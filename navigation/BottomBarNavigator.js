import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import tailwind from 'tailwind-rn';
import {Text, View} from 'react-native';
import WishNavigator from './WishNavigator';
import {withTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomBarNavigator = props => {
  const {darkGrey} = props.theme.background;
  const {flashyGreen} = props.theme.colors;

  const {wishlist} = useSelector(state => state.favoritesReducer);

  console.log('favorite list = ', wishlist);

  const BadgeIcon = () => (
    <View style={tailwind('w-11 self-end')}>
      <View
        style={[
          {width: 17, height: 17},
          tailwind('z-10 absolute right-2 rounded-2xl bg-red-500'),
        ]}>
        <Text style={tailwind('text-white text-xs font-bold self-center pb-1')}>
          {Object.keys(wishlist).length}
        </Text>
      </View>
      <Icon name="star" color={flashyGreen} size={32} />
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homepage"
        style={tailwind('flex-1')}
        screenOptions={{
          cardStyle: {backgroundColor: '#000'},
          tabBarActiveTintColor: '#fff',
          // tabBarActiveBackgroundColor: '#fff',
          // tabBarInactiveTintColor: 'red',
          tabBarStyle: {
            backgroundColor: darkGrey,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <View
                style={[
                  {width: 225},
                  tailwind('left-0 absolute right-0 justify-center items-end'),
                ]}>
                <Text style={{color: '#540', fontSize: 30, fontWeight: 'bold'}}>
                  LcFlix!
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="WishList"
          component={WishNavigator}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => <BadgeIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(BottomBarNavigator);
