import React from "react";
import { View, Text, TextInput, StyleSheet, Keyboard, ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
let CustomerArray = require("./CustomerList.json");
class Admin_find extends React.Component {
  state = {
    searchBarFocused: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      allCustomers: CustomerArray,
      customersFiltered: CustomerArray,
    };
  }
  componentDidMount() {
    this.KeyboardDidShow = Keyboard.addListener(
      "keyboaradDidShow",
      this.KeyboardDidShow
    );
    this.KeyboardWillShow = Keyboard.addListener(
      "KeyboardWillShow",
      this.KeyboardWillShow
    );
    this.KeyboardWillHide = Keyboard.addListener(
      "KeyboardWillHide",
      this.KeyboardWillHide
    );
  }

  KeyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };
  KeyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };
  KeyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  searchCustomer(textToSearch) {
    this.setState({
      customersFiltered: this.state.allCustomers.filter((i) =>
        i.Name.toLowerCase().includes(textToSearch.toLowerCase())
      ),
    });
  }
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, padding: 5 }}>
        <Animatable.View
          animation="slideInRight"
          style={{
            height: 50,
            backgroundColor: "ffff",
            flexDirection: "row",
            padding: 5,
            alignItems: "center",
          }}
        >
          <Animatable.View
            animation={
              this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
            }
          >
            <Icon
              name={
                this.state.searchBarFocused ? "md-arrow-back" : "ios-search"
              }
              style={{ fontSize: 24 }}
            />
          </Animatable.View>

          <TextInput
            placeholder="Search User....."
            onChangeText={(text) => {
              this.searchCustomer(text);
            }}
            style={{ fontSize: 24, marginLeft: 15, flex: 1 }}
          />
        </Animatable.View>
        <View>
          {this.state.customersFiltered.map((item, index) => (
            <ListItem key={index} bottomDivider>
              <Avatar source={{ uri: item.image }} />
              <ListItem.Content>
                <ListItem.Title>{item.Name}</ListItem.Title>
                <ListItem.Subtitle>{item.Address}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.MobileNumber}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </View>
      </ScrollView>
    );
  }
}

export default Admin_find;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff",
  },
});
