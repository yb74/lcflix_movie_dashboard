/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomBarNavigator from './navigation/BottomBarNavigator';

const theme = {
  background: {
    darkGrey: 'ff9e00',
    black: '#000',
  },
  myOwnProperty: true,
  roundness: 2,
  colors: {
    primary: '#fff',
    title: '#000',
    flashyGreen: '#ffd700',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <BottomBarNavigator />
    </PaperProvider>
  );
};

export default App;
