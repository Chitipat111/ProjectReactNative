import {} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import { NativeBaseProvider, Box } from "native-base";

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#32C6E6'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
        <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
    </Stack.Navigator>
  );
};

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#32C6E6'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
        <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'รายละเอียด'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContent={(props) => <MenuScreen{...props}/>}
      >
        <Drawer.Screen name='HomeStack' component ={HomeStack} options={{title: 'หน้าหลัก'}}/>
        <Drawer.Screen name='ProductStack' component ={ProductStack} options={{title: 'สินค้า'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;



