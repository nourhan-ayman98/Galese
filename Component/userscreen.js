//AYAAAAAAA//****************************************************************** */


import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { View, Text, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTabScreen from '../screens_aya/MainTabScreen';
import ProfileScreen from '../screens_aya/ProfileScreen';
import SupportScreen from '../screens_aya/SupportScreen';
import SettingsScreen from '../screens_aya/SettingsScreen';
import BookmarkScreen from '../screens_aya/BookmarkScreen';
import { DrawerContent } from '../screens_aya/DrawerContent';




const Drawer = createDrawerNavigator();
class App_user extends Component {
    render() {
        return (
          
                <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
                    <Drawer.Screen name="Home" component={MainTabScreen} />
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                    <Drawer.Screen name="Support" component={SupportScreen} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} />
                    <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
                </Drawer.Navigator>
            
        )
    }
}
export default App_user;
