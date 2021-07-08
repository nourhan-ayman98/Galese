import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookmarkScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Save and Bookmark Your Important things </Text>
        <Button
          title="BookMark"
          color="#87CEFA"
          onPress={() => navigation.navigate('BookmarkScreen')}
        />
      </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});