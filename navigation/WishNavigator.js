import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import WishScreen from '../screens/WishScreen';
import {withTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();

function WishStack(props) {
  const {primary} = props.theme.colors;
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#000'},
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffd700',
        },
        headerTintColor: primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerLeft: () => (
        //   <HeaderBackButton
        //     tintColor={primary}
        //     onPress={() => navigation.goBack()}
        //   />
        // ),
      }}>
      <Stack.Screen
        name="WishListMovies"
        component={WishScreen}
        options={{
          title: 'Your favorite list',
        }}
      />
    </Stack.Navigator>
  );
}
export default withTheme(WishStack);
