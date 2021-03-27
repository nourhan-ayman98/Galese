import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
    
        return (
  
            <View style={styles.container}>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Here You Can Edit your Profile</Text>
        
              <Button
        
                title=" Edit Your Profile"
                color="#8E44AD"
                onPress={() => navigation.navigate('ProfileScreen')}
        
        
        
             
              />
      </View>
    );
};



export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
