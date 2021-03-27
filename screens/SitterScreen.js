import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const SitterScreen = () => {

    return (
  
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}> Here you can find a great specilized staff of Sitters </Text>
  
      </View>
    )
  
  }
  export default SitterScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    //  backgroundColor: '#AAB7B8 '
    },
  });