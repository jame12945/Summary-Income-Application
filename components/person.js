import { View, Text } from "react-native";
import { myStyle } from "../styles/mystyle";
export const Person = (props) => {
//   console.log(props);
  return (
    <View style={myStyle.content}>
      <Text style={myStyle.header}>Name: {props.name} Year:{props.age}</Text>
    </View>
  );
};
