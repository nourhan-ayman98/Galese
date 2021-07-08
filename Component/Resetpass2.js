import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

class ResetPass2 extends Component {
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
        data5:{
            confirm_secureTextEntry: true,
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
           
            return true;
        }
        else {
            return false;
        }
    }
    render() {
        
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                <View style={styles.footer}>
                <Text style={[styles.text_footer, { marginTop: 35 }]}> Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor="#D3D3D3"
                                secureTextEntry={this.state.data4.secureTextEntry? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val)=>this.handlePassChange(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry}>
                                <Feather
                                    name="eye-off"
                                    color="#1E90FF"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={[styles.text_footer, { marginTop: 35 }]}> Confirm Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="#D3D3D3"
                                secureTextEntry={this.state.data5.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val)=>this.handlePassChange_Confirm(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry_confirm}>
                                <Feather
                                    name="eye-off"
                                    color="#1E90FF"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.button}>
                        {this.check_password(this.state.data2.password,this.state.data3.confirm_password) ? 
                            <TouchableOpacity
                                onPress={() => navigate("Congratulations")}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>Sign In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                             :null}
                        </View>
                </View>
            </ImageBackground>
        );
    }

}

export default ResetPass2;
const styles = StyleSheet.create({
    text_header: {
        fontWeight: 'bold',
        fontSize: 25
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_footer: {
        fontSize: 18,
        marginTop:30,
    },
    button: {

        alignItems: "center",
        marginTop: 30,
        flex: 1,
        display: 'flex',

    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        paddingBottom: 5
    },
    signIn: {
        width: 160,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    header: {
        paddingHorizontal: 30,
        paddingBottom: 60
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: "center",

    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
    },
});