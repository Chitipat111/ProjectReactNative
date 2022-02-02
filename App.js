import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen';
import ProflieScreen from './screens/ProflieScreen';

// Part1 + Part2

const Stack = createNativeStackNavigator();


function firstScreenStack({navigation}){
  return(
    <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{
          headerStyle:{backgroundColor:'#32C6E6'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'},
        }}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title:'Home Page'}} />
    </Stack.Navigator>
  )
}

function secondScreenStack({navigation}){
  return(
    <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{
          headerStyle:{backgroundColor:'#32C6E6'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'},
        }}
    >
        <Stack.Screen name='SettingScreen' component={SettingScreen} options={{title:'Setting Page'}} />
        <Stack.Screen name='ProflieScreen' component={ProflieScreen} options={{title:'Proflie Page'}} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => 
        ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? <Image source={require('./assets/logo1.png')} style={{width: 25, height: 25}}/>
                : <Image source={require('./assets/logo2.png')} style={{width: 25, height: 25}}/>
            } 
            else if (route.name === 'SettingScreen') {
              iconName = focused 
                ? <Image source={require('./assets/logo1.png')} style={{width: 25, height: 25}}/>
                : <Image source={require('./assets/logo3.png')} style={{width: 25, height: 25}}/>
            }
            return iconName;
          }
        })      
      }
        tabBarOptions = {{
          activeTintColor: '#32C6E6',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name ="HomeScreen" component={firstScreenStack} />
        <Tab.Screen name ="SettingScreen" component={secondScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
