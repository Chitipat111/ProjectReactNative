import React, { useState } from 'react'
import { 
  View, 
  StyleSheet, 
  TextInput,
  SafeAreaView,
  Image, 
} from 'react-native';

const ImageWithTextInput = () => {

  const [name,setNameValue] = useState("")
  const [phone,setPhoneValue] = useState("")

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source = {require('../images/input_phone.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex:1}}
            placeholder="Enter Your Name Here"
            onChangeText={setNameValue}
            value={name}
          />
          <Image
            source = {require('../images/input_username.png')}
            style={styles.imageStyle}
          />
          <TextInput 
            style={{flex:1}}
            placeholder="Enter Your Phone Here"
            onChangeText={setPhoneValue}
            value={phone}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default ImageWithTextInput