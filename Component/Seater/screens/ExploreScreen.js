import { Dimensions, StyleSheet, Text, View,StatusBar} from 'react-native';
import React ,{Component} from 'react';
import {Platform} from 'react-native';
import { Constants } from 'react-native-unimodules';

import Icon from 'react-native-vector-icons/Ionicons';

class ExploreScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={[{
                color:'#000', fontSize:30,  fontWeight: 'bold'
            }]}>30</Text>
                    <div>
                        {[...Array(5)].map(star=>{
                            return<Icon name="star" size={20} color={'gold'}/>
                        })}
                    </div>
                
                <Text style={[styles.title, {
                color:'#000'
            }]}>5-Star Services</Text>
                    
                </View>


                <View style={styles.footer}>

                    
                    <Text> footer </Text>
                </View>

            </View>
            
        )
    }
}


export default ExploreScreen;
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
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 150,
        paddingHorizontal: 30
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
});
