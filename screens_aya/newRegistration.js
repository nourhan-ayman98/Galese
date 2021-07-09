import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ImageBackground, StatusBar, Alert, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker'

class newRegistration extends Component {
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

    states = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
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

            return true;
        }
        else {
            return false;
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <ScrollView>
 <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                <View style={styles.header}>
                    <Text style={[styles.text_header, { marginTop: 35 }]}> Schedule  </Text>
                </View>
                <View style={styles.footer}>
                    {/* <Text style={styles.text_footer}> First Name  </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Insert your First Name..."
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                             
                            />
                        </View>
                        <Text style={styles.text_footer}> Last Name  </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Insert your Last Name..."
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                             
                            />
                        </View> */}
                    <Text style={styles.text_footer}> Address  </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="home"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert your Address.."
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
                    </View>

                    <Text style={styles.text_footer}> Email  </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert your Email.."
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
                    </View>



                    <Text style={styles.text_footer}> Phone Number  </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="phone"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert your Phone Number"
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
                    </View>
                    
                        <Text style={styles.text_footer}> Day you want  </Text>
                        <View style={styles.action}>
                            <Fontisto
                                name="calendar"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Insert date "
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.textInputChange(val)}
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


                        <Text style={styles.text_footer}> Time you want  </Text>
                        <View style={styles.action}>
                            <Fontisto
                                name="calendar"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Insert Time"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.textInputChange(val)}
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

                    <Text style={styles.text_footer}> Medical Issue Description  </Text>
                    <View style={styles.action}>
                        <Fontisto
                            name="prescription"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert your Address"
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
                    </View>
                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Type of Service needed </Text>
                    <View style={styles.action}>
                        <Picker
                            selectedValue={this.states.Artist}
                            // selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ Artist: itemValue })}
                        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Sitter" value="Sitter" />
                            <Picker.Item label="Nurse" value="Nurse" />

                        </Picker>

                    </View>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Type of Gender needed </Text>
                    <View style={styles.action}>
                        <Picker
                            selectedValue={this.states.Artist}
                            // selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ Artist: itemValue })}
                        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Not necessary" value="Not necessary" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />

                        </Picker>

                    </View>
                    <View style={styles.button}>
                        {this.check_password(this.state.data2.password, this.state.data3.confirm_password) ?
                            <TouchableOpacity
                                onPress={() => navigate("Care Center")}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>Save</Text>
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


export default newRegistration;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#800080',
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
        marginTop: 30,
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
        color: '#ffff',
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
});


