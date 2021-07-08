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
import ElderCare from '../screens_aya/ElderCare';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';
import newPatientRegistration from './newPatientRegistration';
import Payment from './Payment';
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NurseStack = createStackNavigator();
const SitterStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const newPatientRegistrationStack = createStackNavigator();


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
                tabBarColor: '#1E90FF',
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
                tabBarColor:'#1E90FF',
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
                tabBarColor: '#1E90FF',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        {/* <Tab.Screen
        name="Requests"
        component={RequestScreen}
        options={{
          tabBarLabel: 'Requests',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
         
            <Icon name="people-outline" color={color} size={26}/>
          ),
        }}
      /> */}
         <Tab.Screen
        name="Chats"
        component={ExploreStackk}
        options={{
          tabBarLabel: 'Chats',
          tabBarColor: '#1E90FF',
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
            backgroundColor: '#1E90FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Chat Screen" component={ExploreScreen} options={{
           
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
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
            backgroundColor: "#1E90FF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{

            title: "Home",
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => { navigation.openDrawer() }} ></Icon.Button>
            )
        }} />

       
          <HomeStack.Screen 
            name="newRegistration"
            component={newPatientRegistration}
            options={({route}) => ({
              //title: route.params.title,
              headerBackTitleVisible: false,
              headerTitle: false,
              headerTransparent: true,
    
              headerTintColor: '#fff'
            })}
          />
    </HomeStack.Navigator>
    
    );

const newPatientRegistrationStackScreen = ({ navigation }) => (

    <newPatientRegistrationStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#1E90FF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
       
       
          <newPatientRegistrationStack.Screen 
            name="ElderCare"
            component={ElderCare}
            options={({route}) => ({
              //title: route.params.title,
              headerBackTitleVisible: false,
              headerTitle: false,
              headerTransparent: true,
    
              headerTintColor: '#fff'
            })}
          />
    </newPatientRegistrationStack.Navigator>


);






