import { Dimensions, StyleSheet, Text, View,StatusBar} from 'react-native';
import React ,{Component} from 'react';
import {Platform} from 'react-native';
import { Constants } from 'react-native-unimodules';



class Welcome_page extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text> Header </Text>
                </View>
                <View style={styles.footer}>
                    <Text> footer </Text>
                </View>
            </View>
        )
    }
}


export default Welcome_page;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    }
});
