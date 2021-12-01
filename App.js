import React ,{ useState, useMemo } from 'react';
import { 
  Text, 
  View , 
  StyleSheet, 
  TextInput, 
  Button, 
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

const App = () => {
  
  const [inputValue, setInputValue] = useState('');
  const checkValueIsNumberOrNot =  () =>{
    if(isNaN(inputValue)){
      alert("It is not a Number");
    }
    else{
      alert("It is a number");
    }
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput
          placeholder = "Enter Text"
          style = {styles.textInputStyle}
          onChangeText = {(inputValue) => {setInputValue(inputValue)}}
        />
        <Button 
          title = "Check Value is number or Not"
          onPress = {checkValueIsNumberOrNot}
        />
      </View>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    marginTop:60
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    margin: 12,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default App;