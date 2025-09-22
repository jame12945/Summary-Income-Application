import { Text, View, Image, ScrollView } from "react-native";
import { myStyle } from "./styles/mystyle";
const logo = require("./assets/icon.png");
export default function App() {
  return (
    //first view is container
    //second view is item
    //third view is item
    //fourth view is item
    <View style={myStyle.container}>
      <ScrollView>
        <Image source={logo} style={myStyle.image}></Image>
        <Image
          source={{ uri: "https://picsum.photos/id/9/367/267" }}
          style={myStyle.image}
        ></Image>
        <Text style={myStyle.header}>Hello World!</Text>
        <Text style={myStyle.content}>Developed By Jame</Text>

        <Text style={myStyle.content}>
          {" "}
          at FlowParserMixin.parseStatementLike (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:2949:24)
          at FlowParserMixin.parseStatementListItem
          (/Users/tiwatposri/Desktop/My Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:12756:17)
          at FlowParserMixin.parseBlockOrModuleBlockBody
          (/Users/tiwatposri/Desktop/My Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:13325:61)
          at FlowParserMixin.parseBlockBody (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:13318:10)
          at FlowParserMixin.parseBlock (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:13306:10)
          at FlowParserMixin.parseFunctionBody (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:12110:24){" "}
        </Text>

        <Text style={myStyle.content}>
          {" "}
          at FlowParserMixin.parseStatementLike (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:2949:24)
          at FlowParserMixin.parseStatementListItem
          (/Users/tiwatposri/Desktop/My Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:12756:17)
          at FlowParserMixin.parseBlockOrModuleBlockBody
          (/Users/tiwatposri/Desktop/My Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:13325:61)
          at FlowParserMixin.parseBlockBody (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:13318:10)
          at FlowParserMixin.parseBlock (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:13306:10)
          at FlowParserMixin.parseFunctionBody (/Users/tiwatposri/Desktop/My
          Project/React Native
          Project/MyApplication/myapp/node_modules/@babel/parser/lib/index.js:12110:24){" "}
        </Text>
      </ScrollView>
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
