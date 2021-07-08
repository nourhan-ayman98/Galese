import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome_page from './Welcome_page';
import Signin from './Signin';
import RegistrationUser from './Registration_User';
import App_seater from './Seaterscreen';
import App_user from './userscreen';
import { Provider } from 'react-redux';
import official_Store from '../ReduxStores/Store';
import SignUP from './Registration_User';
import ElderCare from '../screens_aya/ElderCare';
import ChildCare from '../screens_aya/ChildCare';
import newPatientRegistration from '../screens_aya/newPatientRegistration';
import newRegistration from '../screens_aya/newRegistration';
import Payment from '../screens_aya/Payment';
import Congrats from '../screens_aya/Congrats';
import HomeScreen from '../screens_aya/HomeScreen';
import Congrats_signup from './Congrats_sigin_up';
import ResetPass from './ReasetPassword';
import Congrats_reset_pass from './Congrats_reset_pass';
import ResetPass2 from './Resetpass2';



const Stack = createStackNavigator();



class welcome extends Component {


    render() {
        return (
            <Provider store={official_Store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Welcome">

                    <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome_page} />
                    <Stack.Screen name="SignScreen" component={Signin} />
                    <Stack.Screen name="Registration User" component={SignUP} />
                        <Stack.Screen name="Seater Home" component={App_seater} />
                        <Stack.Screen name="Care Center" component={ElderCare} />
                        <Stack.Screen name="ChildCare " component={ChildCare} />
                        <Stack.Screen name="Reservation" component={newPatientRegistration} />
                        <Stack.Screen name="Schedule" component={newRegistration} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="Payment" component={Payment} />
                        <Stack.Screen name="Congrats" component={Congrats} />
                        <Stack.Screen name="User Home" component={App_user} />

                        
                        <Stack.Screen name="signup_congrats" options={{ headerShown: false }} component={Congrats_signup} />
                        <Stack.Screen name="Reset Password" component={ResetPass} />
                        <Stack.Screen name="Congratulations" options={{ headerShown: false }} component={Congrats_reset_pass} />
                        <Stack.Screen name="Change Password" component={ResetPass2} />
                    </Stack.Navigator>
                </NavigationContainer>

            </Provider>
        );

    }
}




export default welcome;

