import {StyleSheet} from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    //flex type of direction
    //column, row, column-reverse, row-reverse
    flexDirection: "column",
    //flex type of justifyContent
    //flex-start, flex-end, center, space-between, space-around, space-evenly
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
  content: {
    fontStyle: "italic",
  },
  image:{
    width:300,
    height:300,
  }
});