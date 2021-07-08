
// import { Dimensions, View, Text, TouchableOpacity,ImageBackground, TextInput, StyleSheet, StatusBar, Alert, ScrollView} from 'react-native';
// import React ,{Component} from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Platform,FlatList} from 'react-native';
// import { Constants } from 'react-native-unimodules';
// import Feather from 'react-native-vector-icons/Feather';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import * as Animated from 'react-native-animatable';
// import {
//     useTheme,
//     Avatar,
//     Title,
//     Caption,
//     Paragraph,
//     Drawer,
  
//     TouchableRipple,
//     Switch
// } from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';

// class ProfileScreen extends Component{
//     state = {
//         data: {
//             email: '',
//             check_textInputChange: false,
//         },
//         data2: {
//             password: '',
//         },
//         data3: {
//             confirm_password: '',
//         },
//         data4: {
//             secureTextEntry: true,
//         },
//         data5:{
//             confirm_secureTextEntry: true,
//         }
       
//     }
//     textInputChange = (val) => {
//         if (val.trim().length >= 4) {
//             this.setState({
//                 data: {
//                     email: val,
//                     check_textInputChange: true,
//                 }
//             });
//         } else {
//             this.setState({
//                 data: {
//                     email: val,
//                     check_textInputChange: false,
//                 }
//             });
//         }
//     }
//     handlePassChange = (val) => {
//         this.setState({
//             data2: {
//                 password: val,
//             }

//         })
//     }
//     handlePassChange_Confirm = (val) => {
//         this.setState({
//             data3: {
//                 confirm_password: val,
//             },

//         })
//     }
//     updateSecureTextEntry = () => {
//         this.setState({
//             data4: {
//                 secureTextEntry: !this.state.data4.secureTextEntry
//             }
//         })
//     }
//     updateSecureTextEntry_confirm = () => {
//         this.setState({
//             data5:{
//                 confirm_secureTextEntry:!this.state.data5.confirm_secureTextEntry,
//             }
//         })
//     }
//     check_password(val1,val)
//     {
//         if (val1===val)
//         {
//             return true;
//         }
//         else 
//         {
//             return false;
//         }
//     }
//     render(){
//         const { navigate } = this.props.navigation;
//         return(

//             <Animated.View style={styles.container}>
//                 <ScrollView>
//                  <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
//                  <StatusBar backgroundColor='#87CEFA' barStyle="light-content" />

//                <View style={styles.header}>
//                  <Avatar.Image 
//                                 source={
//                                     require('../Component/Seater/assets/users/user-7.jpg')
//                                 }
//                                 size={100}
//                             />
//                  </View>
//                  <Animated.View animation="fadeInUpBig" style={styles.footer}>
                 
//                     <Text style={styles.text_footer}> Name  </Text>
//                         <View style={styles.action}>
//                         <FontAwesome
//                                 name="user-o"
//                                 color="#05375a"
//                                 size={20}
//                             />
//                             <TextInput
//                                 placeholder="Your Name"
//                                 style={styles.textInput}
//                                 autoCapitalize='none'
//                             />
                           
//                         </View>
                        
//                         <Text style={[styles.text_footer, { marginTop: 30 }]}> Phone Number  </Text>
//                         <View style={styles.action}>
//                         <FontAwesome
//                                 name="phone"
//                                 color="#05375a"
//                                 size={20}
//                             />
//                             <TextInput
//                                 placeholder="Your Phone Number"
//                                 style={styles.textInput}
//                                 autoCapitalize='none'
//                             />
//                         </View>

//                         <Text style={[styles.text_footer, { marginTop: 30 }]}> Medical Description  </Text>
//                         <View style={styles.action}>
//                         <FontAwesome
//                                 name="file"
//                                 color="#05375a"
//                                 size={20}
//                             />
//                             <TextInput
//                                 placeholder="Your Job Description"
//                                 style={styles.textInput}
//                                 autoCapitalize= 'sentences'
//                             />
                           
//                         </View>
//                         <Text style={[styles.text_footer, { marginTop: 30 }]}> Email  </Text>
//                         <View style={styles.action}>
//                         <FontAwesome
//                                 name="envelope"
//                                 color="#05375a"
//                                 size={20}
//                             />
//                             <TextInput
//                                 placeholder="Your Email"
//                                 style={styles.textInput}
//                                 autoCapitalize='none'
//                                 onChangeText={(val) => this.textInputChange(val)}
//                             />
                           
                          
                            
                            
//                             {this.state.data.check_textInputChange ?
//                                 <Animated.View animation="bounceIn">

//                                     <Feather
//                                         name="check-circle"
//                                         color="#87CEFA"
//                                         size={20}
//                                     />
//                                 </Animated.View>
//                                 : null}
//                         </View>
//                         <Text style={[styles.text_footer, { marginTop: 30 }]}> Password </Text>
//                         <View style={styles.action}>
//                             <FontAwesome
//                                 name="lock"
//                                 color="#05375a"
//                                 size={20}
//                             />
//                             <TextInput
//                                 placeholder="Your Password"
//                                 secureTextEntry={this.state.data4.secureTextEntry? true : false}
//                                 style={styles.textInput}
//                                 autoCapitalize='none'
//                                 onChangeText={(val)=>this.handlePassChange(val)}
//                             />
//                             <TouchableOpacity
//                                 onPress={this.updateSecureTextEntry}>
//                                 <Feather
//                                     name="eye-off"
//                                     color="grey"
//                                     size={20}
//                                 />
//                             </TouchableOpacity>

//                         </View>
//                         <Text style={[styles.text_footer, { marginTop: 30 }]}> Confirm Password </Text>
//                         <View style={styles.action}>
//                             <FontAwesome
//                                 name="lock"
//                                 color="#05375a"
//                                 size={20}
//                             />
//                             <TextInput
//                                 placeholder="Confirm Password"
//                                 secureTextEntry={this.state.data5.confirm_secureTextEntry ? true : false}
//                                 style={styles.textInput}
//                                 autoCapitalize='none'
//                                 onChangeText={(val)=>this.handlePassChange_Confirm(val)}
//                             />
//                             <TouchableOpacity
//                                 onPress={this.updateSecureTextEntry_confirm}>
//                                 <Feather
//                                     name="eye-off"
//                                     color="grey"
//                                     size={20}
//                                 />
//                             </TouchableOpacity>

//                         </View>
//                         <View style={styles.button}>
//                         {this.check_password(this.state.data2.password,this.state.data3.confirm_password) ? 
//                             <TouchableOpacity 
                           
//                                 style={[styles.signIn,
//                                 {
//                                     borderColor: '#87CEFA',
//                                     borderWidth: 1,
//                                     marginTop: 15
//                                 }]}
//                                 onPress={()=>{
//                                     navigate("Seater Home ");
//                                 }}>

//                                 <Text
//                                     style={[styles.textSign, {
//                                         color: '#1E90FF'
//                                     }]}
//                                 >Edit Profile</Text>
//                             </TouchableOpacity>

//                             :null}
//                         </View>
                      
//                       </Animated.View>
//                       </ImageBackground>
//                       </ScrollView>
//             </Animated.View>
//         );
//     }
// }


// export default ProfileScreen;
// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.28;
// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#87CEFA',
//       flexDirection: 'column'
//     },
//     header: {
        
//         flex:1.75,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 30,
//         paddingBottom: 10
//     },
//     footer: {
//         flex: 8,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingVertical: 20,
//         paddingHorizontal: 30

//     },
//     ProfilePic: {
//         width: height_logo,
//         height: height_logo
//     },
//      textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
//     },
//     title: {
//         color: 'black',
//         fontSize: 30,
//         fontWeight: 'bold'
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 40
//     },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 19
//     },

//     button: {

//         alignItems: 'flex-end',
//         marginTop: 10,
//     },
//     signIn: {
//         width: 160,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 50,
//         flexDirection: 'row'
//     },
//     textSign: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#87CEFA',
//         paddingBottom: 5
//     },
    
// });



import { Dimensions, View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar, Alert,ImageBackground,ScrollView} from 'react-native';
import React ,{Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Platform,FlatList} from 'react-native';
import { Constants } from 'react-native-unimodules';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
  
    TouchableRipple,
    Switch
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

class ProfileScreen extends Component{
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
            data5:{
                confirm_secureTextEntry:!this.state.data5.confirm_secureTextEntry,
            }
        })
    }
    check_password(val1,val)
    {
        if (val1===val)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    render(){
        const { navigate } = this.props.navigation;
        return(

            <Animated.View style={styles.container}>
                <ScrollView>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                 <StatusBar backgroundColor='#87CEFA' barStyle="light-content" />

             
               <View style={styles.header}>
                 <ImageBackground
                                source={
                                    require('../Component/Seater/assets/users/user-7.jpg')
                                }
                               style={{height:100,width: 100}}
                               imageStyle={{borderRadius:15}}
                                
                            >
                                <View style={{
                                    flex:1,
                                    justifyContent:'center',
                                    alignItems: 'center',
                                 } }>
                                     <Icon name="camera" size={35} color="#fff" style={{
                                         opacity:0.7,
                                         alignItems:'center',
                                         justifyContent:'center',
                                         borderWidth:1,
                                         borderColor:'#fff',
                                         borderRadius:10,
                                     }}/>
                                 </View>

                                </ImageBackground>
                 </View>
                 <Animated.View animation="fadeInUpBig" style={styles.footer}>
                 <Text style={[styles.text_footer, { marginTop: 30 }]}> First Name  </Text>
                 <View style={styles.action}>
         <FontAwesome name="user-o" color="#05375a" size={20} />
         
         <TextInput
           placeholder="First Name"
           placeholderTextColor="#666666"
           autoCorrect={false}
           //value={userData ? userData.fname : ''}
           onChangeText={(txt) => setUserData({...userData, fname: txt})}
           style={styles.textInput}
         />
       </View>

       <Text style={[styles.text_footer, { marginTop: 30 }]}> Last Name  </Text>
       <View style={styles.action}>
         <FontAwesome name="user-o" color="#05375a" size={20} />
         <TextInput
           placeholder="Last Name"
           placeholderTextColor="#666666"
           //value={userData ? userData.lname : ''}
           onChangeText={(txt) => setUserData({...userData, lname: txt})}
           autoCorrect={false}
           style={styles.textInput}
         />
       </View>

       <Text style={[styles.text_footer, { marginTop: 30 }]}> About Me </Text>
       <View style={styles.action}>
         <Ionicons name="ios-clipboard-outline" color="#05375a" size={20} />
         <TextInput
           //multiline
           //numberOfLines={3}
           placeholder="About Me"
           placeholderTextColor="#666666"
          // value={userData ? userData.about : ''}
           onChangeText={(txt) => setUserData({...userData, about: txt})}
           autoCorrect={true}
           style={[styles.textInput, {height: 40}]}
         />
       </View>

       <Text style={[styles.text_footer, { marginTop: 30 }]}> Phone Number  </Text>
       <View style={styles.action}>
         <Feather name="phone" color="#05375a" size={20} />
         <TextInput
           placeholder="Phone"
           placeholderTextColor="#666666"
           keyboardType="number-pad"
           autoCorrect={false}
           //value={userData ? userData.phone : ''}
           onChangeText={(txt) => setUserData({...userData, phone: txt})}
           style={styles.textInput}
         />
       </View>

       <Text style={[styles.text_footer, { marginTop: 30 }]}> Country  </Text>
       <View style={styles.action}>
         <FontAwesome name="globe" color="#05375a" size={20} />
         <TextInput
           placeholder="Country"
           placeholderTextColor="#666666"
           autoCorrect={false}
           //value={userData ? userData.country : ''}
           onChangeText={(txt) => setUserData({...userData, country: txt})}
           style={styles.textInput}
         />
       </View>
       <Text style={[styles.text_footer, { marginTop: 30 }]}> City  </Text>
       <View style={styles.action}>
         <MaterialCommunityIcons
           name="map-marker-outline"
           color="#05375a"
           size={20}
         />
         <TextInput
           placeholder="City"
           placeholderTextColor="#666666"
           autoCorrect={false}
           //value={userData ? userData.city : ''}
           onChangeText={(txt) => setUserData({...userData, city: txt})}
           style={styles.textInput}
         />
       </View>
                   

                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Medical Description  </Text>
                        <View style={styles.action}>
                        <FontAwesome
                                name="file"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Job Description"
                                style={styles.textInput}
                                autoCapitalize= 'sentences'
                            />
                           
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Email  </Text>
                        <View style={styles.action}>
                        <FontAwesome
                                name="envelope"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                           
                          
                            
                            
                            {this.state.data.check_textInputChange ?
                                <Animated.View animation="bounceIn">

                                    <Feather
                                        name="check-circle"
                                        color="#05375a"
                                        size={20}
                                    />
                                </Animated.View>
                                : null}
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={this.state.data4.secureTextEntry? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val)=>this.handlePassChange(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry}>
                                <Feather
                                    name="eye-off"
                                    color="#05375a"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={[styles.text_footer, { marginTop: 30 }]}> Confirm Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                secureTextEntry={this.state.data5.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val)=>this.handlePassChange_Confirm(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry_confirm}>
                                <Feather
                                    name="eye-off"
                                    color="#05375a"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.button}>
                        {this.check_password(this.state.data2.password,this.state.data3.confirm_password) ? 
                            <TouchableOpacity 
                           
                                style={[styles.signIn,
                                {
                                    borderColor: '#87CEFA',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                                onPress={()=>{
                                    navigate("Seater Home ");
                                }}>

                                <Text
                                    style={[styles.textSign, {
                                        color: '#1E90FF'
                                    }]}
                                >Edit Profile</Text>
                            </TouchableOpacity>

                            :null}
                        </View>
                      
                      </Animated.View>
                      </ImageBackground>
                      </ScrollView>
            </Animated.View>
        );
    }
}


export default ProfileScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#87CEFA',
      flexDirection: 'column'
    },
    header: {
        
        flex:1.75,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 10
    },
    footer: {
        flex: 8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30

    },
    ProfilePic: {
        width: height_logo,
        height: height_logo
    },
     textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    text_footer: {
        color: '#05375a',
        fontSize: 19
    },

    button: {

        alignItems: 'flex-end',
        marginTop: 10,
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
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#87CEFA',
        paddingBottom: 5
    },
    
});
