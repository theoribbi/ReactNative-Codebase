import { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { s } from "./Home.style";

import { useNavigation } from "@react-navigation/native";

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "../../api/meteo";

import { getWeatherInterpretation } from "../../services/meteo-service";

import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { Container } from "../../components/Container/Container";
import { Searchbar } from "../../components/searchbar/Searchbar";

export const Home = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const nav = useNavigation();
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

  const getUserCoords = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  };

  const fetchWeather = async (coordinates) => {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  };

  const fetchCity = async (coordinates) => {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  };

  const fetchCoordsByCity = async (city) => {
    try {
      const coords = await MeteoAPI.fetchCoordsFromCity(city);
      setCoords(coords);
    } catch (e) {
      Alert.alert("Erreur", e);
    }
  };

  const goToForecastPage = () => {
    nav.navigate("Forecast", { city, ...weather.daily });
  };

  return currentWeather ? (
    <Container>
      <View style={s.meteo_basic}>
        <MeteoBasic
          onPress={goToForecastPage}
          temperature={currentWeather?.temperature}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        />
      </View>
      <View style={s.searchbar_container}>
        <Searchbar onSubmit={fetchCoordsByCity} />
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dawn={weather.daily.sunset[0].split("T")[1]}
          dusk={weather.daily.sunrise[0].split("T")[1]}
        />
      </View>
    </Container>
  ) : null;
};
