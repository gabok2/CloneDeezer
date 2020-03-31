import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header1 from '../components/Header/header';

import Music from '../pages/Music';

const Stack = createStackNavigator();

export default function NewRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: false,
        headerBackground: Header1,
      }}
      initialRouteName="Música"
    >
      <>
        <Stack.Screen name="Música" component={Music} />
      </>
    </Stack.Navigator>
  );
}
