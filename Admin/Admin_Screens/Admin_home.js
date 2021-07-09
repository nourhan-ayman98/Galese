import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import UsersInfo from "./UsersInfo";
import Chart from "./chart";

const Admin_home = () => {
  return (
    <div className="Home">
      <UsersInfo/>
      <Chart/>
    </div>
  );
};

export default Admin_home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
});