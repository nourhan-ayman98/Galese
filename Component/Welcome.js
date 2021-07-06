import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome_page from './Welcome_page';
import Signin from './Signin';
import RegistrationUser from './Registration_User';
import Registrationchoice from './Registration_choice';
import RegistrationSeater from './Registration_Seater';
import App_seater from './Seaterscreen';
import App_user from './userscreen';
import { Provider } from 'react-redux';
import official_Store from '../ReduxStores/Store';


const Stack = createStackNavigator();



class welcome extends Component {


    render() {
        return (
            <Provider store={official_Store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Welcome">
                        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome_page} />
                        <Stack.Screen name="SignScreen"options={{ headerShown: false }} component={Signin} />
                        <Stack.Screen name="Registration choice" component={Registrationchoice} />
                        <Stack.Screen name="Registration User" component={RegistrationUser} />
                        <Stack.Screen name="Registration Seater" component={RegistrationSeater} />
                        <Stack.Screen name="Seater Home" component={App_seater} />
                        <Stack.Screen name="User Home " component={App_user} />
                    </Stack.Navigator>
                </NavigationContainer>

            </Provider>
        );

    }
}




export default welcome;

