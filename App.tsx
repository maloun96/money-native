import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigations/RootNavigation';

export default function App() {
  return (
      <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
