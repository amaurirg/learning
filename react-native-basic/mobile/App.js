import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.project}>Testando React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  project: {
    color: '#DDD',
    fontWeight: 'bold',
    fontSize: 32,
  }
})