import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Our Team is Responsible for helping you</Text>
        <Button
          title="Support Hotline "
          color="#8E44AD"
          onPress={() => navigation.navigate('SupportScreen')}
        />
      </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});