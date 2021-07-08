import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ImageBackground, StatusBar, Alert } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import official_Store from '../ReduxStores/Store';
import { Delete_employee, Update_employee_Password } from '../Classes/Employee_class';
import { writeData } from '../Database/Data_base';
import write_data from '../Database/close';
import Sign_in_user from '../Functions/Sign_in_user';
import Siginin_user from '../Functions/Sign_in_user';
class Signin extends Component {
    state = {
        data: {
            email: '',
            password: '',
        },
        data2: {
            check_textInputChange: false,
        },
        data3: {
            secureTextEntry: true,
        }
    }
    textInputChange = (val) => {
        if (val.trim().length >= 4) {
            this.setState({
                data: {
                    email: val,
                    check_textInputChange: true,
                }
            });
        } else {
            this.setState({
                data: {
                    email: val,
                    check_textInputChange: false,
                }
            });
        }
    }
    handlePassChange = (val) => {
        this.setState({
            data2: {
                password: val
            }

        })
        this.state.data.password=val;

    }

    updateSecureTextEntry = () => {
        this.setState({
            data3: {
                secureTextEntry: !this.state.data3.secureTextEntry
            }
        })

    }
    render() {
        const createTwoButtonAlert = () =>
            Alert.alert(
                "Invalid Email and Password",
                "Please Renter the Password and Email",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.container}>
                    <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                        <StatusBar backgroundColor='#009387' barStyle="light-content" />
                        <View style={styles.header}>
                            <Text style={[styles.text_header, { marginTop: 35 }]}> Welcome in Galese </Text>
                        </View>
                        <Animated.View animation="fadeInUpBig" style={styles.footer}>
                            <Text style={styles.text_footer}> Email  </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Email"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(val) => this.textInputChange(val)}
                                />
                                {this.state.data.check_textInputChange ?
                                    <Animated.View animation="bounceIn">

                                        <Feather
                                            name="check-circle"
                                            color="#694fad"
                                            size={20}
                                        />
                                    </Animated.View>
                                    : null}
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 35 }]}> Password </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="lock"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Password"
                                    secureTextEntry={this.state.data3.secureTextEntry ? true : false}
                                    onChangeText={(val)=>this.handlePassChange(val)}
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                />
                                <TouchableOpacity
                                    onPress={this.updateSecureTextEntry}>
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={styles.button}>

                                <TouchableOpacity onPress={() => {
                                    const state = Siginin_user(this.state.data.email, Number(this.state.data.password.valueOf()));
                                    //navigate("Seater Home");
                                    if(state==false)
                                    {
                                        createTwoButtonAlert();
                                    }
                                    else if (state.Kind.valueOf() === 1) {
                                        navigate("User Home"); //Client
                                    }
                                    else if (state.Kind.valueOf() === 0) {
                                        console.log(state.kind);
                                        navigate("User Home"); //Admin
                                    }
                                    else if(state.Kind.valueOf()===3)
                                    {
                                        console.log(state.Kind);
                                        navigate("Seater Home"); //Nurse
                                    }
                                    else if(state.Kind.valueOf()===2)   
                                    {
                                        navigate("Seater Home"); //Sitter
                                    }
                                }}>
                                    <LinearGradient
                                        colors={['#87CEFA', '#1E90FF']}
                                        style={styles.signIn}>
                                        <Text style={styles.textSign}>Sign In</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {


                                        navigate("Registration User")

                                    }}
                                    style={[styles.signIn,
                                    {
                                        borderColor: '#87CEFA',
                                        borderWidth: 1,
                                        marginTop: 15
                                    }]}>
                                    <Text
                                        style={[styles.textSign, {
                                            color: '#87CEFA'
                                        }]}
                                    >Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </ImageBackground>
                </View>

            </View>
        );
    }
}




export default Signin;

const styles = StyleSheet.create({
    container: {

        flexDirection: 'column'
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 300
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    footer: {

        display: 'flex',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: "#fff"
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 60
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

    button: {

        alignItems: 'center',
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
        fontWeight: 'bold',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
});