import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    height: "100%",
    width: "100%",
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
});

export default styles;