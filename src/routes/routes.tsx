import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LogoTitle from '../components/LogoHeader';

import Home from './tabbar.routes';
import Mais from '../pages/Mais';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}
          options={{
            headerShown: false,
            // headerTitle: (props: any) => <LogoTitle {...props} />,
            headerTintColor: '#10C0C6'
          }}
        />
        <Drawer.Screen name="Mais" component={Mais} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}