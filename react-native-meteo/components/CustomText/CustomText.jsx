import { Text, useWindowDimensions } from "react-native";
import { s } from "./CustomText.style";

export const CustomText = ({ children, style }) => {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  return (
    <Text style={[s.text, style, { fontSize: fontSize * 0.00118 * height }]}>
      {children}
    </Text>
  );
};
