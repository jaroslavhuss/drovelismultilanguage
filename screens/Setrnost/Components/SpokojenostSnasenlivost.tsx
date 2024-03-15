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
import MultiImage from "../../../components/MultiImage";
const { width, height } = Dimensions.get("screen");
const SpokojenostSnasenlivost = () => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <SecuredMarkdown
            element="text"
            style={styles.fontStyle}
            keyName="FrugalitySatisfactionTitle"
          />
          <Text>{"\n"}</Text>

          <SecuredMarkdown
            element="markdown"
            keyName="FrugalitySatisfactionParagraph1"
          />
          <View
            style={{
              marginBottom: 20,
              marginTop: 20,
              borderWidth: 2,
              padding: 12,
              borderRadius: 12,
              borderColor: "#d9326f",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,

              elevation: 13,
            }}
          >
            <SecuredMarkdown
              element="markdown"
              keyName="FrugalitySatisfactionParagraph2"
            />
          </View>
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalitySatisfactionParagraph3"
          />

          <View
            style={{
              margin: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <SecuredMarkdown
              style={styles.someItem}
              element="loopstring"
              keyName="FrugalitySatisfactionQuestions"
            />
          </View>
          <Text>{"\n"}</Text>
          <SecuredMarkdown
            element="markdown"
            keyName="FrugalitySatisfactionParagraph4"
          />
          <Text>{"\n"}</Text>
          <MultiImage
            nameOfTheImage="FrugalitySatisfactionImage1"
            style={{
              resizeMode: "contain",
              width: 800,
              height: 250,
              alignSelf: "center",
            }}
          />

          <SecuredMarkdown
            element="markdown"
            keyName="FrugalitySatisfactionParagraph5"
          />
        </View>
      </View>
      <Text style={{ marginBottom: 700 }}></Text>
    </ScrollView>
  );
};

export default SpokojenostSnasenlivost;

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
