import { Dimensions, StyleSheet, Text, View,StatusBar} from 'react-native';
import React ,{Component} from 'react';
import {Platform} from 'react-native';
import { Constants } from 'react-native-unimodules';



class DetailsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                   
                </View>
                <View style={styles.footer}>
                   
                <Text style={[styles.title, {
                color:'#000'
            }]}>Notifications</Text>
                </View>
            </View>
        )
    }
}


export default DetailsScreen;
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
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingVertical: 250,
        paddingHorizontal: 80
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
});
