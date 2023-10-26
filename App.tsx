// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Cadastro from './Cadastro';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Cadastro />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
