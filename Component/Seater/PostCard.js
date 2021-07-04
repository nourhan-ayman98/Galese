import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../Seater/Styles/ReqStyles';

const PostCard = ({item}) => {
 
  
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.UserImg}
        />
        <UserInfoText>
          
            <UserName>
             {item.UserName}
            </UserName>
            <PostTime> {item.PostTime}</PostTime>
            </UserInfoText>
            </UserInfo>

          
          <PostText>{item.post}</PostText>
          {item.postImg != null ? <PostImg source={{uri: item.postImg}} /> : <Divider />}
        <Divider />
        <InteractionWrapper>
          
<Interaction active = {item.liked}>
 
  <InteractionText>Accept</InteractionText>

</Interaction>
<Interaction>
 
  <InteractionText>Decline</InteractionText>
</Interaction>
        </InteractionWrapper>
        </Card>
     );

};

export default PostCard;