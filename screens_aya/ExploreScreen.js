import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
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
} from '../Component/Seater/MessageStyles';


const Messages = [
  {
    id: '1',
    userName: 'Marie Micheal',
    userImg: require('../Component/Seater/assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hi, Please Can we make our Appointment at 6 pm instead of 5 pm.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../Component/Seater/assets/users/user-1.jpg'),
    messageTime: 'last week',
    messageText:
      'Dont Forget to do the excesises we did .',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Component/Seater/assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'I Will be there Tomorrow on time',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../Component/Seater/assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Please Check your wallet again',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../Component/Seater/assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'I will call you .',
  },
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../Component/Seater/assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Have a nice Weekend.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../Component/Seater/assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'I will call the Support to help us',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Component/Seater/assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../Component/Seater/assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../Component/Seater/assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const ExploreScreen = ({navigation}) => {
  return (
    <Container>
      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card
          itemData={item}
           onPress={()=> navigation.navigate('UChatScreen', {itemData: item})}> 
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
},
});