import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CarteiraScreen from '../pages/Carteira';
import Cadastro from '../pages/Cadastro';

const { Navigator, Screen } = createStackNavigator();

export default function CadastroRoutes() {
  return (
    <Navigator
      initialRouteName="CarteiraScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF'
        },
        headerTintColor: '#333'
      }}
    >
      <Screen
        name="CarteiraScreen"
        component={CarteiraScreen}
        options={{
          title: 'Carteira'
        }}
      />
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerBackTitleVisible: false
        }}
      />
    </Navigator>
  );
}