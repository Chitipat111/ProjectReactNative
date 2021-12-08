import React from 'react'
import { 
  Text, 
  View , 
  StyleSheet,
  SafeAreaView,
  Button,
  Alert, 
} from 'react-native';

const ButtonExample = () =>{

  const onPressAlert = () => {
    alert('Hello');
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text>Button Example</Text>
        <Button
          OnPress = {onPressAlert}
          title = "Click Me"
          color = "#1AEAED"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default ButtonExample;