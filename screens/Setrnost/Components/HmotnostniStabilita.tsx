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
const HmotnostStabilita = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <SecuredMarkdown
            element="text"
            style={styles.fontStyle}
            keyName="FrugalityWeightTitle"
          />
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalityWeightParagraph1"
          />
          <Image
            source={require("../../../assets/airplane2.png")}
            style={{
              resizeMode: "contain",
              width: 200,
              height: 100,
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 10,
            }}
          />
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalityWeightParagraph2"
          />
          <Image
            source={require("../../../assets/airplane4.png")}
            style={{
              resizeMode: "contain",
              width: 200,
              height: 100,
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 10,
            }}
          />
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalityWeightParagraph3"
          />
        </View>
      </View>
      <Text style={{ marginBottom: 1000 }}></Text>
    </ScrollView>
  );
};

export default HmotnostStabilita;

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
