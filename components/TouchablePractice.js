import React, { useState } from 'react'
import { 
  Text, 
  View , 
  StyleSheet, 
  TextInput,
  SafeAreaView,
  Button,
  Alert, 
  TouchableOpacity,
} from 'react-native';

const TouchablePactice = () =>{
  
  const [email,setEmailValue] = useState("");
  const [password,setPasswordValue] = useState("");

  const CheckInputValue = () => {
    alert("email : "+ email +"\n Password : "+ password)
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>

        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
            onChangeText={(email)=>{setEmailValue(email)}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
            onChangeText={(password)=>{setPasswordValue(password)}}
          />
          <TouchableOpacity 
            activeOpacity={0.5} 
            onPress = {CheckInputValue}
          >
          <View style = {styles.buttonStyle}>
           <Text style = {styles.buttonTextStyle}>Summit</Text>
          </View>
          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor:'#1AEAED',
    height: 40,
    paddingHorizontal: 5,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    marginTop:10,
  },
});


export default TouchablePactice
