import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

const AboutScreen = () => {
  return(
    <View style = {styles.container}>
      <Text>เกี่ยวกับเรา</Text>
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