import { Image, TouchableOpacity, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";
import { s } from "./MeteoBasic.style";
import { Clock } from "../Clock/Clock";

export const MeteoBasic = ({ temperature, city, interpretation, onPress }) => {
  return (
    <>
      <View style={s.clock}>
        <CustomText>
          <Clock />
        </CustomText>
      </View>

      <CustomText>{city}</CustomText>

      <CustomText style={s.weather_label}>{interpretation.label}</CustomText>

      <View style={s.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <CustomText style={s.temperature}>
            {Math.round(temperature)}°
          </CustomText>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
};
