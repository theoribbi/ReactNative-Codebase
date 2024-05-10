import { useRoute, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

import { Container } from "../../components/Container/Container";
import { CustomText } from "../../components/CustomText/CustomText";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { dateToDDMM, DAYS } from "../../services/date-service";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { s } from "./Forecast.style";

export const Forecast = () => {
  const { params } = useRoute();
  const nav = useNavigation();

  const backButton = (
    <TouchableOpacity
      style={s.back_btn}
      onPress={() => {
        nav.goBack();
      }}
    >
      <CustomText> {"<"} </CustomText>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.header_texts}>
        <CustomText>{params.city}</CustomText>
        <CustomText style={s.subtitle}>Prévision sur 7 jours</CustomText>
      </View>
    </View>
  );

  const forecastList = (
    <View style={s.forecastList}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const temperature = params.temperature_2m_max[index];
        const d = `${date.getDate().toString().padStart(2, "0")}/${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}`;
        return (
          <ForecastListItem
            image={image}
            day={day}
            key={time}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
};
