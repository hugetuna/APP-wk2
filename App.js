import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react-native'

//componens
import Header from './tools/component/Header';
import List from './tools/component/list';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Header />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
