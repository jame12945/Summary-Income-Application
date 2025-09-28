import { View, Text ,TouchableOpacity} from "react-native";
import { myStyle } from "../styles/mystyle";
import AntDesign from '@expo/vector-icons/AntDesign';
export const Person = ({item,deleteData}) => {
//   console.log(props);
  return (
    <TouchableOpacity onPress = {()=> deleteData(item.id)}>
    <View style={myStyle.content}>
      <Text style={myStyle.header}>Name: {item.name} Year:{item.age}</Text>
     <AntDesign name="delete" size={24} color="black" />
    </View>
    </TouchableOpacity>
  );
};