import React from 'react';
import { View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

import CustomSidebarMenu from './pages/CustomSidebarMenu'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () =>{
    props.navigationProps.toggleDrawer();
  }
  return (
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Image source={require('./assets/menu_icon_white.png')} style={{width:25,height:25,marginLeft:5}} />
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
      <Drawer.Navigator screenOptions={{headerShown: false}}
        drawerContent = {(props) => <CustomSidebarMenu {...props}/>}
      >
        <Drawer.Screen name ="FirstPage" component={firstScreenStack} />
        <Drawer.Screen name ="SecondPage" component={secondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;

//Part2
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }
//             return <Ionicons name={iconName} color={color} />;
//           },
//           // tabBarActiveTintColor: '#32C6E6',
//           // tabBarInactiveTintColor: 'gray',
//         })}
//         tabBarOptions = {{
//           activeTintColor: '#32C6E6',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
