import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}
