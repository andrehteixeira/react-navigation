import React from 'react';
import TabRoutes from './src/routes/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <TabRoutes />
    </>
  );
}
