import { Dimensions, StyleSheet, Text, View,StatusBar} from 'react-native';
import React ,{Component} from 'react';
import {Platform} from 'react-native';
import { Constants } from 'react-native-unimodules';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
  
    TouchableRipple,
    Switch
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.header}>
               <Avatar.Image 
                                source={
                                    require('../assets/WhatsApp Image 2020-12-07 at 11.08.10 PM.jpeg')
                                }
                                size={200}
                            />
        </View>
                <View style={styles.footer}>
                    <Text> footer </Text>
                </View>
            </View>
        )
    }
}


export default ProfileScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#694fad',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingVertical: 100,
        paddingHorizontal: 60
    },
    ProfilePic: {
        width: height_logo,
        height: height_logo
    },
});
