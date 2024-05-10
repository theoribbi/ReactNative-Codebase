import { StyleSheet, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";

const s = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#00000043",
  },
});

export const StyledLabel = ({ children }) => {
  return <CustomText style={{ fontSize: 15 }}>{children}</CustomText>;
};

export const StyledValue = ({ children }) => {
  return <CustomText style={{ fontSize: 20 }}>{children}</CustomText>;
};

export const StyledContainer = ({ children }) => {
  return <View style={{ alignItems: "center" }}>{children}</View>;
};

export { s };
