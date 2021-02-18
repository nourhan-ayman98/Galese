import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MatrialIcon from 'react-native-vector-icons/MaterialIcons';




class Registrationchoice extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Registration User")}>
                        <LinearGradient
                            colors={['#fff', '#fff']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>user</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Registration Seater")}>
                        <LinearGradient
                            colors={['#fff', '#fff']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Seater</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}


export default Registrationchoice;
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#800080',
        flexDirection: 'column'
    },
    button: {

        alignItems: 'center',
        marginTop: 70,
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
        color: 'black',
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
