import { Text, Image } from "react-native";

import { s } from "./Header.style";

import headerLogo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <Image style={s.image} source={headerLogo} resizeMode="contain" />
      <Text style={s.subtitle}>Tu as probablement un truc à faire</Text>
    </>
  );
};
