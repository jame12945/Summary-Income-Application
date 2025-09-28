import { View, Button, TextInput } from "react-native";
import { myStyle } from "../styles/mystyle";
import { useState } from "react";
export default function AddForm({ insertData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <View>
      <TextInput
        placeholder="Citizen ID"
        style={myStyle.input}
        keyboardType="default"
        onChangeText={(value) => setName(value)}
      ></TextInput>
      <TextInput
        placeholder="age"
        style={myStyle.input}
        keyboardType="number-pad"
        onChangeText ={(value) => setAge(value)}
      ></TextInput>
      <Button title="Add Information" 
      onPress={() => insertData(name,age)}/>
      {console.log("AddForm Render")}

    </View>
  );
}
