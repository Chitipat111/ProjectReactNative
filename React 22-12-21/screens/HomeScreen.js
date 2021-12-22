import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import { WebView } from 'react-native-webview'

const HomeScreen = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }

});