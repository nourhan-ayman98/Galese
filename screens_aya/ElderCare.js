import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
  ImageBackground,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Eldermarkers, mapDarkStyle, mapStandardStyle } from './ElderMap';
import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ElderCare = (props) => {
  const theme = useTheme();
  const initialMapState = {
    Eldermarkers,
    categories: [

      // { 
      //   name: 'Customer Service', 
      // //  icon: <MaterialCommunityIcons style={styles.chipsIcon} name="ios-sick" size={18} />,

      // },
      // {
      //   name: 'Help',
      //  // icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
      // },
      //{
      //   name: 'Child Care',
      //   //icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
      // },
      // {
      //   name: '',
      //   //icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
      // },
      // {
      //   name: 'Hotel',
      //   //icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
      // },
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = React.useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.Eldermarkers.length) {
        index = state.Eldermarkers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.Eldermarkers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.Eldermarkers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20);
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View style={styles.container}>
          
       {/* <View style={styles.header}>
        <Animated.Image animation="bounceIn"
          duraton="1500"
          source={require('../Images/imageedit_9_3561471378.png')}
          style={styles.logo}
          resizeMode="stretch"
        >

        </Animated.Image>
      </View> */}
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
      >
        {state.Eldermarkers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          //el web bydrab hna

        })}
      </MapView>
      
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}

        />
        <Ionicons name="ios-search" size={20} />
      </View>

      
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{ // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem}>
            {category.icon}
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

     
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.Eldermarkers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />

            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>

              <Text numberOfLines={3} style={styles.cardDescription}>{marker.description}</Text>
              <br></br>
              <br></br>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Payment");
                  }}
                  style={[styles.signIn, {
                    borderColor: '#1E90FF',
                    borderWidth: 1
                  }]}
                >

                  <Text style={[styles.textSign, {
                    color: '#1E90FF'
                  }]}>Reserve Now</Text>


                </TouchableOpacity>

              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
 
    </View>
  );
};

export default ElderCare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,

  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 400,
    width: 490,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 18,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3

  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        paddingBottom:250
},
});