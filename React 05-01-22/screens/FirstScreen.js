import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

const FirstScreen = ({ navigation }) => {

  const [InName, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
      <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your Name"
        onChangeText={(InName) => {setName(InName)}}
      />
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate('SecondPage', { name: InName })}
      />
    </View>
  );
};

export default FirstScreen;

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

  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});
