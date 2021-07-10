import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import StarRating from './StarRating';

const Card = ({itemData, onPress}) => {
  const [shouldShow, setshouldShow]= useState(true);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
         
          <Text numberOfLines={10} style={styles.cardDetails}>{itemData.description}</Text>
        </View>
        
        <View style={styles.button}>
                            <TouchableOpacity >
                                <LinearGradient
                                onPress={() => setshouldShow(!shouldShow)}
                                    colors={['#1E90FF', '#1E90FF']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Accept</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                
                                style={[styles.signIn,
                                {
                                    borderColor: '#1E90FF',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}>
                                <Text
                                    style={[styles.textSign, {
                                        color: '#1E90FF'
                                    }]}
                                >Decline</Text>
                            </TouchableOpacity>
                        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
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
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '20%',
      width: '20%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 200,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 0.5,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 5,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
  });