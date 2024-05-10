import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  header_texts: {
    flex: 1,
    alignItems: "center",
    marginRight: 30,
  },
  subtitle: { fontSize: 20 },
  back_btn: { width: 30 },
  forecastList: {
    marginTop: 50,
  },
});

export { s };
