import React from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Logo from './Logo'
import {styles} from '../components/styles';

const FirstPage = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Logo/>,
      headerRight: () => (
        <Button onPress={() => alert('ลงทะเบียน')} title="ลงทะเบียน" />
        // <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        //   <Item title="ลงทะเบียน" iconName="person-add" onPress={() => alert('ลงทะเบียน')} />
        // </HeaderButtons>
      ),
    });
  }, [navigation]);

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, padding:15}}>
        <View style={styles.container}>
          <Ionicons name='home' size={50} color='#E64986'/>
          <Text style={styles.textTopStyle}>This is the First Page</Text>
          <View>
            <Button
            title="Go to Second Page"
            onPress={() => navigation.navigate('SecondPage')}
            />
            <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('ThirdPage')}
            /> 
          </View>
          <View style ={{bottom:10, position:"absolute"}}>
            <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
          </View>

        </View>        
      </View>
    </SafeAreaView>
  )
}

export default FirstPage;