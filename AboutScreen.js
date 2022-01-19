import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import { WebView } from 'react-native-webview'

const AboutScreen = ({route}) => {

  const {email} = route.params;

  return(
    <View style = {styles.container}>
      <Text>เกี่ยวกับเรา</Text>
      <Text>Email: {email}</Text>
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

