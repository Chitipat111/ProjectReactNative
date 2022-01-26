import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initiaRouteName='FirstPage'
      screenOptions={{
        headerStyle:{backgroundColor:'#32C6E6'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'}
      }}
      >
        <Stack.Screen name='FirstPage' component={FirstPage} option={{title:'Fist Page'}}/>
        <Stack.Screen name='SecondPage' component={SecondPage} option={{title:'Second Page'}}/>
        <Stack.Screen name='ThirdPage' component={ThirdPage} option={{title:'Third Page'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;