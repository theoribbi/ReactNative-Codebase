import { Text } from "react-native";
import { s } from "./TemperatureDisplay.style";

export const TemperatureDisplay = ({ value, unit }) => {
  return (
    <Text style={s.text}>
      {value} {unit}
    </Text>
  );
};
