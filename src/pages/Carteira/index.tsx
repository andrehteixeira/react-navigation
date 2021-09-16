import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function Carteira() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Ir para Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}