import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useTheme} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({itemData, onPress}) => {

  return (
      
    <ScrollView>
         <TouchableOpacity onPress={onPress}>
<View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Your Patients
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/users/user-6.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Name</Text>
            <Text style={styles.cardDetails}>
             Nada Ahmed mahmoud
            
            </Text>
           
            <Text style={styles.cardTitle}>Status</Text>
            <Text style={styles.cardDetails}>
            Her 65 years old Mother is the Patient who suffers from Al Zhayamer .
          
            </Text>
            <Text style={styles.cardTitle}>Phone Number</Text>
            <Text style={styles.cardDetails}>
            
            01285738292</Text>
            <Text style={styles.cardTitle}>Address</Text>
            <Text style={styles.cardDetails}>
           
            9th Waha Street, Nasr City

          </Text>
          <Text style={styles.cardTitle}>Last visit</Text>
            <Text style={styles.cardDetails}>
           2 Days ago

          </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/users/user-2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Name</Text>
            <Text style={styles.cardDetails}>
             Muhammed Abdelhamid
            
            </Text>
           
            <Text style={styles.cardTitle}>Status</Text>
            <Text style={styles.cardDetails}>
             29 years male patient who suffers from a great accident which reuslted from it a huge injuries in his leg, hands.
          
            </Text>
            <Text style={styles.cardTitle}>Phone Number</Text>
            <Text style={styles.cardDetails}>
            
            01285856587</Text>
            <Text style={styles.cardTitle}>Address</Text>
            <Text style={styles.cardDetails}>
           
            9th El Badr Street, Heliopolis

          </Text>
          <Text style={styles.cardTitle}>Last visit</Text>
            <Text style={styles.cardDetails}>
           3 Days ago

          </Text>
          </View>
        </View>
       <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/users/user-3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Name</Text>
            <Text style={styles.cardDetails}>
             Omnia Mohamed Nasr
            
            </Text>
           
            <Text style={styles.cardTitle}>Status</Text>
            <Text style={styles.cardDetails}>
             Her 13 son is the Patient who suffers from muscle atrophy.
          
            </Text>
            <Text style={styles.cardTitle}>Phone Number</Text>
            <Text style={styles.cardDetails}>
            
            01285856587</Text>
            <Text style={styles.cardTitle}>Address</Text>
            <Text style={styles.cardDetails}>
           
            9th El Badr Street, New Cairo

          </Text>
          <Text style={styles.cardTitle}>Last visit</Text>
            <Text style={styles.cardDetails}>
           3 Days

          </Text>
          </View>
        </View>
        </View>
         
        
        </TouchableOpacity>
    </ScrollView>
  );
}

export default HomeScreen;
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
    height: 230,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
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
    fontSize:16
  },
  cardDetails: {
    fontSize: 14,
    color: '#444',
  },
});