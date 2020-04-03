import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Music from '../pages/Music';
import Carrosel from '../pages/Carrosel';

const Stack = createStackNavigator();

export default function NewRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: false,
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: '#111',
        headerStyle: {
          height: 55,
        },
      }}
    >
      <>
        <Stack.Screen name="Música" component={Music} />
        <Stack.Screen name="Carrosel" component={Carrosel} />
      </>
    </Stack.Navigator>
  );
}
