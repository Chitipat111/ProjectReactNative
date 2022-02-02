import { View, Text, Image } from 'react-native';
import React from 'react';

const Logo = () => {
  return(
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../assets/1260667.png')} style={{width:25,height:25}} />
    </View>
  )
}

export default Logo;