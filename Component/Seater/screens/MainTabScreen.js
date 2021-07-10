import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import RootStackScreen from './RootStackScreen';
import CardItemDetails from './CardItemDetails';
import ChatsScreen from './ChatsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const RootStack = createStackNavigator();
const ChatsScreenStack = createStackNavigator();

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
          tabBarColor: '#1E90FF',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#1E90FF',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1E90FF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
     
       <Tab.Screen
        name="Requests"
        component={RootStacksScreen}
        options={{
          tabBarLabel: 'Requests',
          tabBarColor: '#1E90FF',
          tabBarIcon: ({ color }) => (
         
            <Icon name="people-outline" color={color} size={26}/>
          ),
        }}
      />
       <Tab.Screen
        name="Chats"
        component={ChatsStackScreen}
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

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1E90FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        
</HomeStack.Navigator>
);


const ChatsStackScreen = ({navigation}) => (
  <ChatsScreenStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1E90FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ChatsScreenStack.Screen name="Chat Screen" component={ChatsScreen} options={{
         
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />

           <ChatsScreenStack.Screen 
          name="ChatScreen"
          component={ExploreScreen}
          options={({route}) => ({
            title: route.params.title,
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
  
            headerTintColor: '#fff'
          })}
        />
  </ChatsScreenStack.Navigator>
  );

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1E90FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Notifications" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />


</DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1E90FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
         
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </ProfileStack.Navigator>
  );
  
    const RootStacksScreen = ({navigation}) => (
      <RootStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#1E90FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <RootStack.Screen name="Requests" component={RootStackScreen} options={{
             
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
              
              <RootStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,

          headerTintColor: '#fff'
        })}
      />
       
      </RootStack.Navigator>
      );