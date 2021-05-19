import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import NurseScreen from './NurseScreen';
import SitterScreen from './SitterScreen';


const HomeScreen = ({ navigation }) => {

    return (
  
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Welcome Back !</Text>
  
        <Button
  
          title="Select a Nurse"
          color="#8E44AD"
          onPress={() => navigation.navigate("Nursescreen")}
        
  
        />
  
        <Button
          title="Select a Sitter"
          color="#8E44AD"
          onPress={() => navigation.navigate("SitterScreen")}
        />
  
      </View>
    )
  
  }

  
  export default HomeScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    // backgroundColor: '#AAB7B8 '
    },
  });