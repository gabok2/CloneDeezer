import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Music from './Stack';
import Mic from '../pages/Mic';
import Like from '../pages/Like';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types

        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let type;
          if (route.name === 'Música') {
            iconName = focused ? 'ios-musical-notes' : 'md-musical-notes';
            type = 'ionicon';
          } else if (route.name === 'Shows') {
            iconName = focused ? 'microphone' : 'microphone';
            type = 'font-awesome';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart-o';
            type = 'font-awesome';
          } else if (route.name === 'Busca') {
            iconName = focused ? 'search1' : 'search1';
            type = 'antdesign';
          }
          // You can return any component that you like here!
          return <Icon ize={25} name={iconName} color={color} type={type} />;
        },
      })}
      tabBarOptions={{
        showLabel: true,
        showIcon: true,
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#999',
        style: {
          height: 62,
          backgroundColor: '#2b2b2b',
          borderTopWidth: 0,
        },
        labelStyle: {
          position: 'relative',
          bottom: 7,
        },
      }}
    >
      <Tab.Screen name="Música" component={Music} />
      <Tab.Screen name="Shows" component={Mic} />
      <Tab.Screen name="Favoritos" component={Like} />
      <Tab.Screen name="Busca" component={Search} />
    </Tab.Navigator>
  );
}
