import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import { WebView } from 'react-native-webview'

import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return(
    <View style = {styles.container}>
    <Ionicons name='home' size={30} color='#32C6E6'></Ionicons>
      <Text>หน้าหลัก</Text>
      <Button title='Go to About' 
      onPress={()=>navigation.navigate('About',{email : 'Chitipat_st@tni.ac.th'})}
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