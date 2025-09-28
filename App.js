import {
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  Button,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { myStyle } from "./styles/mystyle";
import { Person } from "./components/person";
import AddForm from "./components/AddForm";

const logo = require("./assets/icon.png");
export default function App() {
  const [developer, setDeveloper] = useState({ name: "Gem", year: 2025 });
  const defaultData = [
    { id: 1, name: "Jame", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Doe", age: 35 },
    { id: 4, name: "Johan", age: 45 },
  ];
  const [timer, setTimer] = useState(0);

  const [data, setData] = useState(defaultData);
  useEffect(() => {
    let intervalId;
    if (data.length === 0) {
      setTimer(5);
      intervalId = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            setData(defaultData);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timer === 0 && data.length > 0) {
      setTimer(0);
    }
    return () => clearTimeout(intervalId);
  }, [data]);

  const deleteData = (id) => {
    console.log("Delete ID: " + id);
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const insertData = (name, age) => {
    console.log("Insert Name , age: ", name + ", ", age);
    if (name) {
      setData((prevData) => {
        return [{ id: Math.random().toString(), name, age }, ...prevData];
      });
    } else {
      Alert.alert("Error", "Please enter a name");
    }
  };
  return (
    //first view is container
    //second view is item
    //third view is item
    //fourth view is item
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Person item={item} deleteData={deleteData} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            style={{ alignSelf: "center", fontSize: 24, fontWeight: "bold" }}
          >
            People
          </Text>
        }
        ListEmptyComponent={
          <Text
            style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
          >
            No Data
          </Text>
        }
      />
      <AddForm insertData={insertData} />
      <View style={{ alignItems: "center" }}>
        <Text style={myStyle.content}>timer: {timer}</Text>
      </View>

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
