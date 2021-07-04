import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { View, Text, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import NurseScreen from './NurseScreen';
import SitterScreen from './SitterScreen';
import ExploreScreen from './ExploreScreen';
import UserChatScreen from './UserChatScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';



const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NurseStack = createStackNavigator();
const SitterStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();




const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: "#694fad",
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={NotificationScreen}
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor: "#694fad",
                tabBarIcon: ({ color }) => (
                    <Icon name="notifications-outline" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: "#694fad",
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
       
         <Tab.Screen
        name="Chats"
        component={ExploreStackk}
        options={{
          tabBarLabel: 'Chats',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
         
            <Icon name="chatbubble-outline" color={color} size={26}/>
          ),
        }}
      />

    </Tab.Navigator>



);

export default MainTabScreen;

const ExploreStackk = ({navigation}) => (
    <ExploreStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Chat Screen" component={ExploreScreen} options={{
           
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
  
             <ExploreStack.Screen 
            name="UChatScreen"
            component={UserChatScreen}
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false,
              headerTitle: false,
              headerTransparent: true,
    
              headerTintColor: '#fff'
            })}
          />
    </ExploreStack.Navigator>
    );

const HomeStackScreen = ({ navigation }) => (

    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#694fad",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{

            title: "Home",
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => { navigation.openDrawer() }} ></Icon.Button>
            )
        }} />

        <HomeStack.Screen name="Nursescreen" component={NurseScreen} options={{

            title: "Nurse",
            
        }} />

        <HomeStack.Screen name="SitterScreen" component={SitterScreen} options={{

            title: "Sitter ",
           
        }} />

    </HomeStack.Navigator>



);






