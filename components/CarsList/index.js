import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "./../CarItem/index";
// import { SafeAreaView } from "react-navigation";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
      // style={{top:36,}}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
      {/* <SafeAreaView forceInset={{ bottom: "never" }} /> */}
    </View>
  );
};

export default CarsList;
