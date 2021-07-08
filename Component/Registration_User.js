import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ImageBackground, StatusBar, Alert, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton, Title } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Siginup_user from '../Functions/Sigin_Up_user';

class SignUP extends Component {
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
        },
        checked:"Male"

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
    setChecked(val){
        this.setState({
            checked:val
        });
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
     state_User = {
        National_ID: "",
        Email: "",
        Password: "",
        F_Name: "",
        L_Name: "",
        Full_Name: "",
        Gender: "",
        Birthdate: "",
        User_Name: "",
        Country: ""
    }
     state_loc = {
        Country: "",
        Area: "",
        Longitude: "",
        Latitude: ""
    }
     state_loc_address = {
        Floor_No: "",
        Building_No: "",
        Street_No: "",
        Street_Name: "",
        Apartment_No: "",
    }
     state_phone = {
        Phone: "",
    }
    render() {
        const state_User = {
            National_ID:"",
            User_ID:"",
            U_ID:"",
            Reservation_ID:"",
            Email:"",
            Password:"",
            F_Name:"",
            L_Name:"",
            Full_Name:"",
            Gender:"",
            Country:"",
            Birthdate:"",
            User_Name:"",
            Nurse_ID:"",
            Admin_ID:"",
            Sitter_ID:"",
            Phone:""
         }
        const { navigate } = this.props.navigation;
        
        return (
    
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                        <View style={styles.header}>
                            <Text style={[styles.text_header, { marginTop: 35 }]}> Welcome in جليسي! </Text>
                        </View>
                        <View style={styles.footer}>
    
                            <Text style={styles.text_footer}> First Name </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your First Name"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_User.F_Name = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Second Name </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Second Name"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_User.L_Name = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Full Name </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Full Name"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_User.Full_Name = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Gender</Text>
                            <View style={styles.action}>
                                <MaterialCommunityIcons
                                    name="gender-male-female"
                                    color="#fff"
                                    size={20}
                                />
                                <View>
                                    <View style={styles.rowContainer}>
                                        <RadioButton
                                            value="Male"
                                            status={this.state.checked === 'Male' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setChecked('Male')
                                                this.state_User.Gender = "Male"
                                                
                                            }}
                                        />
                                        <Title style={{
    
                                            fontSize: 18,
                                            marginLeft: 20,
                                            color: "#fff"
                                        }}>Male</Title>
                                    </View>
                                    <View style={styles.rowContainer}>
                                        <RadioButton
                                            value="Female"
                                            status={this.state.checked === 'Female' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setChecked('Female')
                                                this.state_User.Gender = "Female"
                                            }}
                                        />
                                        <Title style={{
                                            fontSize: 18,
                                            marginLeft: 20,
                                            color: "#fff"
                                        }}>Female</Title>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.text_footer}> Birth Date  </Text>
                            <View style={styles.action}>
                                <AntDesign
                                    name="calendar"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Birth Date"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_User.Birthdate = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> National ID </Text>
                            <View style={styles.action}>
                                <AntDesign
                                    name="idcard"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your National ID"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_User.National_ID = value}
    
                                />
                            </View>
    
                            <Text style={styles.text_footer_2}> Address </Text>
                            <Text style={styles.text_footer}> Country </Text>
                            <View style={styles.action}>
                                <AntDesign
                                    name="flag"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Country"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => {
                                        this.state_User.Country = value;
                                        this.state_loc.Country = value
                                    }}
    
                                />
                            </View>
                            <Text style={styles.text_footer}>Area </Text>
                            <View style={styles.action}>
                                <MaterialIcons
                                    name="place"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Area"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_loc.Area = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Street Number </Text>
                            <View style={styles.action}>
                                <FontAwesome5
                                    name="street-view"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Street Number"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_loc_address.Street_No = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Street Name </Text>
                            <View style={styles.action}>
                                <FontAwesome5
                                    name="street-view"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Street Name"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_loc_address.Street_Name = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Building Number </Text>
                            <View style={styles.action}>
                                <AntDesign
                                    name="home"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Building Number"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_loc_address.Building_No = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Floor Number </Text>
                            <View style={styles.action}>
                                <MaterialCommunityIcons
                                    name="home-floor-1"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Floor Number"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_loc_address.Floor_No = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Apartment Number </Text>
                            <View style={styles.action}>
                                <MaterialCommunityIcons
                                    name="door"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Apartment Number"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_loc_address.Apartment_No = value}
    
                                />
                            </View>
                            <Text style={styles.text_footer}> Phone  </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="phone-square"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Phone"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_phone.Phone = value}
    
                                />
                            </View>
    
                            <Text style={styles.text_footer}> Email  </Text>
                            <View style={styles.action}>
                                <Fontisto
                                    name="email"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Email"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(val) => {
                                        this.textInputChange(val)
                                        this.state_User.Email = val;
                                    }}
                                />
                                {this.state.data.check_textInputChange ?
                                    <Animated.View animation="bounceIn">
    
                                        <Feather
                                            name="check-circle"
                                            color="#1E90FF"
                                            size={20}
                                        />
                                    </Animated.View>
                                    : null}
    
                            </View>
                            <Text style={styles.text_footer}> User Name </Text>
                            <View style={styles.action}>
                                <AntDesign
                                    name="user"
                                    color="#fff"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your User Name"
                                    placeholderTextColor="#D3D3D3"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => this.state_User.User_Name = value}
    
                                />
                            </View>
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
                                    secureTextEntry={this.state.data4.secureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(val) => this.handlePassChange(val)}
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
                                    onChangeText={(val) => this.handlePassChange_Confirm(val)}
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
                                {this.check_password(this.state.data2.password, this.state.data3.confirm_password) ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.state_User.Password = this.state.data2.password;
                                            Siginup_user(this.state_User,this.state_loc,this.state_loc_address,this.state_phone);
                                            navigate("signup_congrats")
                                         }}>
                                        <LinearGradient
                                            colors={['#87CEFA', '#1E90FF']}
                                            style={styles.signIn}
                                        >
                                            <Text style={styles.textSign}>Sign In</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    : null}
                            </View>
    
                        </View>
    
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }
}


export default SignUP;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
    },
    footer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        marginTop:30,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#000',
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
    rowContainer: {
        flexDirection: 'row',
    },
    text_footer_2: {
        color: '#fff',
        fontSize: 19,
        marginTop:30,
    },
});
