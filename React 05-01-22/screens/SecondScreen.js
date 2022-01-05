import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const SecondScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
      <Text style={styles.textStyle}>Value passed from Firstpage: {name}</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});
