import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import { WebView } from 'react-native-webview'

const AboutScreen = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text>เกี่ยวกับเรา</Text>
      <Button title='Go to about page again....' 
      onPress={()=>navigation.push('About')}     
      />
      <Button title='Go to Home' 
      onPress={()=>navigation.goBack()}
      />
      <Button title='Go to First Screen' 
      onPress={()=>navigation.popToTop()}
      />
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }

});