/*import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer_main from "../Gp_user/Admin/Drawer_main/Drawer_main";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer_main />
    </NavigationContainer>
  );
}*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Component/Welcome';



export default function App() {
 
  return ( 
    <Welcome />
  );
}
