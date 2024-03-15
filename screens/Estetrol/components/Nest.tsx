import React, { useState } from "react";
import { ReactElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SecuredMarkdown from "../../../components/SecuredMarkdown";

const { width, height }: { width: number; height: number } =
  Dimensions.get("screen");
const Nest = (): ReactElement => {
  return (
    <View style={{ marginLeft: 60 }}>
      <SecuredMarkdown
        keyName="EstetrolNestTitle"
        style={styles.fontStyle}
        element="text"
      />

      <View
        style={{ height: height - 300, marginTop: 100, alignItems: "center" }}
      >
        <View>
          <SecuredMarkdown
            keyName="EstetrolNestParagraph1"
            element="text"
            style={{ fontSize: 24 }}
          />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 65 }}>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontFamily: "Museo", fontSize: 20 }}>
                <SecuredMarkdown
                  keyName="EstetrolNestParagraph2"
                  element="markdown"
                />
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <SecuredMarkdown
                keyName="EstetrolNestParagraph3"
                element="markdown"
              />
            </View>
          </View>
          <View style={{ flex: 30, alignSelf: "center" }}>
            <SecuredMarkdown
              keyName="EstetrolNestParagraph4"
              element="markdown"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Nest;

const styles = StyleSheet.create({
  tablesub: {
    color: "#511d52",
    fontFamily: "MuseoBold",
    textAlign: "left",
  },
  tablenormal: {
    color: "grey",
    fontFamily: "Museo",
    textAlign: "left",
  },
  aligncenter: { textAlign: "center", fontFamily: "Museo", fontSize: 20 },
  row: {
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    borderColor: "#71abc3",
    width: 150,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderRadius: 5,
    fontFamily: "Museo",
  },
  cellEmpty: {
    width: 150,
    height: 100,
    marginTop: 3,
    marginRight: 3,
  },
  cellSpecial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 100,
    borderTopWidth: 1,
    borderTopColor: "#71abc3",
    borderTopRightRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#71abc3",
    borderBottomRightRadius: 5,
    marginTop: 3,
    marginRight: 3,
    borderRightWidth: 1,
    borderRightColor: "#71abc3",
  },
  smallText: {
    fontSize: 10,
    fontFamily: "Museo",
    marginTop: 5,
  },

  normalText: {
    color: "grey",
    fontFamily: "Museo",
    fontSize: 20,
    position: "relative",
    marginTop: 5,
  },
  subText: {
    color: "#511d52",
    fontFamily: "MuseoBold",
    fontSize: 30,
    fontWeight: "bold",
    position: "relative",
  },
  sub: {
    fontSize: 10,

    fontFamily: "Museo",

    position: "relative",
  },

  fourGrid: {
    display: "flex",
    flexDirection: "column",
    width: width,

    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 150,
  },
  fontStyle: {
    color: "#d9326f",
    fontSize: 60,
    padding: 10,
    fontFamily: "Museo",
    position: "absolute",
    top: 0,
    right: 0,
  },
});
