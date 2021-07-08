
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {View, ScrollView, Text, Button, StyleSheet,SafeAreaView} from 'react-native';
import React from "react";

export default function Chart() {
  const data = [
    {
      name: 'Nasr City',
      "Active User": 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'El Shorouk City ',
      "Active User": 1000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Madinaty',
    "Active User" : 1500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Sheikh Zayed City',
      "Active User": 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'New Cairo City',
      "Active User": 1700,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Masr El Gedida',
      "Active User": 3000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '6th of October City',
      "Active User": 700,
      pv: 4300,
      amt: 2100,
    },
  ];
  

  return (
    <View style={styles.chart}>
      <Text style={styles.chartTitle}>System Analytics</Text>
      <ResponsiveContainer width="90%"  height= "50%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip/>
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
          <Legend/>
         
        </LineChart>
      </ResponsiveContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  chart:{
    margin:"20px",
    padding: "20px",
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: {width: 15, height: -10},
    shadowOpacity: 0.2,
    elevation: 1
  },
  chartTitle:{
    marginbottom: "20px",
  }
  
});


