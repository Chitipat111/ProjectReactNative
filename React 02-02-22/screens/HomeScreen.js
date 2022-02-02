import React from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';

import {styles} from '../components/styles';

const HomeScreen = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, padding:15}}>
        <View style={styles.container}>

          <Text style={styles.textTopStyle}>Home Screen</Text>
          <View>
            <Button
            title="Go to Setting Tab"
            onPress={() => navigation.navigate('SettingScreen')}
            />
            <Button
            title="Open New Screen"
            onPress={() => navigation.navigate('')}
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

export default HomeScreen;