import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstPage'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#32C6E6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="FirstPage" component={FirstScreen} option={{title:'First Page'}}/>
        <Stack.Screen name="SecondPage" component={SecondScreen} option={{title:'Second Page'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App