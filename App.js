/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet} from 'react-native';
import {View, Text} from 'rn-tailwind';

const App = () => {
  return (
    <View className="h-full xl:h-1/2">
      <View className="pt-12 xl:pt-4 items-center">
        {/*<View className="bg-blue-200 px-3 py-1 rounded-full">*/}
        {/*  <Text className="text-blue-800 font-semibold">App de Younes</Text>*/}
        {/*</View>*/}
        <Text className="text-blue-800 font-semibold">
          LcFlix - Movies Dashboard
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
