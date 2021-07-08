import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Admin_main from "../Admin_main/Admin_main";
import { Navigation } from "@material-ui/icons";
import Admin_DContent from "../Drawer_main/Admin_DContent";

const Drawer = createDrawerNavigator();
const Drawer_main = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Admin_DContent {...props} />}>
      <Drawer.Screen name="Home" component={Admin_main} />
    </Drawer.Navigator>
  );
};
export default Drawer_main;
