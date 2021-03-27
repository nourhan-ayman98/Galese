import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationScreen = ({navigation}) => {
    
        return (
  
            <View style={styles.container}>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Find your Notifications</Text>
        
              <Button
        
                title=" Notification"
                color="#8E44AD"
                onPress={() => navigation.navigate('NotificationScreen')}
        
        
        
             
              />
      </View>
    );
};



export default NotificationScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
