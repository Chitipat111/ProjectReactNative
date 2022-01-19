import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import { WebView } from 'react-native-webview'

import { Ionicons } from '@expo/vector-icons';

import {
	HeaderButtons,
	HeaderButton,
	Item,
	HiddenItem,
	OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
	<HeaderButton IconComponent={Ionicons} iconSize={30} color='white' {...props} />
);

const HomeScreen = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // <Button onPress={() => alert('เมนู')} title="เมนู" />
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="เมนู" iconName="menu" onPress={() => alert('เมนู')} />
        </HeaderButtons>
      ),  
      headerRight: () => (
        // <Button onPress={() => alert('ลงทะเบียน')} title="ลงทะเบียน" />
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="ลงทะเบียน" iconName="person-add" onPress={() => alert('ลงทะเบียน')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);


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