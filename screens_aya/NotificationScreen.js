
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  listData,
  ImageBackground,
  ScrollView
  
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Notifications from '../Component/Seater/model/Notifications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const NotificationScreen= ({navigation})=>{


    const Notifications = [
        {
            id: 1,
            title: 'Aya ! Long Time not to see you',
            details: 'Because you are a special Client, Check our Recent promo codes and Reserve now.'
        },
        {
            id: 2,
            title: 'Reminder',
            details: 'Do not forget to drink water today.'
        },
        {
            id: 3,
            title: 'Have a Plast Weekend',
            details: 'You Can celebrate your weekend happily without your kids, Check out our services.'
        },
        {
            id: 4,
            title: 'Payment Receipt',
            details: 'Your Last payment was 350 LE, with Nurse: Marie micheal .'
        },
        {
            id: 5,
            title: 'Money added to your wallet',
            details: '50 LE has been added to your wallet successfully.'
        },
        {
            id: 6,
            title: 'Add money to your wallet',
            details: 'Reminding you you can add money in your wallet before reserving.'
        },
        {
            id: 7,
            title: 'Check new our new updates',
            details: 'Do not forget to upload our new updates, Do not miss it.'
        },
        {
            id: 8,
            title: 'Check our new Nurses ',
            details: 'A new staff of nurses was recently added, please check them'
        },
        {
            id: 9,
            title: 'Happy Friday !',
            details: 'You can leave your children safely with us and enjoy your friday'
        },
        {
            id: 10,
            title: 'Diabilities are not an obsticales ',
            details: 'we are offering a specailized stuff of nurses can handle all these cases.'
        },
    ];

    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
          key: `${index}`,
          title: NotificationItem.title,
          details: NotificationItem.details,
        })),
      );
    
      const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
          rowMap[rowKey].closeRow();
        }
      };
    
      const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
      };
    
      const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
      };
    
      const onLeftActionStatusChange = rowKey => {
        console.log('onLeftActionStatusChange', rowKey);
      };
    
      const onRightActionStatusChange = rowKey => {
        console.log('onRightActionStatusChange', rowKey);
      };
    
      const onRightAction = rowKey => {
        console.log('onRightAction', rowKey);
      };
    
      const onLeftAction = rowKey => {
        console.log('onLeftAction', rowKey);
      };
    
      const VisibleItem = props => {
        const {
          data,
          rowHeightAnimatedValue,
          removeRow,
          leftActionState,
          rightActionState,
        } = props;
    
        if (rightActionState) {
          Animated.timing(rowHeightAnimatedValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            removeRow();
          });
        }
    
        return (
          <Animated.View
            style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
            <TouchableHighlight
              style={styles.rowFrontVisible}
              onPress={() => console.log('Element touched')}
              underlayColor={'#aaa'}>
              <View>
                <Text style={styles.title} numberOfLines={1}>
                  {data.item.title}
                </Text>
                <Text style={styles.details} numberOfLines={1}>
                  {data.item.details}
                </Text>
              </View>
            </TouchableHighlight>
          </Animated.View>
        );
      };
    
      const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60);
    
        return (
          <VisibleItem
            data={data}
            rowHeightAnimatedValue={rowHeightAnimatedValue}
            removeRow={() => deleteRow(rowMap, data.item.key)}
          />
        );
      };
    
      const HiddenItemWithActions = props => {
        const {
          swipeAnimatedValue,
          leftActionActivated,
          rightActionActivated,
          rowActionAnimatedValue,
          rowHeightAnimatedValue,
          onClose,
          onDelete,
        } = props;
    
        if (rightActionActivated) {
          Animated.spring(rowActionAnimatedValue, {
            toValue: 500,
            useNativeDriver: false
          }).start();
        } else {
          Animated.spring(rowActionAnimatedValue, {
            toValue: 75,
            useNativeDriver: false
          }).start();
        }
    
        return (
          <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
            <Text>Left</Text>
            {!leftActionActivated && (
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={onClose}>
                <MaterialCommunityIcons
                  name="close-circle-outline"
                  size={25}
                  style={styles.trash}
                  color="#fff"
                />
              </TouchableOpacity>
            )}
            {!leftActionActivated && (
              <Animated.View
                style={[
                  styles.backRightBtn,
                  styles.backRightBtnRight,
                  {
                    flex: 1,
                    width: rowActionAnimatedValue,
                  },
                ]}>
                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnRight]}
                  onPress={onDelete}>
                  <Animated.View
                    style={[
                      styles.trash,
                      {
                        transform: [
                          {
                            scale: swipeAnimatedValue.interpolate({
                              inputRange: [-90, -45],
                              outputRange: [1, 0],
                              extrapolate: 'clamp',
                            }),
                          },
                        ],
                      },
                    ]}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={25}
                      color="#fff"
                    />
                  </Animated.View>
                </TouchableOpacity>
              </Animated.View>
            )}
          </Animated.View>
        );
      };
    
      const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(60);
    
        return (
          <HiddenItemWithActions
            data={data}
            rowMap={rowMap}
            rowActionAnimatedValue={rowActionAnimatedValue}
            rowHeightAnimatedValue={rowHeightAnimatedValue}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => deleteRow(rowMap, data.item.key)}
          />
        );
      };
    
      return (
        <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
          <StatusBar barStyle="dark-content"/>
          {/* <StatusBar backgroundColor="#FF6347" barStyle="light-content"/> */}
          <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe
            onRowDidOpen={onRowDidOpen}
            leftActivationValue={100}
            rightActivationValue={-200}
            leftActionValue={0}
            rightActionValue={-500}
            onLeftAction={onLeftAction}
            onRightAction={onRightAction}
            onLeftActionStatusChange={onLeftActionStatusChange}
            onRightActionStatusChange={onRightActionStatusChange}
          />
          </ImageBackground>
        </View>
        </ScrollView>
      );
    };
    

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
      flex: 1,
    },
    backTextWhite: {
      color: '#FFF',
    },
    rowFront: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      height: 60,
      margin: 5,
      marginBottom: 15,
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    rowFrontVisible: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      height: 60,
      padding: 10,
      marginBottom: 15,
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
      margin: 5,
      marginBottom: 15,
      borderRadius: 5,
    },
    backRightBtn: {
      alignItems: 'flex-end',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
      paddingRight: 17,
    },
    backRightBtnLeft: {
      backgroundColor: '#1f65ff',
      right: 75,
    },
    backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    trash: {
      height: 25,
      width: 25,
      marginRight: 7,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#666',
    },
    details: {
      fontSize: 12,
      color: '#999',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
  },
  });