import { Dimensions, StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MatrialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animated from 'react-native-animatable';
import load_data from '../Database/Load';
import official_Store from '../ReduxStores/Store';



class Welcome_page extends Component {


    render() {
        const { navigate } = this.props.navigation;
        const navigation_ = () => {

            navigate("SignScreen");
        }
        const get_read = () => {
            load_data("/Employee/","EMPLOYEELOAD");
            load_data("/Admin/","ADMINLOAD");
            load_data("/CustomerService/","CUSTOMER_SERVICESLOAD");
            load_data("/ManageRate/","MANAGE_RATELOAD");
            load_data("/Rate/","RATELOAD");

            load_data("/Comments/","COMMENTSLOAD");
            load_data("/User_Rate/","USER_RATELOAD");
            load_data("/Location/","LOCATIONLOAD");
            load_data("/Loc_Address/","LOC_ADRESSLOAD");
            load_data("/Track_Location/","TRACK_LOCATIONLOAD");
            
            load_data("/User/","USERLOAD");
            load_data("/U_Address/","UADRESS_LOAD");
            load_data("/U_Phone/","UPHONE_LOAD");

            load_data("/Patient/","PATIENT_LOAD");
            load_data("/Health Status/","HEALTH_STATUS_LOAD");

            load_data("/Health Status/","HEALTH_STATUS_LOAD");
            load_data("/Nurse/","NURSE_LOAD");
            load_data("/Nurse_Certificates/","NURSE_CERTIFICATES_LOAD");
            load_data("/Hospital_Address/","HOSPITAL_ADRESS_LOAD");

            load_data("/Sitter/","SITTER_LOAD");
            load_data("/Sitter_Certificates/","SITTER_CERTIFICATES_LOAD");

            load_data("/Payment/","PAYMENT_LOAD");
            load_data("/CreditCard/","CREDIT_CARD_LOAD");
            load_data("/Fawry/","FAWRY_LOAD");
            load_data("/Payment_Method_User/","PAYMENT_METHOD_LOAD");
            load_data("/Track_Payment/","TRACK_PAYMENT_LOAD");
            
            console.log(official_Store.getState());
            
        }
        const functionCombined = () => {
           navigation_();
           get_read();
        }


        return (
            
            <View style={styles.container}>
                  <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                
                <View style={styles.header}>
                    <Animated.Image animation="bounceIn"
                        duraton="1500"
                        source={require('../Images/imageedit_1_7889191522.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    >

                    </Animated.Image>
                </View>
                <Animated.View style={styles.footer} animation="fadeInUpBig">


                    <Text style={styles.title}> Part of being a person is about helping others </Text>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={functionCombined}>
                            <LinearGradient
                                colors={['#87CEFA', '#1E90FF']}
                                style={styles.signIn}>
                                <Text style={styles.textSign}>Get Started</Text>
                                <MatrialIcon
                                    name="navigate-next"
                                    color="white"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </Animated.View>
                </ImageBackground>
            </View>

        )
    }
}


export default Welcome_page;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        display: 'flex',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor:"#fff"
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },


    button: {

        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 160,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
});
