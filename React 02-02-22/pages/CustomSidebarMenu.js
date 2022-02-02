import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  StyleSheet,
  Image,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Image source={require('../assets/1260667.png')} style={styles.sideMenuProfileIcon} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Visit Us" onPress={() => Linking.openURL('https://it.tni.ac.th')} />
        <View style={styles.customItem}>
          <Text onPress={() => Linking.openURL('https://tni.ac.th')}>
            RATE US
          </Text>
          <Image source={require('../assets/star.png')} style={styles.iconStyle} />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});