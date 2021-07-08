import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class Congrats_signup extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                <View style={styles.footer}>

                    <Image
                        source={require('../Images/925-9251378_check-transparent-check-mark-circle.png')}
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 200 / 2
                        }} />
                    <Text style={styles.text_header}>Congratiolations </Text>
                    <Text style={styles.text_footer}>your account is created Successfully </Text>
                    <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => navigate("User Home")}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>Home</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                </View>
            </ImageBackground>
        );
    }

}

export default Congrats_signup;
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
    button: {

        alignItems: "center",
        marginTop: 30,
        flex: 1,
        display: 'flex',

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
});