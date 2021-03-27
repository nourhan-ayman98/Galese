
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Component/Welcome';


export default function App() {
  return (
    
        <Welcome/>

  );
}
/*import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './Component/Seater/screens/HomeScreen';
import ExploreScreen from './Component/Seater/screens/ExploreScreen';
import ProfileScreen from './Component/Seater/screens/ProfileScreen';
import DetailsScreen from './Component/Seater/screens/DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './Component/Seater/screens/MainTabScreen';
import {DrawerContent} from './Component/Seater/screens/DrawerContent';
import SupportScreen from './Component/Seater/screens/SupportScreen';
import SettingsScreen from './Component/Seater/screens/SettingsScreen';
import BookmarkScreen from './Component/Seater/screens/BookmarkScreen';
import RootStackScreen from './Component/Seater/screens/RootStackScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();


const App =()=> {
  return (
   <NavigationContainer>
     <Drawer.Navigator drawerContent= {props => <DrawerContent{... props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
       
        </Drawer.Navigator>
      
        
      
   </NavigationContainer>
  );
}

export default App;
*/