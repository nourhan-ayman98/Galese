import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,SafeAreaView } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';


const Messages = [
  {
    id: '1',
    userName: 'Marie Micheal',
    userImg: require('../Admin_icons/user1woman.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'We will respond you as soon as possible',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../Admin_icons/user2man.jpg'),
    messageTime: 'last week',
    messageText:
      'Thanks for your help',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Admin_icons/user3man.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'All the sitters decline my requests',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../Admin_icons/user2woman.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Please Check your wallet again',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../Admin_icons/user3woman.jpg'),
    messageTime: '2 days ago',
    messageText:
      'I have problems with payment by mastercard',
  },
  {
    id: '1',
    userName: 'Joe Paul',
    userImg: require('../Admin_icons/user2man.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Have a nice Weekend.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../Admin_icons/user2man.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'I will call the Support to help us',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Admin_icons/user3man.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../Admin_icons/user3man.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../Admin_icons/user3woman.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const ExploreScreen = ({navigation}) => {
  return (
    <Container>
        <SafeAreaView>
      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card
          itemData={item}
           onPress={()=> navigation.navigate('ChatScreen', {itemData: item})}> 
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </SafeAreaView>
    </Container>

    
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});