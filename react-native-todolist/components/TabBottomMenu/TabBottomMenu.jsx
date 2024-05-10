import { s } from "./TabBottomMenu.style";
import { View, TouchableOpacity, Text } from "react-native";

export const TabBottomMenu = ({ selectedTabName, onPress, todoList }) => {
  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: todoList.length, inProgress: 0, done: 0 }
  );

  const getTextStyle = (tabName) => {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  };

  return (
    <View style={s.container}>
      <TouchableOpacity>
        <Text
          style={getTextStyle("all")}
          onPress={() => {
            onPress("all");
          }}
        >
          All ({countByStatus.all})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={getTextStyle("inProgress")}
          onPress={() => {
            onPress("inProgress");
          }}
        >
          In progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={getTextStyle("done")}
          onPress={() => {
            onPress("done");
          }}
        >
          Done ({countByStatus.done})
        </Text>
      </TouchableOpacity>
    </View>
  );
};
