import { TextInput } from "react-native";
import { s } from "./Searchbar.style";

export const Searchbar = ({ onSubmit }) => {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.input}
      placeholder="Cherche une ville... Ex: Genève"
    ></TextInput>
  );
};
