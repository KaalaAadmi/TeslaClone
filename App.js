import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";
import CarItem from "./components/CarItem";
import CarsList from "./components/CarsList/index";
import Header from "./components/Header/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="light" backgroundColor="#333"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
