import React from 'react';
import { View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

// Part1 + Part2

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () =>{
    props.navigationProps.toggleDrawer();
  }
  return (
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Image source={require('./assets/1260667.png')} style={{width:25,height:25,marginLeft:5}} />
      </TouchableOpacity>
    </View>
  )
}

function firstScreenStack({navigation}){
  return(
    <Stack.Navigator initialRouteName='FirstPage'
        screenOptions={{
          headerStyle:{backgroundColor:'#32C6E6'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>
        }}
    >
        <Stack.Screen name='FirstPage' component={FirstPage} options={{title:'First Page'}} />
    </Stack.Navigator>
  )
}

function secondScreenStack({navigation}){
  return(
    <Stack.Navigator initialRouteName='FirstPage'
        screenOptions={{
          headerStyle:{backgroundColor:'#32C6E6'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>
        }}
    >
        <Stack.Screen name='SecondPage' component={SecondPage} options={{title:'Second Page'}} />
        <Stack.Screen name='ThirdPage' component={ThirdPage} options={{title:'Third Page'}} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>        
        <Drawer.Screen name ="FirstPage" component={firstScreenStack} />
        <Drawer.Screen name ="SecondPage" component={secondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;


//Part1

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initiaRouteName='FirstPage'
//       screenOptions={{
//         headerStyle:{backgroundColor:'#32C6E6'},
//         headerTintColor:'#fff',
//         headerTitleStyle:{fontWeight:'bold'}
//       }}
//       >
//         <Stack.Screen name='FirstPage' component={FirstPage} option={{title:'Fist Page'}}/>
//         <Stack.Screen name='SecondPage' component={SecondPage} option={{title:'Second Page'}}/>
//         <Stack.Screen name='ThirdPage' component={ThirdPage} option={{title:'Third Page'}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;

//Part2
// function HomeScreen({navigation}){
//   return(
//     <View style={{flex:1, alignItem:'center', justifyContent:'center'}}>
//       <Button title='Notifications' onPress={()=>navigation.navigate('Notifications')}></Button>
//     </View>
//   )
// }

// function NotificationScreen({navigation}){
//   return(
//     <View style={{flex:1, alignItem:'center', justifyContent:'center'}}>
//       <Button title='Back to Home' onPress={()=>navigation.goBack()}></Button>
//     </View>
//   )
// }

// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//         <Drawer.Screen name='Home' component={HomeScreen}/>
//         <Drawer.Screen name='Notifications' component={NotificationScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


