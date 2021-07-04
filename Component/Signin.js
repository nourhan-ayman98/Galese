import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import official_Store from '../ReduxStores/Store';
import { Delete_employee, Update_employee_Password } from '../Classes/Employee_class';
import { writeData } from '../Database/Data_base';
import write_data from '../Database/close';
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

    }
    updateSecureTextEntry = () => {
        this.setState({
            data3: {
                secureTextEntry: !this.state.data3.secureTextEntry
            }
        })
       
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.container}>
                    <StatusBar backgroundColor='#009387' barStyle="light-content" />
                    <View style={styles.header}>
                        <Text style={[styles.text_header, { marginTop: 35 }]}> Welcome! </Text>
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
                            <TouchableOpacity >
                                <LinearGradient
                                    colors={['#694fad', '#694fad']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Sign In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { 
                                   Delete_employee("Nour@ayman");
                                   //write_data();
                                   navigate("Registration choice")
                            }}
                                style={[styles.signIn,
                                {
                                    borderColor: '#694fad',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}>
                                <Text
                                    style={[styles.textSign, {
                                        color: '#694fad'
                                    }]}
                                >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </View>
        );
    }
}




export default Signin;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#694fad',
        flexDirection: 'column'
    },
    header: {


        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 60
    },
    footer: {

        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
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
        fontSize: 40
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
