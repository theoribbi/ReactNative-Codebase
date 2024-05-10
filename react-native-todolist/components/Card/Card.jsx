import { TouchableOpacity, Image, Text } from "react-native";
import { s } from "./Card.style";

import checkImg from "../../assets/check.png";

export const Card = ({ todo, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(todo);
      }}
      onLongPress={() => {
        onLongPress(todo);
      }}
      style={s.card}
    >
      <Text
        style={[
          s.text,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={s.img} source={checkImg} />}
    </TouchableOpacity>
  );
};
