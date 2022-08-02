import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    border: 0,
    alignSelf: "center",
  },
  titles: {
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
