import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem,Avatar,Button } from "react-native-elements";

let CustomerArray = require("./CustomerList.json");
class Admin_requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCustomers: CustomerArray,
      customersFiltered: CustomerArray,
    };
  }
  render() {
    return (
        <ScrollView>
      <View style={{ flex: 1, padding: 5 }}>
      <View>
          {this.state.allCustomers.map((item, index) => (
            <ListItem key={index} bottomDivider>
              <Avatar source={{ uri: item.image }} />
              <ListItem.Content>
                <ListItem.Title>Name: {item.Name}</ListItem.Title>
                <ListItem.Title>Address: {item.Address}</ListItem.Title>
                <ListItem.Title>Mobile Number: {item.MobileNumber}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Content>
              <View>
                  <Button
                    icon={<Icon name="download" color="#ffff" size="100" />}
                    buttonStyle={{
                      borderRadius: 20,
                     
                      marginRight: 100,
                      width:200,
                      height:50,
                      marginBottom: 10,

                      backgroundColor: "#1E90FF",
                    }}
                    title="Download CV"
                  />
                </View>
                <View>
                  <Button
                    icon={<Icon name="thumbs-up" color="#ffff" size="100" />}
                    buttonStyle={{
                      borderRadius: 20,
                      width:200,
                      height:50,
                      marginRight: 100,
                      marginBottom: 10,

                      backgroundColor: "#1E90FF",
                    }}
                    title="Accept CV"
                  />
                </View>
                <View>
                  <Button
                    icon={<Icon name="thumbs-down" color="#ffff" size="100" />}
                    buttonStyle={{
                      borderRadius: 20,
                      width:200,
                      height:50,
                      marginRight: 100,
                      marginBottom: 10,

                      backgroundColor: "#1E90FF",
                    }}
                    title="Decline CV"
                  />
                </View>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </View>
        </ScrollView>
    );
  }
}

export default Admin_requests;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff",
  },
});
