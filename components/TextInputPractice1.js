import React, { useState } from 'react'
import { 
  Text, 
  View , 
  StyleSheet, 
  TextInput,
  SafeAreaView,
  Button,
  Alert, 
} from 'react-native';

const TextInputPractice1 = () =>{
  
  const [name,setNameValue] = useState("");
  const [email,setEmailValue] = useState("");

  const CheckInputValue = () => {
    if(!name.trim()){
      alert("Please Enter Name");
      return;
    }
    if(!email.trim()){
      alert("Please Enter Email");
      return;
    }
    else{
      alert("Success")
    }
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>

        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Name"
            onChangeText={(name)=>{setNameValue(name)}}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Email"
            onChangeText={(email)=>{setEmailValue(email)}}
          />
          <View style={{marginTop:15}}>
            <Button
            OnPress = {CheckInputValue}
            title = "Summit"
            color = "#1AEAED"
            />
          </View>
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
});


export default TextInputPractice1
