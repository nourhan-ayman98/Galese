import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



class ResetPass extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={[styles.text_header, { marginTop: 35 }]}> Forgot Password? </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text_footer}> Email  </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => navigate("Change Password")} >
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Reset Password</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default ResetPass;
const { height } = Dimensions.get("screen");
const width = Dimensions.get("screen").width
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
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

    },
    signIn: {
        width: 800,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    button: {

        alignItems: "center",
        marginTop: 30,
        flex: 1,
        display: 'flex',

    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 18
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
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
});