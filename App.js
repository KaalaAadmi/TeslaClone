// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
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
