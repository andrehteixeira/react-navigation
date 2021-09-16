import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import LogoTitle from '../components/LogoHeader';

import Main from '../pages/Main';
import Main2 from '../pages/Main2';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createStackNavigator();

export default function MainRoutes() {
  const navigation = useNavigation();
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF'
        },
        headerTintColor: '#333'
      }}
    >
      <Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerLeft: () => (
            <Ionicons
              name={'ios-menu'}
              color={'#10C0C6'}
              size={28}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
      <Screen
        name="Main2"
        component={Main2}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
}