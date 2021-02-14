import { StyleSheet, Text, View } from 'react-native';
import React ,{Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome_page from './Welcome_page'

const Stack =createStackNavigator();



class welcome extends Component {
    render(){
        return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName="Welcome">
                 <Stack.Screen name="Welcome" component={Welcome_page}/>
             </Stack.Navigator>
         </NavigationContainer>
        );
    }
}




export default welcome;

