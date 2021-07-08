import React from 'react';
import { View, StyleSheet ,ImageBackground} from 'react-native';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';



//const[isDarkTheme, setIsDarkTheme]=React.useState(false);
// //const toggleTheme =()=>{
//     setIsDarkTheme(! isDarkTheme);
// }
export function DrawerContent(props) {
    return (
        <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={85}
                            />

                        </View>

                        <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                            <Title style={styles.title}>Aya Tawfik</Title>
                            <Caption style={styles.Caption}> Patient </Caption>
                        </View>



                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>My Rate</Paragraph>
                                <Caption style={styles.caption}>4.5 Stars</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>ID</Paragraph>
                                <Caption style={styles.caption}>2458</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={styles.x}
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={'#000000'}
                                    size={size}
                                />
                            )}
                            label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-outline"
                                    color={'#000000'}
                                    size={size}
                                />
                            )}
                            label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={'#000000'}
                                    size={size}
                                />
                            )}
                            label="Scanning"
                        onPress={() => {props.navigation.navigate('Bookmark')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="settings-outline"
                                    color={'#000000'}
                                    size={size}
                                />
                            )}
                            label="Settings"
                        onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="shield-checkmark-outline"
                                    color={'#000000'}
                                    size={size}
                                />
                            )}
                            label="Support"
                         onPress={() => {props.navigation.navigate('Support')}}
                        />

                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple >
                            <View style={styles.preference}>
                                <Text >Dark Theme</Text>
                                <View >
                                    <Switch />

                                </View>


                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="log-in-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />

            </Drawer.Section>

        </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        
    },
    userInfoSection: {
        paddingLeft: 20,
        
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
     
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color:'#000000'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        
    },
    drawerSection: {
        marginTop: 15,
        color:'#000000'
       
    },
    bottomDrawerSection: {
        marginBottom: 15,
       borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
       
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
       
    },
    x:{
        color:'#000000',
    }
});