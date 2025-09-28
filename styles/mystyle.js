import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    // marginTop: 50,
    // marginBottom: 50,
    marginVertical: 50,
    // marginLeft: 10,
    // marginRight: 10,
    marginHorizontal: 10,
    padding: 20,
    //flex type of direction
    //column, row, column-reverse, row-reverse
    flexDirection: "column",
    //flex type of justifyContent
    //flex-start, flex-end, center, space-between, space-around, space-evenly
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  content: {
    fontStyle: "italic",
    backgroundColor: "orange",
    padding: 30,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 15,
    //   image:{
    //     width:300,
    //     height:300,
    //   }
  },
});
