import React from 'react';
import { Image } from 'react-native';

import LogoGorila from '../../assets/img/gorila_logo.png';

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 28 }}
      source={LogoGorila}
    />
  );
}