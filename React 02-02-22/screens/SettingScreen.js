import React from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';

import {styles} from '../components/styles';

const SettingScreen = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, padding:15}}>
        <View style={styles.container}>

          <Text style={styles.textTopStyle}>Setting Screen</Text>
          <View>
            <Button
            title="Go to Home Tab"
            onPress={() => navigation.navigate('HomeScreen')}
            />
            <Button
            title="Open New Screen"
            onPress={() => navigation.navigate('')}
            /> 
            <Button
            title="Open Profile Screen"
            onPress={() => navigation.navigate('ProflieScreen')}
            /> 
          </View>
          <View style ={{bottom:10, position:"absolute"}}>
            <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
          </View>

        </View>        
      </View>
    </SafeAreaView>
  )
}

export default SettingScreen;