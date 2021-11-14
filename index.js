/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';

import {TailwindUIProvider} from 'rn-tailwind';

const AppWrapper = () => (
  <TailwindUIProvider>
    <App />
  </TailwindUIProvider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
