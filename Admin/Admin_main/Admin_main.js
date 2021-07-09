import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Home from "../Admin_Screens/Admin_home";
import Chat from "../Admin_Screens/Admin_chat";
import History from "../Admin_Screens/Admin_History";
import Find from "../Admin_Screens/Admin_find";
import UsersInfo from "../Admin_Screens/UsersInfo";
import ExploreScreen from "../Admin_Screens/ExploreScreen";
import Requests from "../Admin_Screens/Admin_requests";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const RequestStack = createStackNavigator();
const FindStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#1e20ff",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Admin_main = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          
          bottom: 0,
          left: 0,
          right: 20,
          elevation: 0,
          backgroundColor: "#1E90FF",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor: "#1E90FF",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../Admin_icons/Home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffff" : "#1e20ff",
                }}
              />
              <Text
                style={{ color: focused ? "#ffff" : "#1e20ff", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarColor: "#1E90FF",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../Admin_icons/search.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffff" : "#1e20ff",
                }}
              />
              <Text
                style={{ color: focused ? "#ffff" : "#1e20ff", fontSize: 12 }}
              >
                Find
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Requests"
        component={RequestScreen}
        options={{
          tabBarColor: "#1E90FF",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../Admin_icons/plus.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarColor: "#1E90FF",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../Admin_icons/chat.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffff" : "#1e20ff",
                }}
              />
              <Text
                style={{ color: focused ? "#ffff" : "#1e20ff", fontSize: 12 }}
              >
                Support
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tracking"
        component={HistoryScreen}
        options={{
          tabBarColor: "#1E90FF",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../Admin_icons/History.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffff" : "#1e20ff",
                }}
              />
              <Text
                style={{ color: focused ? "#ffff" : "#1e20ff", fontSize: 12 }}
              >
                Tracking
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "##1E90FF",
    textShadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Admin_main;

const HomeScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1E90FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E90FF"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ChatScreen = ({ navigation }) => (
  <ChatStack.Navigator screenOptions={{
    headerStyle: {
    backgroundColor: '#1E90FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold'
    }
}}>
    <ChatStack.Screen name="Chats Explore" component={ExploreScreen} options={{
   
    headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#1E90FF" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }} />

     <ChatStack.Screen 
    name="ChatScreen"
    component={Chat}
    options={({route}) => ({
      title: route.params.title,
      headerBackTitleVisible: false,
      headerTitle: false,
      headerTransparent: true,

      headerTintColor: '#fff'
    })}
  />
</ChatStack.Navigator>
);
const HistoryScreen = ({ navigation }) => (
  <HistoryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1E90FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HistoryStack.Screen
      name="Tracking"
      component={History}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E90FF"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HistoryStack.Navigator>
);

const RequestScreen = ({ navigation }) => (
  <RequestStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1E90FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <RequestStack.Screen
      name="Requests"
      component={Requests}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E90FF"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </RequestStack.Navigator>
);

const FindScreen = ({ navigation }) => (
  <FindStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1E90FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <FindStack.Screen
      name="Find"
      component={Find}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1E90FF"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </FindStack.Navigator>
);
