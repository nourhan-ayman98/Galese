import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView ,Image,} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Card } from "react-native-paper";

let RequestsArray = require("./RequestsList.json");
class Admin_History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllRequests: RequestsArray,
  
    };
  }
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, padding: 5 }}>

      <View>
          {this.state.AllRequests.map((item, index) => (
            <ListItem key={index} bottomDivider>
              <Image source={{ uri: item.ServiceType }} style={{width:100,height:100, borderRadius:10, margin:5}}/>
              <ListItem.Content>
              <ListItem.Subtitle> {item.DateTime}</ListItem.Subtitle>
                <ListItem.Title>Client: {item.Client}</ListItem.Title>
                <ListItem.Title>Nurse: {item.Nurse}</ListItem.Title>
                <ListItem.Title>Address: {item.Address}</ListItem.Title>
                <ListItem.Subtitle>Total Hours: {item.Totalhours}</ListItem.Subtitle>
                <ListItem.Subtitle>Cost: {item.Cost}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
        </View>
        </ScrollView>
    );
  }
}

export default Admin_History;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff",
  },
  
});