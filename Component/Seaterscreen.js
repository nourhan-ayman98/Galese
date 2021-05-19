//yasminn
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainTabScreen from './Seater/screens/MainTabScreen';
import { DrawerContent } from './Seater/screens/DrawerContent';
import { Component } from 'react';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();


class App_seater extends Component {
    render() {
        return (
               
                <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
                    <Drawer.Screen name="Home" component={MainTabScreen} />
                </Drawer.Navigator>
               
            
        );
    }
}
export default App_seater;