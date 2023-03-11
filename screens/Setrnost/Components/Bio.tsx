import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import SecuredMarkdown from "../../../components/SecuredMarkdown";
const { width, height } = Dimensions.get("screen");
const Bio = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <SecuredMarkdown
            element="text"
            style={styles.fontStyle}
            keyName="FrugalityBioTitle"
          />
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalityBioParagraph1"
          />
          <Image
            source={require("../../../assets/soya.png")}
            style={{
              resizeMode: "contain",
              width: 400,
              height: 200,
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 10,
            }}
          />
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalityBioParagraph2"
          />
        </View>
      </View>
      <Text style={{ marginBottom: 200 }}></Text>
    </ScrollView>
  );
};

export default Bio;

const styles = StyleSheet.create({
  someItem: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 12,
    margin: 5,
    borderColor: "#5c294fd9",
  },
  fontStyle: {
    color: "#d9326f",
    fontSize: 25,
    padding: 10,
    fontFamily: "Museo",
  },
  content: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    width,
    height: height - 170,
    zIndex: -2,
  },
  wrapper: {
    width: width - 300,
    alignSelf: "center",
  },
});
