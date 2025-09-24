import { Text, View, Image, ScrollView, Alert, Button } from "react-native";
import { useState } from "react";
import { myStyle } from "./styles/mystyle";
import { Person } from "./components/person";
const logo = require("./assets/icon.png");
export default function App() {
  const [developer, setDeveloper] = useState({ name: "Gem", year: 2025 });
  return (
    //first view is container
    //second view is item
    //third view is item
    //fourth view is item
    <View style={myStyle.container}>
      <Person name = {"Jame"} age={25}/>
      <Person name = {"John"} age={30}/>
      <Person name = {"Doe"} age={35}/>

      {/* <ScrollView>
        <Image source={logo} style={myStyle.image}></Image>
        <Image
          source={{ uri: "https://picsum.photos/id/9/367/267" }}
          style={myStyle.image}
        ></Image>
        <Text style={myStyle.header}>Hello World!!</Text>
        <Text style={myStyle.content}>
           Developed By {developer.name} | {developer.year}
        </Text>
        <Button
          title="Update Developer"
          onPress={() =>
            //Alert.alert("Hello Button", "Develop By Reat Native")}
            setDeveloper({ name: "Tiwat Posri", year: 2568 })
          }
        ></Button>
      </ScrollView> */}
      {/* <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: "blue",
          alignSelf: "flex-start",
        }}
      ></View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: "yellow",
        }}
      ></View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: "green",
          alignSelf: "flex-end",
        }}
      ></View> */}
    </View>
  );
}
