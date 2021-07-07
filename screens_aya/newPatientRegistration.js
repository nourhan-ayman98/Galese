import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ImageBackground, StatusBar, Alert, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { RadioButton } from 'react-native-paper';
// type PickerProps = {

//     selectedValue: any,
//     onValueChange: (selectedValue: any) => void,

//   };

//   type PickerItemProps = {

//     onPress: (value: any) => void
//   };

class newPatientRegistration extends Component {

    states = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
    }
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
        },
        data8: {
            position: ''
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

            return true;
        }
        else {
            return false;
        }
    }
    func() {

        if (this.state.role === 'Schedule Appointment ') {
            this.props.navigation.navigate('newRegistration');
        }
    }
    render() {
        // const radioButtonsData = [{
        //     id: '1', // acts as primary key, should be unique and non-empty string
        //     label: 'Sitter',
        //     value: 'Sitter'
        // }, {
        //     id: '2',
        //     label: 'Nurse',
        //     value: 'Nurse'
        // }]
        // const [radioButtons, setRadioButtons] = useState(radioButtonsData)
        const { navigate } = this.props.navigation;
        //const [checked, setChecked] = React.useState('first');
        return (

            <View style={styles.container}>
<ScrollView>
                <View style={styles.header}>
                    <Text style={[styles.text_header, { marginTop: 35 }]}>Reservation </Text>
                </View>
                <View style={styles.footer}>

                    {/* <Text style={styles.text_footer}> Patient Name </Text>
                    <br></br>

                    <Picker
                        selectedValue={this.state.data8}

                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemPosition) => {
                            this.state.data8.position = itemPosition.valueOf();
                            if (this.state.data8.position == 1) {
                                navigate("newRegistration");
                            }
                        }
                        }
                    >
                        <Picker.Item label="Ahmed Mohamed " value=" Ahmed Mohamed" />
                        <Picker.Item label=" Add New Patient" value=" Add New Patient" />

                    </Picker> */}
                    <Text style={styles.text_footer}> Medical Description Status </Text>
                    <View style={styles.action}>
                        <Fontisto
                            name="prescription"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert the patient medical issues"
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'
                        />
                    </View>


                    <Text style={styles.text_footer}> Bills Taken </Text>
                    <View style={styles.action}>
                        <Fontisto
                            name="prescription"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert the Bills Taken before ..."
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'
                        />
                    </View>

                    <Text style={styles.text_footer}> Period of Time </Text>
                   
                    {/* <Picker
                        selectedValue={this.states.Artist}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ Artist: itemValue })
                    
                    
                    }
                        
                    >
                        <Picker.Item label="30 mins" value="Paintings" />
                        <Picker.Item label="1 h" value="Works of the 19th Century " />
                        <Picker.Item label="2 hrs" value="Statues" />
                        <Picker.Item label="3 hrs" value="x" />
                        <Picker.Item label="4 hrs" value="y" />
                        <Picker.Item label="5 hrs" value="z" />
                        <Picker.Item label="6 hrs" value="c" />
                        <Picker.Item label="7 hrs" value="v" />
                        <Picker.Item label="8 hrs" value="b" />
                        <Picker.Item label="9 hrs" value="d" />
                        <Picker.Item label="10 hrs" value="e" />
                        <Picker.Item label="11 hrs" value="r" />
                        <Picker.Item label="Full Day " value="w" />
                        <Picker.Item label="Schedule Appointment " value="p" />
                    </Picker> */}

                    <Picker
                        selectedValue={this.state.data8}

                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemPosition) => {
                            this.state.data8.position = itemPosition.valueOf();
                            if (this.state.data8.position == 13) {
                                navigate("newRegistration");
                            }
                        }
                        }
                    >
                        <Picker.Item label="30 mins" value="a" />
                        <Picker.Item label="1 hour" value="b" />
                        <Picker.Item label="2 hours" value="c" />
                        <Picker.Item label="3 hours" value="d" />
                        <Picker.Item label="4 hours" value="e" />
                        <Picker.Item label="5 hours" value="f" />
                        <Picker.Item label="6 hours" value="g" />
                        <Picker.Item label="7 hours" value="h" />
                        <Picker.Item label="8 hours" value="i" />
                        <Picker.Item label="9 hours" value="j" />
                        <Picker.Item label="10 hours" value="k" />
                        <Picker.Item label="11 hours" value="l" />
                        <Picker.Item label="Full Day" value="m" />
                        <Picker.Item label="Schedule Appointment" value="n" />
                     {/* //   <Picker.Item label=" Add New Patient" value=" Add New Patient" /> */}

                    </Picker>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Budget Range per hour </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="money"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder=" Insert your budget range .."
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />

                    </View>

                    {/* <Text style={styles.text_footer}> Choose The  Category </Text>
                    <br></br>

                    <Picker
                        selectedValue={this.state.data8}

                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemPosition) => {
                            this.state.data8.position = itemPosition.valueOf();
                            if (this.state.data8.position == 1) {
                                navigate("newRegistration");
                            }
                        }
                        }
                    >
                        <Picker.Item label="Children " value="Child" />
                        <Picker.Item label="Elder People" value=" Add New Patient" />

                    </Picker> */}

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

                    <Text style={styles.text_footer}> Enter Age </Text>
                    <View style={styles.action}>
                        <Fontisto
                            name="calendar"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert your Age"
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
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

                    {/* <Text style={styles.text_footer}> Address  </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="home"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert your Address .."
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
                    </View> */}

                    {/* <View>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                    </View> */}
                    {/* <RadioGroup
                        radioButtons={radioButtons}
                        onPress={onPressRadioButton}
                    /> */}

                    <View style={styles.button}>
                        {this.check_password(this.state.data2.password, this.state.data3.confirm_password) ?
                            <TouchableOpacity
                                onPress={() => navigate("ElderCare")}>
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
                </ScrollView>
            </View >
        );
    }
}


export default newPatientRegistration;
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
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderColor: '#000',
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '150px',
        width: '150px',
        alignSelf: 'center',
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,

    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#B5E2E3',

    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});
