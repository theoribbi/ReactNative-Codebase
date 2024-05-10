import { View, Image } from "react-native";
import { CustomText } from "../CustomText/CustomText";
import { s } from "./ForecastListItem.style";

export const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <CustomText style={s.day}>{day}</CustomText>
      <CustomText style={s.date}>{date}</CustomText>
      <CustomText style={s.temperature}>{temperature}</CustomText>
    </View>
  );
};
