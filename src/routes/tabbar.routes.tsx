import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainRoutes from './main.routes';
import CarteiraRoutes from './carteira.routes';
import Mais from '../pages/Mais';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'HomeFlow') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Carteira') {
            iconName = focused
              ? 'ios-wallet'
              : 'ios-wallet-outline';
          } else if (route.name === 'Mais') {
            iconName = focused
              ? 'ios-apps'
              : 'ios-apps-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10C0C6',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen
        name="HomeFlow"
        component={MainRoutes}
        options={{
          title: 'Home'
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={CarteiraRoutes}
      />
      <Tab.Screen
        name="Mais"
        component={Mais}
        options={{
          headerShown: true
        }}
      />
    </Tab.Navigator>

  );
}