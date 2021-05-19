import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExploreScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Search and Investigate What you want </Text>

      <Button

        title=" Explore"
        color="#8E44AD"
        onPress={() => navigation.navigate("ExploreScreen")}


      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
