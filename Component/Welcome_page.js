import { Dimensions, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Constants } from 'react-native-unimodules';
import { LinearGradient } from 'expo-linear-gradient';
import MatrialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animated from 'react-native-animatable';
import { getUserData } from '../Classes/Data_base';
import { connect } from 'react-redux';
import { get_User_Data } from '../Actions/DatabaseAction';




class Welcome_page extends Component {
  

    render() {
      
        const { navigate } = this.props.navigation;
        const navigation_ = () => {

            navigate("SignScreen");
        }
        const get_read = () => {
            this.props.getdata();
            console.log(this.props.users_statte);

        }
        const functionCombined = () => {
            navigation_();
            get_read();
        }


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animated.Image animation="bounceIn"
                        duraton="1500"
                        source={require('../Images/imageedit_9_3561471378.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    >

                    </Animated.Image>
                </View>
                <Animated.View style={styles.footer} animation="fadeInUpBig">


                    <Text style={styles.title}> Part of being a person is about helping others </Text>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={functionCombined}>
                            <LinearGradient
                                colors={['#800080', '#800080']}
                                style={styles.signIn}>
                                <Text style={styles.textSign}>Get Started</Text>
                                <MatrialIcon
                                    name="navigate-next"
                                    color="white"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </Animated.View>
            </View>

        )
    }
}


const mapDispatch = (dispatch) => {
    var states;
    getUserData("/Users/").then(state => {
        states = state;
    });
    return {
        getdata: () => dispatch(get_User_Data(states))
    }

}
const mapStateToProps = (state) => {
    return {
        users_statte: state
    }
}

export default connect(mapStateToProps, mapDispatch)(Welcome_page);



const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#800080',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },


    button: {

        alignItems: 'flex-end',
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
        fontWeight: 'bold'
    },
});
