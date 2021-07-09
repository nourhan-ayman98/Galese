import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import MatrialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Sigin_up_sitter extends React.Component {
    state = {
        image: null,
    };
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        console.log(result);
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        alert(result.uri);
        console.log(result)

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state;
       
        const { navigate } = this.props.navigation;
        
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                    <View style={styles.footer}>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.button} onPress={()=>{this._pickDocument}}>
                            
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Select CV</Text>
                                    <MatrialIcon
                                        name="navigate-next"
                                        color="white"
                                        size={20}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.button} onPress={()=>{this._pickImage
                            navigate("Congrats_waiting_")}}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Select ID</Text>
                                    <MatrialIcon
                                        name="navigate-next"
                                        color="white"
                                        size={20}
                                    />
                                </LinearGradient>

                            </TouchableOpacity>

                        </View>
                    </View>

                </ImageBackground>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'stretch',
    },
    footer: {
        display: 'flex',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    image: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    button: {

        alignItems: 'center',
        marginTop: 90,
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
