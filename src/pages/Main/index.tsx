import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main2')}
      >
        <Text style={styles.buttonText}>Ir para Main2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.buttonText}>Abrir DrawerMenu</Text>
      </TouchableOpacity>
    </View>
  );
}