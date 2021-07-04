import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import { Add_employee, get_employee } from '../Classes/Employee_class';
import official_Store from '../ReduxStores/Store';

class RegistrationUser extends Component {
    state = {
        data: {
            email: '',
            check_textInputChange: false,
        },
        data2: {
            password: '',
        },
        data3: {
            confirm_password: '',
        },
        data4: {
            secureTextEntry: true,
        },
        data5: {
            confirm_secureTextEntry: true,
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
                password: val,
            }

        })
    }
    handlePassChange_Confirm = (val) => {
        this.setState({
            data3: {
                confirm_password: val,
            },

        })
    }
    updateSecureTextEntry = () => {
        this.setState({
            data4: {
                secureTextEntry: !this.state.data4.secureTextEntry
            }
        })
    }
    updateSecureTextEntry_confirm = () => {
        this.setState({
            data5: {
                confirm_secureTextEntry: !this.state.data5.confirm_secureTextEntry,
            }
        })
    }
    check_password(val1, val) {
        if (val1 === val) {
            this.object.password = this.state.data2.password;
            return true;
        }
        else {
            return false;
        }
    }
    object = {
        id: 1,
        name: '',
        email: '',
        password: ''
    }
    /*on_click_signup=()=>
    {
       k.getUserData();
       k.addUser(this.object);

    }*/
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.container}>
                    <StatusBar backgroundColor='#009387' barStyle="light-content" />
                    <View style={styles.header}>
                        <Text style={[styles.text_header, { marginTop: 35 }]}> Welcome User </Text>
                    </View>
                    <Animated.View animation="fadeInUpBig" style={styles.footer}>
                        <Text style={styles.text_footer}> Name  </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Name"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => { this.object.name = val }}
                            />
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 35 }]}> Email  </Text>
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
                                onChangeText={(val) => {
                                    this.textInputChange(val)
                                    this.object.email = val;
                                }}
                            />

                            {this.state.data.check_textInputChange ?
                                <Animated.View animation="bounceIn">

                                    <Feather
                                        name="check-circle"
                                        color="#800080"
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
                                secureTextEntry={this.state.data4.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.handlePassChange(val)}
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
                        <Text style={[styles.text_footer, { marginTop: 35 }]}> Confirm Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                secureTextEntry={this.state.data5.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.handlePassChange_Confirm(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry_confirm}>
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.button}>
                            {this.check_password(this.state.data2.password, this.state.data3.confirm_password) ?

                                <TouchableOpacity

                                    style={[styles.signIn,
                                    {
                                        borderColor: '#800080',
                                        borderWidth: 1,
                                        marginTop: 15
                                    }]}
                                    onPress={() => {
                                        //this.on_click_signup();
                                        Add_employee("Mohamed@5050", "555");
                                        console.log(official_Store.getState().Employee_reducer)
                                        navigate("User Home ");
                                    }}>
                                    <Text
                                        style={[styles.textSign, {
                                            color: '#800080'
                                        }]}
                                    >Sign Up</Text>

                                </TouchableOpacity>

                                : null}

                        </View>

                    </Animated.View>
                </View>
            </View>
        );
    }
}


export default RegistrationUser;
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#800080',
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