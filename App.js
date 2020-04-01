import 'react-native-gesture-handler';

import { StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/routes';

const MyTheme = {
  colors: {
    background: '#111',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <>
        <Routes />
        <StatusBar backgroundColor="#000" barStyle="light-content" />
      </>
    </NavigationContainer>
  );
}
