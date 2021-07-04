import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Settings and Privacy are our duty</Text>
        
        <Button
  
          title=" Settings"
          color="#694fad"
          onPress={() => navigation.navigate('SettingsScreen')}
  
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});