import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { RadioButton, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';



const Payment = ({navigation}) => {
    const [checked, setChecked] = React.useState('first');
    return (

        <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
            <View style={styles.top} >
                <View style={styles.rowContainer}>
                    <RadioButton
                        value="first"
                        color="#1E90FF"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Title style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginLeft: 20
                    }}>Cash</Title>
                </View>
            </View>
            <View style={styles.middle}>
                <View style={styles.rowContainer}>
                    <RadioButton
                        value="second"
                        color="#1E90FF"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Title style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginLeft: 20
                    }}>Credit Card</Title>
                </View>
                <View style={styles.con}>
                    <Title style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginBottom: 30
                    }}>Card Name</Title>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#D3D3D3"
                        style={styles.textInput}
                        autoCapitalize='none'

                    />
                    <Title style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginBottom: 30
                    }}>Card Number</Title>
                    <TextInput
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        placeholderTextColor="#D3D3D3"
                        style={styles.textInput}
                        autoCapitalize='none'
                    />

                </View>
                <View style={styles.rowContainer}>



                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.inputWrap}>
                        <Title style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginBottom: 30,
                            alignSelf: "center",
                            outerWidth: 10
                        }}>End</Title>

                        <TextInput
                            placeholder="MM"
                            placeholderTextColor="#D3D3D3"
                            style={{
                                flex: 1,
                                marginTop: Platform.OS === 'ios' ? 0 : -12,
                                paddingLeft: 10,
                                marginBottom: 20,
                                backgroundColor: "#fff",
                                alignSelf: "center"
                            }}
                            autoCapitalize='none'

                        />


                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="YYYY"
                            placeholderTextColor="#D3D3D3"
                            style={[styles.textInput, { marginTop: 50 }, { flex: 0.5 }]}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <Title style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginBottom: 30
                        }}>CVV</Title>
                        <TextInput
                            placeholder="CVV"
                            placeholderTextColor="#D3D3D3"
                            style={[styles.textInput, { flex: 0.5 }]}
                            autoCapitalize='none'

                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Congrats")}>
                        <LinearGradient
                            colors={['#87CEFA', '#1E90FF']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Pay Now</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>

    );

}


export default Payment;
const styles = StyleSheet.create({
    top: {
        flex: 0.1,
        backgroundColor: "#DCDCDC",
        marginBottom: 20,
        borderWidth: 2,
    },
    rowContainer: {
        flexDirection: 'row',
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10
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
    con: {
        marginLeft: 80,
        marginBottom: 30
    },
    middle: {
        flex: 0.6,
        backgroundColor: "#DCDCDC",
        borderWidth: 2,
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: "#fff",
        alignSelf: "flex-start",
    },
});