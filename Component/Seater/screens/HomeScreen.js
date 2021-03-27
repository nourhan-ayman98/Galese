import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => 
{
    return(
        <view style={StyleSheet.container}>
            <text>Home Screen</text>
            <Button
            title= "Go Details Screen"
            onPress={()=> navigation.navigate("Details")}
            />
           

        </view>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'

    },
});